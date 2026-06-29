#!/usr/bin/env bash
# ================================================================
# TitleSwipe — Font Downloader
# Run this once after cloning to self-host Inter locally.
# Requires: curl
# ================================================================

set -e
DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Downloading Inter variable font (woff2)..."

# Inter Variable — Latin (normal)
curl -L "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2" \
  -o "$DIR/inter-variable.woff2"

# Inter Variable — Latin (italic)
curl -L "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2" \
  -o "$DIR/inter-variable-italic.woff2"

echo "Done. Font files saved to: $DIR"
echo "  inter-variable.woff2"
echo "  inter-variable-italic.woff2"
echo ""
echo "The CSS in css/styles.css already references these paths."
echo "No further action needed — deploy normally."
