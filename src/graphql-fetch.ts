import {loadDocuments} from '@graphql-tools/load'
import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function graphqlFetch(query: string, operationName: string) {
  const queryPath = path.resolve(__dirname, `../queries/${query}.graphql`)
  const documents = await loadDocuments(queryPath, {
    loaders: [new GraphQLFileLoader()]
  })

  const document = documents[0]
  if (document === undefined) {
    throw new Error(`Could not find GraphQL query at ${queryPath}`)
  }

  return fetch(import.meta.env.CMS_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `machines API-Key ${import.meta.env.CMS_API_TOKEN}`
    },
    body: JSON.stringify({
      query: document.rawSDL,
      operationName
    })
  })
}
