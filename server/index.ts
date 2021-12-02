import {ApolloServer} from 'apollo-server'
import typeDefs from './graphql/schema'

import LaunchAPI from './datasource/launch'
import UserAPI from './datasource/user'
import ProjectAPI from './datasource/project'
import {createStore} from './utils'
import {resolvers} from './graphql/resolvers'

const store = createStore();

const dataSources =  () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store }),
    projectAPI: new ProjectAPI({store})
})

const context = async ({req}: {req: any}) => {
    return null
}

const server = new ApolloServer({
    typeDefs,
    dataSources,
    resolvers,
    context
})

server.listen().then(() => {
    console.log(`
        Server is running!
        Listening on port 4000
        Explore at https://studio.apollographql.com/sandbox
    `)
})