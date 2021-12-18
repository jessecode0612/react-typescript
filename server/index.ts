import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginInlineTrace } from 'apollo-server-core';
import typeDefs from './graphql/schema';

import LaunchAPI from './datasource/launch';
import UserAPI from './datasource/user';
import ProjectAPI from './datasource/project';
import { createStore } from './utils';
import { resolvers } from './graphql/resolvers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const store = createStore();

const dataSources = () => ({
  launchAPI: new LaunchAPI({ store }),
  userAPI: new UserAPI({ store: prisma }),
  projectAPI: new ProjectAPI({ store: prisma })
});

const context = async ({ req }: { req: any }) => {
  return null;
};

const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
  context,
  plugins: [
    ApolloServerPluginInlineTrace({
      rewriteError: (err) => err
    })
  ]
});

server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
        Explore at https://studio.apollographql.com/sandbox
    `);
});
