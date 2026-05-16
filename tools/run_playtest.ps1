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
$domOut = Join-Path $outDir "playtest-dom.html"
$shotOut = Join-Path $outDir "playtest-guided.png"
$errOut = Join-Path $outDir "playtest-edge.err.log"
$profile = Join-Path $root ".tmp-edge-profile-playtest"
if (Test-Path $profile) {
  Remove-Item -Recurse -Force $profile
}
if (Test-Path $errOut) {
  Remove-Item -Force $errOut
}

$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html?playtest=1"
$edgeArgs = "--headless --disable-gpu --disable-gpu-sandbox --no-sandbox"

$cmdDump = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --dump-dom `"$url`" > `"$domOut`" 2>`"$errOut`""
cmd /c $cmdDump
if ($LASTEXITCODE -ne 0) {
  throw "Guided playtest failed: Edge dump-dom exited with code $LASTEXITCODE (see docs\playtest-edge.err.log)"
}

$cmdShot = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --screenshot=`"$shotOut`" --window-size=1440,1000 `"$url`" > nul 2>>`"$errOut`""
cmd /c $cmdShot
if ($LASTEXITCODE -ne 0) {
  throw "Guided playtest failed: Edge screenshot exited with code $LASTEXITCODE (see docs\playtest-edge.err.log)"
}

if (-not (Test-Path $domOut)) {
  throw "Guided playtest failed: docs\playtest-dom.html was not generated"
}
$domFile = Get-Item $domOut
if ($domFile.Length -le 0) {
  throw "Guided playtest failed: docs\playtest-dom.html is empty (see docs\playtest-edge.err.log)"
}
if (-not (Test-Path $shotOut)) {
  throw "Guided playtest failed: docs\playtest-guided.png was not generated"
}
$shotFile = Get-Item $shotOut
if ($shotFile.Length -le 0) {
  throw "Guided playtest failed: docs\playtest-guided.png is empty (see docs\playtest-edge.err.log)"
}

$dom = Get-Content -Raw -Encoding UTF8 $domOut
if ($dom -notmatch 'data-playtest="pass"') {
  throw "Guided playtest failed: playtest did not pass"
}
if ($dom -notmatch "guided-playtest-report") {
  throw "Guided playtest failed: report payload not found"
}
$reportMatch = [regex]::Match($dom, '<pre id="guided-playtest-report">(?<json>.*?)</pre>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
if (-not $reportMatch.Success) {
  throw "Guided playtest failed: report payload could not be parsed"
}
$reportJson = [System.Net.WebUtility]::HtmlDecode($reportMatch.Groups["json"].Value)
$report = $reportJson | ConvertFrom-Json
if ($report.status -ne "pass") {
  throw "Guided playtest failed: report status is $($report.status)"
}
if ($report.errors.Count -gt 0) {
  throw "Guided playtest failed: report contains errors: $($report.errors -join '; ')"
}
if ($report.checkpoints.Count -lt 18) {
  throw "Guided playtest failed: expected at least 18 checkpoints, found $($report.checkpoints.Count)"
}
$guidanceCheckpoints = @($report.checkpoints | Where-Object { $_.label -like "Guidance:*" })
if ($guidanceCheckpoints.Count -lt 2) {
  throw "Guided playtest failed: expected at least 2 unlock guidance checkpoints, found $($guidanceCheckpoints.Count)"
}
$missingFallback = @($guidanceCheckpoints | Where-Object { -not $_.hasVisitFallback })
if ($missingFallback.Count -gt 0) {
  throw "Guided playtest failed: some unlock guidance checkpoints do not include the visit fallback"
}
$archivesGuidance = @($guidanceCheckpoints | Where-Object { @($_.suggestedLocations) -contains "archives" })
if ($archivesGuidance.Count -lt 1) {
  throw "Guided playtest failed: Luo Yuezhen locked search should suggest the county archives"
}

Write-Host "Guided playtest passed. Wrote docs\playtest-dom.html and docs\playtest-guided.png"
