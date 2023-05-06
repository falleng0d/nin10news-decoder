import { decodeString } from "./decode.mjs"

/**
 * Finds and decodes all encoded strings in a text returning the full text
 * with strings replaced with decoded values
 * @param {string} text - text to decode
 * @returns {Promise<string>} - decoded text
 */
export async function decodeAllInlineStrings(text) {
  // Encoded strings all start with VlRPYm an end on the next space character
  const regex = /VlRPYm.*?(?=\s|$)/g;
  const matches = text.match(regex);
  const decodedStrings = await Promise.all(matches.map(decodeString));
  let decodedText = text;

  matches.forEach((match, index) => {
    decodedText = decodedText.replace(match, decodedStrings[index]);
  });

  return decodedText;
}
