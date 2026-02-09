import { customOpenAI } from "@/lib/ai";
import { streamText, stepCountIs } from "ai";
import { tools } from "@/lib/agents/tools";
import { ORCHESTRATOR_SYSTEM_PROMPT } from "@/lib/agents/prompts";
import { z } from "zod";

export const maxDuration = 30;

const chatSchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant", "system"]),
      content: z.string().max(5000), // Limit individual message size
    })
  ).max(100), // Limit conversation length
});

export async function POST(req: Request) {
  const json = await req.json();

  // Validate input to prevent DoS or malformed data attacks
  const validated = chatSchema.safeParse(json);
  if (!validated.success) {
    return new Response(JSON.stringify({ error: "Invalid input" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { messages } = validated.data;

  const result = await streamText({
    model: customOpenAI(process.env.MODEL_NAME || "llama3"),
    system: ORCHESTRATOR_SYSTEM_PROMPT,
    messages,
    tools,
    stopWhen: stepCountIs(10),
  });

  return result.toUIMessageStreamResponse();
}
