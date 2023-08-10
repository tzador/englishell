#!/usr/bin/env node

const { Configuration, OpenAIApi } = require("openai");
const { exec } = require("child_process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("OPENAI_API_KEY environment variable is not set! Exiting.");
  process.exit(1);
}

const command = process.argv.slice(2).join(" ").trim();

if (!command) {
  console.error(
    "Please provide a command in plain english that you want to run! Exiting."
  );
  process.exit(1);
}

const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

async function main() {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `
I want you to act as a translator from plain human language, to shell commands.
I will provide you with plain text phrases, and you will provide me with the shell commands that I should run.
Output the resulting shell command and nothing else, no text before or after the command, just the command.
      `.trim()
      },
      {
        role: "user",
        content: command
      }
    ]
  });
  const result = (response.data.choices[0].message?.content ?? "").trim();

  readline.question(result, () => {
    readline.close();

    exec(result, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(stdout);
      console.error(stderr);
    });
  });
}

main();
