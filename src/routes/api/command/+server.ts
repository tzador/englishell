import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { translate } from "$lib/ai";

export const POST: RequestHandler = async ({ url }) => {
  const instructions = url.searchParams.get("instructions");
  if (!instructions) {
    throw error(400, "Missing instructions");
  }
  return new Response(await translate(instructions));
};
