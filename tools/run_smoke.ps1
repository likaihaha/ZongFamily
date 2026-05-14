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
$domOut = Join-Path $outDir "smoke-dom.html"
$shotOut = Join-Path $outDir "smoke-autotest.png"
$profile = Join-Path $root ".tmp-edge-profile"
if (Test-Path $profile) {
  Remove-Item -Recurse -Force $profile
}

$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html?autotest=1"

$cmdDump = "`"$edge`" --headless --disable-gpu --user-data-dir=`"$profile`" --virtual-time-budget=1000 --dump-dom `"$url`" > `"$domOut`" 2>nul"
cmd /c $cmdDump
$cmdShot = "`"$edge`" --headless --disable-gpu --user-data-dir=`"$profile`" --virtual-time-budget=1000 --screenshot=`"$shotOut`" --window-size=1440,1000 `"$url`" > nul 2>nul"
cmd /c $cmdShot

$dom = Get-Content -Raw -Encoding UTF8 $domOut
if ($dom -notmatch 'data-autotest="pass"') {
  throw "Smoke test failed: autotest did not pass"
}
if ($dom -notmatch "report-result success") {
  throw "Smoke test failed: success report not found"
}

Write-Host "Smoke test passed. Wrote docs\smoke-dom.html and docs\smoke-autotest.png"
