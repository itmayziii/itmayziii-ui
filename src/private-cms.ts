/**
 * These methods should be avoided on the public/client side of Astro and should only be used during the build process
 * or serving HTML as they expose authorization information.
 */
import { absoluteUrl } from './utilities.ts'
import { GraphQLClient } from 'graphql-request'
import { getSdk } from './graphql/generated/generated.ts'

const graphqlUrl = absoluteUrl('/api/graphql', import.meta.env.PUBLIC_CMS_API_URL)
const client = new GraphQLClient(graphqlUrl, {
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
    authorization: `machines API-Key ${import.meta.env.CMS_API_TOKEN}`
  }
})
const graphqlSdk = getSdk(client)

export { graphqlSdk }
