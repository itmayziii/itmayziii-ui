import type { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

const graphqlUrl = (new URL('/api/graphql', import.meta.env.PUBLIC_CMS_API_URL)).toString()
export async function graphqlFetch (doc: DocumentNode, operationName: string): ReturnType<typeof fetch> {
  return await fetch(graphqlUrl, {
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

export async function submitForm (formName: string, data: FormData): ReturnType<typeof fetch> {
  const url = (new URL(`/api/forms/${formName}`, import.meta.env.PUBLIC_CMS_API_URL)).toString()
  return await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `machines API-Key ${import.meta.env.CMS_API_TOKEN}`
    },
    body: data
  })
}
