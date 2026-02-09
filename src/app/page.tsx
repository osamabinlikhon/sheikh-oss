import { ChatInterface } from "@/components/chat/chat-interface";

export default function Home() {
  return (
    <main className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2 text-primary">
            Sheikh OSS
          </h1>
          <p className="text-xl text-muted-foreground">
            Production-grade AI Agent Platform with Multi-Agent Coordination.
          </p>
        </div>

        <ChatInterface />
      </div>
    </main>
  );
}
