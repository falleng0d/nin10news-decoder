import { program } from "commander";
import { decodeAllInlineStrings } from "./decode-all.js"
import { decodeString } from "./decode.mjs"

program
  .name("nin10news decoder")
  .version("0.0.1")
  .description("decode nin10news strings")
  .argument("<string>", "string to decode")
  .action(async (string) => {
    try {
      console.log(await decodeString(string));
    } catch (error) {
      console.error(error);
    }
  });

program
  .command("inline <string>")
  .description(
    "finds and decodes inline all encoded strings in a text returning the full text" +
      "with strings replaced with decoded values"
  )
  .action(async (string) => {
    console.log(await decodeAllInlineStrings(string));
  });

program.parse(process.argv);
