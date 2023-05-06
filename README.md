# Nin10news Decoder

A simple command line application to decode encoded nin10news strings.

## Installation

```sh
git clone https://github.com/yourusername/nin10news-decoder.git
cd nin10news-decoder
npm install
```

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
