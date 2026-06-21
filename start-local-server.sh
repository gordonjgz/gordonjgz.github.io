#!/usr/bin/env sh
set -eu

PORT="${PORT:-4173}"
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

printf 'Serving %s at http://localhost:%s\n' "$SCRIPT_DIR" "$PORT"
python3 -m http.server "$PORT" --directory "$SCRIPT_DIR"
