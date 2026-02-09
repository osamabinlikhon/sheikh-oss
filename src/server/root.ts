import { router, publicProcedure } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getHistory: publicProcedure.query(() => {
    return [
      { id: "1", title: "Project initialization", date: new Date() },
      { id: "2", title: "Multi-agent setup", date: new Date() },
    ];
  }),

  getSettings: publicProcedure.query(() => {
    return {
      model: process.env.MODEL_NAME || "llama3",
      baseURL: process.env.OPENAI_BASE_URL || "http://localhost:11434/v1",
    };
  }),

  updateSettings: publicProcedure
    .input(z.object({ model: z.string(), baseURL: z.string() }))
    .mutation(({ input }) => {
      // In a real app, this would update a database or session
      return { success: true, ...input };
    }),
});

export type AppRouter = typeof appRouter;
