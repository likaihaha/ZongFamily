param(
  [int]$Port = 8787,
  [switch]$NoOpen,
  [switch]$Check
)

$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$serverScript = Join-Path $root "tools\serve_manual_playtest.mjs"
$packetPath = Join-Path $root "docs\manual_playtest_packet.html"
$gamePath = Join-Path $root "game\index.html"

function Fail($Message) {
  Write-Error "Manual playtest session check failed: $Message"
  exit 1
}

function Test-RequiredFile($Label, $Path) {
  if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
    Fail "$Label missing: $Path"
  }

  if ((Get-Item -LiteralPath $Path).Length -le 0) {
    Fail "$Label is empty: $Path"
  }
}

function Test-PortFree($CandidatePort) {
  $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $CandidatePort)
  try {
    $listener.Start()
    return $true
  } catch {
    return $false
  } finally {
    $listener.Stop()
  }
}

function Find-FreePort($StartPort) {
  for ($candidate = $StartPort; $candidate -lt ($StartPort + 20); $candidate += 1) {
    if (Test-PortFree $candidate) {
      return $candidate
    }
  }

  Fail "no free port found from $StartPort to $($StartPort + 19)"
}

Test-RequiredFile "server script" $serverScript
Test-RequiredFile "manual playtest packet" $packetPath
Test-RequiredFile "playable game" $gamePath

if ($Check) {
  Write-Host "Manual playtest session check passed."
  exit 0
}

$sessionPort = Find-FreePort $Port
$env:PORT = "$sessionPort"
$packetUrl = "http://127.0.0.1:$sessionPort/docs/manual_playtest_packet.html"
$gameUrl = "http://127.0.0.1:$sessionPort/game/index.html"
$resultExample = "docs\manual_playtest_result_{0}_observer.md" -f (Get-Date -Format "yyyyMMdd")

Write-Host "Starting manual playtest session..."
Write-Host "Packet: $packetUrl"
Write-Host "Game:   $gameUrl"
Write-Host "Save generated Markdown as: $resultExample"

$process = Start-Process -FilePath "node" `
  -ArgumentList @("tools/serve_manual_playtest.mjs") `
  -WorkingDirectory $root `
  -PassThru `
  -WindowStyle Hidden

try {
  Start-Sleep -Seconds 2

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $packetUrl -TimeoutSec 5
    if ($response.StatusCode -ne 200) {
      Fail "packet URL returned HTTP $($response.StatusCode)"
    }
  } catch {
    Fail "packet URL was not reachable: $($_.Exception.Message)"
  }

  if (-not $NoOpen) {
    Start-Process $packetUrl
  }

  Write-Host ""
  Write-Host "Use the opened packet page to run the session and generate the Markdown result."
  Write-Host "After saving the result file, run: npm.cmd run check:manual-results"
  Write-Host "Press Enter here to stop the local server."
  [void][Console]::ReadLine()
} finally {
  if ($process -and -not $process.HasExited) {
    Stop-Process -Id $process.Id -Force
  }
}
