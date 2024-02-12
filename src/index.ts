import * as trpcExpress from "@trpc/server/adapters/express";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({ req, res });
export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  hello: t.procedure.query(async () => {
    const message = {
      text: "Hello Guys!!. This is a new message",
      from: "Samarth",
    };
    return message;
  }),
});

export type AppRouter = typeof appRouter;
