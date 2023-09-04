import type { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

export default async function graphqlFetch (doc: DocumentNode, operationName: string): ReturnType<typeof fetch> {
  return await fetch(import.meta.env.CMS_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `machines API-Key ${import.meta.env.CMS_API_TOKEN}`
    },
    body: JSON.stringify({
      query: print(doc),
      operationName
    })
  })
}
