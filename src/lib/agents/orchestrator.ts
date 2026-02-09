import { tools } from "./tools";
import { ORCHESTRATOR_SYSTEM_PROMPT } from "./prompts";
import { customOpenAI } from "@/lib/ai";
import { generateText, stepCountIs } from "ai";

// This is a mock function to simulate the coordination
export async function runOrchestrator(prompt: string) {
  const result = await generateText({
    model: customOpenAI(process.env.MODEL_NAME || "llama3"),
    system: ORCHESTRATOR_SYSTEM_PROMPT,
    tools,
    stopWhen: stepCountIs(5),
    prompt,
  });

  return result;
}
