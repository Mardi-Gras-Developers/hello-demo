import http from "node:http";

const port = Number(process.env.PORT || 3000);
const name = process.env.APP_NAME || "app";

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, service: name }));
    return;
  }
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(`<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${name}</title>
<style>body{font-family:system-ui,sans-serif;max-width:40rem;margin:4rem auto;padding:0 1.5rem;line-height:1.6}
code{background:#f3f3f3;padding:.15rem .35rem;border-radius:.25rem}</style></head>
<body><h1>${name}</h1><p>Deployed from git by Coolify.</p>
<p>Edit <code>server.js</code>, push, and the app redeploys.</p></body></html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`${name} listening on :${port}`);
});
