import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { appEnv } from '@/shared/config'

const httpLink = createHttpLink({
  uri: appEnv.APOLLO_URL,
})

const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
