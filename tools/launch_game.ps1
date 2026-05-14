$ErrorActionPreference = "Stop"

$root = (Resolve-Path ".").Path
if (-not (Test-Path (Join-Path $root "game\index.html"))) {
  $root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
}

$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$url = "file:///" + ($root -replace "\\", "/") + "/game/index.html"

if (Test-Path $edge) {
  Start-Process -FilePath $edge -ArgumentList $url
} else {
  Start-Process $url
}
