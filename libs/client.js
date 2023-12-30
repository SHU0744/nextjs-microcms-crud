import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "q07b16gzht",
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
