$ErrorActionPreference = "Stop"

$root = (Resolve-Path ".").Path
if (-not (Test-Path (Join-Path $root "game\index.html"))) {
  $root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
}

Push-Location $root
try {
  if (-not (Test-Path "node_modules\edge-tts-universal\dist")) {
    Write-Host "Installing npm package edge-tts-universal..."
    npm install edge-tts-universal --save-dev
  }
  node tools/generate_edge_tts.mjs
} finally {
  Pop-Location
}
