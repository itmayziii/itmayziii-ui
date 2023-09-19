import type { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'

export async function graphqlFetch (doc: DocumentNode, operationName: string): ReturnType<typeof fetch> {
  return await fetch(`${import.meta.env.CMS_API_URL}/api/graphql`, {
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

export async function submitForm (formName: string, data: Record<string, any>): ReturnType<typeof fetch> {
  return await fetch(`${import.meta.env.CMS_API_URL}/api/forms/${formName}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `machines API-Key ${import.meta.env.CMS_API_TOKEN}`
    },
    body: JSON.stringify(data)
  })
}
