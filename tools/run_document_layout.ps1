$ErrorActionPreference = "Stop"

$root = (Resolve-Path ".").Path
if (-not (Test-Path (Join-Path $root "game\index.html"))) {
  $root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
}
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) {
  throw "Microsoft Edge not found at $edge"
}

$outDir = Join-Path $root "docs"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$errOut = Join-Path $outDir "document-layout-edge.err.log"
if (Test-Path $errOut) {
  Remove-Item -Force $errOut
}

$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html?layouttest=1"
$edgeArgs = "--headless --disable-gpu --disable-gpu-sandbox --no-sandbox"
$viewports = @(
  @{ Name = "desktop"; Size = "1365,900" },
  @{ Name = "mobile"; Size = "390,900" }
)
$reports = @()

foreach ($viewport in $viewports) {
  $name = $viewport.Name
  $size = $viewport.Size
  $domOut = Join-Path $outDir "document-layout-$name.html"
  $shotOut = Join-Path $outDir "document-layout-$name.png"
  $profile = Join-Path $root ".tmp-edge-profile-layout-$name"
  if (Test-Path $profile) {
    Remove-Item -Recurse -Force $profile
  }

  $cmdDump = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --window-size=$size --virtual-time-budget=1000 --dump-dom `"$url`" > `"$domOut`" 2>>`"$errOut`""
  cmd /c $cmdDump
  if ($LASTEXITCODE -ne 0) {
    throw "Document layout audit failed: Edge dump-dom exited with code $LASTEXITCODE for $name (see docs\document-layout-edge.err.log)"
  }

  $cmdShot = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --window-size=$size --virtual-time-budget=1000 --screenshot=`"$shotOut`" `"$url`" > nul 2>>`"$errOut`""
  cmd /c $cmdShot
  if ($LASTEXITCODE -ne 0) {
    throw "Document layout audit failed: Edge screenshot exited with code $LASTEXITCODE for $name (see docs\document-layout-edge.err.log)"
  }

  if (-not (Test-Path $domOut)) {
    throw "Document layout audit failed: docs\document-layout-$name.html was not generated"
  }
  if ((Get-Item $domOut).Length -le 0) {
    throw "Document layout audit failed: docs\document-layout-$name.html is empty"
  }
  if (-not (Test-Path $shotOut)) {
    throw "Document layout audit failed: docs\document-layout-$name.png was not generated"
  }
  if ((Get-Item $shotOut).Length -le 0) {
    throw "Document layout audit failed: docs\document-layout-$name.png is empty"
  }

  $dom = Get-Content -Raw -Encoding UTF8 $domOut
  if ($dom -notmatch 'data-layouttest="pass"') {
    throw "Document layout audit failed: layouttest marker is not pass for $name"
  }
  $reportMatch = [regex]::Match($dom, '<pre id="document-layout-report">(?<json>.*?)</pre>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
  if (-not $reportMatch.Success) {
    throw "Document layout audit failed: report payload could not be parsed for $name"
  }
  $reportJson = [System.Net.WebUtility]::HtmlDecode($reportMatch.Groups["json"].Value)
  $report = $reportJson | ConvertFrom-Json
  if ($report.status -ne "pass") {
    $failureText = ($report.failures | ConvertTo-Json -Depth 6)
    throw "Document layout audit failed for ${name}: $failureText"
  }
  if ($report.documents -lt 50) {
    throw "Document layout audit failed: expected at least 50 documents for $name, found $($report.documents)"
  }
  $reports += [pscustomobject]@{
    viewport = $name
    size = $size
    documents = $report.documents
    checkedNodes = $report.checkedNodes
    status = $report.status
  }
}

$summaryOut = Join-Path $outDir "document-layout-report.json"
$reports | ConvertTo-Json -Depth 4 | Out-File -Encoding UTF8 $summaryOut
Write-Host "Document layout audit passed. Wrote docs\document-layout-desktop.html, docs\document-layout-mobile.html and screenshots."
