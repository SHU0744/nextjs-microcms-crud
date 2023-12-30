import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "q07b16gzht",
  apiKey: process.env.API_KEY,
});
