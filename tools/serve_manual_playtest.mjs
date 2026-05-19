import fs from "node:fs";
import http from "node:http";
import net from "node:net";
import path from "node:path";

const root = process.cwd();
const defaultPort = Number.parseInt(process.env.PORT ?? "8787", 10);
const args = new Set(process.argv.slice(2));
const checkOnly = args.has("--check");

const routes = {
  packet: path.join(root, "docs", "manual_playtest_packet.html"),
  game: path.join(root, "game", "index.html"),
};

function fail(message) {
  console.error(`Manual playtest server check failed: ${message}`);
  process.exit(1);
}

function ensureFile(label, target) {
  if (!fs.existsSync(target)) {
    fail(`${label} does not exist: ${path.relative(root, target)}`);
  }

  if (fs.statSync(target).size <= 0) {
    fail(`${label} is empty: ${path.relative(root, target)}`);
  }
}

function contentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const types = {
    ".css": "text/css; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".md": "text/markdown; charset=utf-8",
    ".mp3": "audio/mpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
  };

  return types[extension] ?? "application/octet-stream";
}

function isPortFree(port) {
  return new Promise((resolve) => {
    const tester = net
      .createServer()
      .once("error", () => resolve(false))
      .once("listening", () => {
        tester.close(() => resolve(true));
      })
      .listen(port, "127.0.0.1");
  });
}

async function findPort(start) {
  for (let port = start; port < start + 20; port += 1) {
    if (await isPortFree(port)) {
      return port;
    }
  }

  fail(`no free port found from ${start} to ${start + 19}`);
}

function resolveRequestPath(requestUrl) {
  const url = new URL(requestUrl, "http://127.0.0.1");
  const decodedPath = decodeURIComponent(url.pathname);
  const relativePath =
    decodedPath === "/" ? path.join("docs", "manual_playtest_packet.html") : decodedPath.slice(1);
  const targetPath = path.resolve(root, relativePath);

  if (targetPath !== root && !targetPath.startsWith(`${root}${path.sep}`)) {
    return null;
  }

  if (fs.existsSync(targetPath) && fs.statSync(targetPath).isDirectory()) {
    return path.join(targetPath, "index.html");
  }

  return targetPath;
}

ensureFile("manual playtest packet", routes.packet);
ensureFile("playable game", routes.game);

if (checkOnly) {
  console.log("Manual playtest server check passed.");
  process.exit(0);
}

const port = await findPort(Number.isFinite(defaultPort) ? defaultPort : 8787);

const server = http.createServer((request, response) => {
  const targetPath = resolveRequestPath(request.url ?? "/");

  if (!targetPath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  if (!fs.existsSync(targetPath) || !fs.statSync(targetPath).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentType(targetPath),
  });
  fs.createReadStream(targetPath).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Manual playtest packet: http://127.0.0.1:${port}/docs/manual_playtest_packet.html`);
  console.log(`Playable game: http://127.0.0.1:${port}/game/index.html`);
  console.log("Press Ctrl+C to stop this local server.");
});
