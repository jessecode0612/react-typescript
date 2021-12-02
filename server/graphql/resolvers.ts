import {dataSources} from '../types'

export const resolvers = {
    Query: {
        users: async (_: any, __: any, {dataSources}: { dataSources: dataSources }) => {
            return await dataSources.userAPI.getUsers()
        },
        projects: async (_: any, __: any, {dataSources}: { dataSources: dataSources }) => {
            return await dataSources.projectAPI.getProjects()
        },
        launches: (_: any, __: any, {dataSources}: { dataSources: dataSources }) =>
            dataSources.launchAPI.getAllLaunches(),
        launch: (_: any, {id}: { id: string }, {dataSources}: { dataSources: dataSources }) =>
            dataSources.launchAPI.getLaunchById({launchId: id}),
        me: (_: any, __: any, {dataSources}: { dataSources: dataSources }) => dataSources.userAPI.findOrCreateUser()
    }
}