import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

function createApolloClient() {
  const cache = new InMemoryCache();

  const httpLink = new HttpLink({
    // arbitrary url
    uri: 'localhost:8080/graphql',
  });

  const apolloClient = new ApolloClient({
    cache,
    link: httpLink,
  });

  return apolloClient;
}

export { createApolloClient };