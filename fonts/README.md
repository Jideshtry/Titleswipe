# Fonts

This directory holds self-hosted Inter variable font files.

## Setup

Run the download script once after cloning:

```bash
bash fonts/download-fonts.sh
```

This downloads:
- `inter-variable.woff2` — Inter Variable (normal), Latin subset
- `inter-variable-italic.woff2` — Inter Variable (italic), Latin subset

## Vercel / CDN fallback

`index.html` includes a Google Fonts `<link>` as a fallback in case
the local font files are not present. Self-hosting is optional but
recommended for performance and privacy (eliminates a third-party request).

## License

Inter is licensed under the [SIL Open Font License 1.1](https://scripts.sil.org/OFL).
Commercial use is permitted. Attribution is not required.
Font author: Rasmus Andersson — https://rsms.me/inter
