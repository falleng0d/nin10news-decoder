import { afterEach, describe, expect, it, vi } from 'vitest'
import { decodeAllInlineStrings } from "./decode-all.js"

// Mock decodeString to return a promise that resolves to 'example' string
vi.mock('./decode.mjs', async () => {
  const mod = await vi.importActual('./decode.mjs')

  const decodeString = vi.fn()
  decodeString.mockImplementation((_) => {
    return Promise.resolve("example")
  });

  return {
    ...mod,
    decodeString
  }
})

describe("decodeString decodes a string", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("decodeAllInlineStrings decodes all inline strings", async () => {
    const inputText = "Test VlRPYmV4YW1wbGU= example VlRPYmFub3RoZXI=\nexample VlRPYmV4YW1wbGU= example";
    const expectedDecodedText = "Test example example example\nexample example example";

    const decodedText = await decodeAllInlineStrings(inputText);
    expect(decodedText).toBe(expectedDecodedText);
  });
});
