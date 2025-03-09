import type { Resolvers } from "./__generated__/resolvers";

export const resolvers: Resolvers = {
  Query: {
    ping(req, parent, ctx) {
      return "pong";
    },
  },
};
