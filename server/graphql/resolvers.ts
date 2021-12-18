import { dataSources } from '../types';

export const resolvers = {
  Query: {
    users: async (_: any, __: any, { dataSources }: { dataSources: dataSources }) => {
      return await dataSources.userAPI.getUsers();
    },
    projects: async (_: any, __: any, { dataSources }: { dataSources: dataSources }) => {
      return await dataSources.projectAPI.getProjects();
    },
    launches: (_: any, __: any, { dataSources }: { dataSources: dataSources }) => dataSources.launchAPI.getAllLaunches(),
    launch: (_: any, { id }: { id: string }, { dataSources }: { dataSources: dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id })
  },
  Mutation: {
    login: async (_: any, { email }: { email: string }, { dataSources }: { dataSources: dataSources }) => {
      const user = await dataSources.userAPI.findOrCreateUser({ email });
      if (user) {
        user.token = Buffer.from(email).toString('base64');
        return user;
      }
    }
  }
};
