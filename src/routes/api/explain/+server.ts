import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { explain } from "$lib/ai";

export const POST: RequestHandler = async ({ url }) => {
  const instructions = url.searchParams.get("instructions");
  if (!instructions) {
    throw error(400, "Missing instructions");
  }
  const command = url.searchParams.get("command");
  if (!command) {
    throw error(400, "Missing command");
  }
  return new Response(await explain(instructions, command));
};
