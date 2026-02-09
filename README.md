# Sheikh OSS - Production AI Agent Platform

Sheikh OSS is a high-fidelity, production-grade AI agent platform designed for complex task orchestration. It utilizes a **Plan-Act-Verify** loop to ensure high-quality outputs through multi-agent coordination.

## Features
- **Multi-Agent Orchestration**: Specialized agents for Planning, Research, Coding, and Verification.
- **Generative UI**: Real-time visualization of agent thought processes and tool executions.
- **Hybrid Architecture**: Fast streaming via Next.js Route Handlers + Type-safe metadata via tRPC.
- **Local & Cloud Ready**: Seamlessly switch between local models (Ollama) and production APIs (OpenCode).

## Getting Started

1. Clone the repository.
2. Install dependencies: `pnpm install`.
3. Configure environment: Copy `.env.example` to `.env` and set your `OPENAI_BASE_URL` and `MODEL_NAME`.
4. Run the development server: `pnpm dev`.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **AI SDK**: Vercel AI SDK (Core & React)
- **Styling**: Tailwind CSS & Shadcn/UI
- **API**: tRPC & React Query
- **Icons**: Lucide React
