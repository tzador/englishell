#!/usr/bin/env node
import fetch from "node-fetch";

const api = "https://englishell.pages.dev/";

const mode = process.argv[2];
const instructions = process.argv.slice(3).join(" ");

if (mode === "-c") {
  const response = await fetch(
    `${api}/api/command?instructions=${encodeURIComponent(instructions)}`,
    {
      method: "POST",
    },
  );
  console.log(await response.text());
  process.exit(0);
}

if (mode === "-e") {
  const command = process.env.COMMAND;
  const response = await fetch(
    `${api}/api/explain?instructions=${encodeURIComponent(
      instructions,
    )}&command=${encodeURIComponent(command)}`,
    {
      method: "POST",
    },
  );
  console.log(await response.text());
  process.exit(0);
}
