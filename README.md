# app

Minimal, version-controlled service: a Node HTTP server on port 3000, built by the
`Dockerfile`, runnable locally with `docker compose up`.

## Run locally

```bash
cp .env.example .env
docker compose up --build      # http://localhost:3000  (health: /health)
```

## Deploy (Coolify, from this repo)

```bash
devctl app new --name <slug> --repo <https-url> --branch main \
  --build dockerfile --port 3000 --domain <slug>.mg-devs.nl --dns
```

The app is repo-backed: every push to the tracked branch can redeploy it, and
`git log` is the deployment history. Rollback = redeploy an earlier commit.

## Layout

| File | Purpose |
| --- | --- |
| `server.js` | the app |
| `Dockerfile` | build (Coolify `build_pack: dockerfile`) |
| `compose.yaml` | local parity / optional compose deploy |
| `.env.example` | shape of the env; real values live in Coolify |

<!-- interactive ship smoke test 2026-11-15T17:48Z -->
