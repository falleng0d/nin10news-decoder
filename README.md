# Nin10news Decoder

A simple command line application to decode encoded nin10news strings.

## Installation

```sh
git clone https://github.com/falleng0d/nin10news-decoder.git
cd nin10news-decoder
npm install
```

## Configuration

Open https://nin10news.com/decode/ and copy the value of the `cf_clearance` cookie
to ./env.mjs's `cf_clearance` variable.

This needs to be done because nin10news.com uses Cloudflare to protect itself
from bots. The cf_clearance cookie is used to bypass the Cloudflare protection.

This has to be redone every time the cookie expires.

# Usage

## Basic Decoding

Decode a single nin10news string.

```sh
node nin10news-decoder.mjs "<string>"
```

## Inline Decoding

Find and decode all encoded strings within a block of text, replacing them with the decoded values.

```sh
node nin10news-decoder.mjs inline "<plaintext_with_encoded_strings>"
```

## Example

```sh
node nin10news-decoder.mjs "encoded_string"
```

## License

MIT
