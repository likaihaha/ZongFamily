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
$errOut = Join-Path $outDir "smoke-edge.err.log"
$profile = Join-Path $root ".tmp-edge-profile"
if (Test-Path $profile) {
  Remove-Item -Recurse -Force $profile
}
if (Test-Path $errOut) {
  Remove-Item -Force $errOut
}

$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html?autotest=1"

$edgeArgs = "--headless --disable-gpu --disable-gpu-sandbox --no-sandbox"

$cmdDump = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --dump-dom `"$url`" > `"$domOut`" 2>`"$errOut`""
cmd /c $cmdDump
if ($LASTEXITCODE -ne 0) {
  throw "Smoke test failed: Edge dump-dom exited with code $LASTEXITCODE (see docs\\smoke-edge.err.log)"
}
$cmdShot = "`"$edge`" $edgeArgs --user-data-dir=`"$profile`" --virtual-time-budget=1000 --screenshot=`"$shotOut`" --window-size=1440,1000 `"$url`" > nul 2>>`"$errOut`""
cmd /c $cmdShot
if ($LASTEXITCODE -ne 0) {
  throw "Smoke test failed: Edge screenshot exited with code $LASTEXITCODE (see docs\\smoke-edge.err.log)"
}

if (-not (Test-Path $domOut)) {
  throw "Smoke test failed: docs\\smoke-dom.html was not generated"
}
$domFile = Get-Item $domOut
if ($domFile.Length -le 0) {
  throw "Smoke test failed: docs\\smoke-dom.html is empty (see docs\\smoke-edge.err.log)"
}
if (-not (Test-Path $shotOut)) {
  throw "Smoke test failed: docs\\smoke-autotest.png was not generated"
}
$shotFile = Get-Item $shotOut
if ($shotFile.Length -le 0) {
  throw "Smoke test failed: docs\\smoke-autotest.png is empty (see docs\\smoke-edge.err.log)"
}

$dom = Get-Content -Raw -Encoding UTF8 $domOut
if ($dom -notmatch 'data-autotest="pass"') {
  throw "Smoke test failed: autotest did not pass"
}
if ($dom -notmatch "report-result success") {
  throw "Smoke test failed: success report not found"
}

Write-Host "Smoke test passed. Wrote docs\smoke-dom.html and docs\smoke-autotest.png"
