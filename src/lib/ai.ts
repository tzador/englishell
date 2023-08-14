import { OPENAI_API_KEY } from "$env/static/private";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

const model = "gpt-3.5-turbo";
const temperature = 0;
const top_p = 0;

const SYSTEM = `
I want you to act as a translator from plain human language, to linux/mac shell commands.
I will provide you with plain human language instruction,
and you will answer with the shell commands that I could run on the terminal.
If there are many ways to achieve same tasks, prefer the most simple and straightforward one.
Do not output any placeholder.
Use tilda '~' to represent the home directory.
Output the resulting shell command and nothing else,
no text before or after the command,
just the command itself.
Do not wrap the command in code block, single or double quotes, or other formatting.
Output the command as if it was typed directly on the terminal.
Output the command as plain text.
`.trim();

const EXPLAIN = `
Explain the above shell command in detail, step by step, in simple english.
Output a sequence of paragraphs, separated by a single newline.
Do not output anything neither before nor after the explanation.
`.trim();

export async function translate(instructions: string): Promise<string> {
  const response = await openai.createChatCompletion({
    model,
    temperature,
    top_p,
    messages: [
      { role: "system", content: SYSTEM },
      { role: "user", content: instructions },
    ],
  });
  return (response.data.choices[0].message?.content ?? "").trim();
}

export async function explain(instructions: string, command: string): Promise<string> {
  const response = await openai.createChatCompletion({
    model,
    temperature,
    top_p,
    messages: [
      { role: "system", content: SYSTEM },
      { role: "user", content: instructions },
      { role: "assistant", content: command },
      { role: "user", content: EXPLAIN },
    ],
  });
  return (response.data.choices[0].message?.content ?? "").trim();
}
