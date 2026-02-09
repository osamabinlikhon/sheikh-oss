import { customOpenAI } from "@/lib/ai";
import { streamText, stepCountIs, convertToModelMessages } from "ai";
import { tools } from "@/lib/agents/tools";
import { ORCHESTRATOR_SYSTEM_PROMPT } from "@/lib/agents/prompts";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: customOpenAI(process.env.MODEL_NAME || "llama3"),
    system: ORCHESTRATOR_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    tools,
    stopWhen: stepCountIs(10),
  });

  return result.toUIMessageStreamResponse();
}
