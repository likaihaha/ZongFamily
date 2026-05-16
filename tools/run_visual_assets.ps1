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
$domOut = Join-Path $outDir "visual-assets-dom.html"
$shotOut = Join-Path $outDir "visual-assets.png"
$errOut = Join-Path $outDir "visual-assets-edge.err.log"
$profile = Join-Path $root ".tmp-edge-profile-visual-assets"
if (Test-Path $profile) {
  Remove-Item -Recurse -Force $profile
}
if (Test-Path $errOut) {
  Remove-Item -Force $errOut
}

$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html?visualtest=1"
$edgeArgs = "--headless --disable-gpu --disable-gpu-sandbox --no-sandbox"

$cmdDump = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --dump-dom `"$url`" > `"$domOut`" 2>`"$errOut`""
cmd /c $cmdDump
if ($LASTEXITCODE -ne 0) {
  throw "Visual asset audit failed: Edge dump-dom exited with code $LASTEXITCODE (see docs\visual-assets-edge.err.log)"
}

$cmdShot = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --screenshot=`"$shotOut`" --window-size=1440,1000 `"$url`" > nul 2>>`"$errOut`""
cmd /c $cmdShot
if ($LASTEXITCODE -ne 0) {
  throw "Visual asset audit failed: Edge screenshot exited with code $LASTEXITCODE (see docs\visual-assets-edge.err.log)"
}

if (-not (Test-Path $domOut)) {
  throw "Visual asset audit failed: docs\visual-assets-dom.html was not generated"
}
if ((Get-Item $domOut).Length -le 0) {
  throw "Visual asset audit failed: docs\visual-assets-dom.html is empty"
}
if (-not (Test-Path $shotOut)) {
  throw "Visual asset audit failed: docs\visual-assets.png was not generated"
}
if ((Get-Item $shotOut).Length -le 0) {
  throw "Visual asset audit failed: docs\visual-assets.png is empty"
}

$dom = Get-Content -Raw -Encoding UTF8 $domOut
if ($dom -notmatch 'data-visualtest="pass"') {
  throw "Visual asset audit failed: visualtest marker is not pass"
}
$reportMatch = [regex]::Match($dom, '<pre id="visual-assets-report">(?<json>.*?)</pre>', [System.Text.RegularExpressions.RegexOptions]::Singleline)
if (-not $reportMatch.Success) {
  throw "Visual asset audit failed: report payload could not be parsed"
}
$reportJson = [System.Net.WebUtility]::HtmlDecode($reportMatch.Groups["json"].Value)
$report = $reportJson | ConvertFrom-Json
if ($report.status -ne "pass") {
  $failureText = ($report.failures | ConvertTo-Json -Depth 4)
  throw "Visual asset audit failed: $failureText"
}
if ($report.portraits -lt 8) {
  throw "Visual asset audit failed: expected at least 8 rendered portraits, found $($report.portraits)"
}
if ($report.navIcons -lt 8) {
  throw "Visual asset audit failed: expected at least 8 rendered navigation icons, found $($report.navIcons)"
}
if ($report.navIconAssets -lt 5) {
  throw "Visual asset audit failed: expected all 5 split UI icon assets in navigation, found $($report.navIconAssets)"
}
if ($report.familyNodeIcons -lt 15) {
  throw "Visual asset audit failed: expected at least 15 family node icons, found $($report.familyNodeIcons)"
}
if ($report.documentDetailImages -lt 15) {
  throw "Visual asset audit failed: expected at least 15 document detail images, found $($report.documentDetailImages)"
}
if ($report.checkedImages -lt 40) {
  throw "Visual asset audit failed: expected at least 40 checked images, found $($report.checkedImages)"
}

Write-Host "Visual asset audit passed. Wrote docs\visual-assets-dom.html and docs\visual-assets.png"
