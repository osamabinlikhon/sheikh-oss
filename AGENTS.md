# Sheikh OSS Agent Architecture

This platform is built for production-grade AI agent coordination using a **Plan-Act-Verify** loop.

## Core Components

### 1. Orchestrator (`src/lib/agents/orchestrator.ts`)
The central intelligence that uses the `plan` tool to decompose tasks, delegates work to specialized agents via tools, and uses the `verify` tool to ensure quality.

### 2. Multi-Agent Tools (`src/lib/agents/tools.ts`)
- **Planner Agent**: Breaks down complex requests into a structured sequence.
- **Researcher Agent**: Simulates information gathering.
- **Coder Agent**: Handles technical implementation and bug fixes.
- **Verifier Agent**: Checks the final output against requirements.

### 3. Hybrid Streaming Backend (`src/app/api/chat/route.ts`)
Uses Vercel AI SDK's `streamText` for robust, multi-step agent loops. We bypass tRPC for the main chat stream to avoid serialization overhead and "batching" delays, ensuring a real-time "Generative UI" experience.

### 4. Generative UI (`src/components/chat/`)
- **ChatInterface**: A polished, high-fidelity chat experience.
- **ToolInvocationCard**: Visualizes agent actions as discrete, meaningful steps rather than raw logs.

## Technical ROI
- **Scalability**: Configurable `baseURL` allows switching between local LLMs (Ollama) and production endpoints (OpenCode/OpenAI) with zero code changes.
- **Reliability**: The strict Verify step ensures that the agent self-corrects before presenting results to the user.
- **User Engagement**: Generative UI provides immediate feedback, reducing perceived latency.
