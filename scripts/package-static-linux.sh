#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
RELEASE_DIR="$ROOT_DIR/release"
STAMP="$(date +%Y%m%d-%H%M%S)"
ARCHIVE_NAME="dooongai-docs-static-${STAMP}.tar.gz"

echo "[1/4] Installing dependencies..."
npm install

echo "[2/4] Building local static site..."
npm run build

mkdir -p "$RELEASE_DIR"

echo "[3/4] Packing build directory..."
tar -czf "$RELEASE_DIR/$ARCHIVE_NAME" -C "$ROOT_DIR/build" .

echo "[4/4] Done."
echo "Output: $RELEASE_DIR/$ARCHIVE_NAME"
