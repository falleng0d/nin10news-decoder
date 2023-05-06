import fetch, { FormData } from "node-fetch";
import { env } from "./env.mjs";

/**
 * Decodes a string
 * @param {string} string
 * @returns {Promise<string>}
 */
export async function decodeString(string) {
  const formData = new FormData();

  formData.set(
    "data",
    string,
  );

  const url =
    "https://nin10news.com/wp-content/themes/twentysixteen/inc/decode.php";

  const options = {
    method: "POST",
    headers: {
      "user-agent": env["user-agent"],
      cookie: `cf_clearance=${env.cf_clearance}`,
      "x-requested-with": "XMLHttpRequest",
    },
  };

  options.body = formData;

  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(
        `decodeString failed with status code ${response.status} ${response.statusText}`
      );
    }

    return response.text();
  }).catch((error) => {
    console.error(error);
  }).then((text) => {
    return atob(text);
  });
}

