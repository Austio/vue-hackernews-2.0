import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)


function createApolloClient() {
  const cache = new InMemoryCache();

  const httpLink = createHttpLink({
    uri: 'https://graphbrainz.herokuapp.com/graphql',
  });

  const apolloClient = new ApolloClient({
    cache,
    link: httpLink,
  });

  return apolloClient;
}

export { createApolloClient };