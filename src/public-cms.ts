/**
 * These methods are safe to call from the public/client side of Astro as they do not expose
 * authentication/authorization information.
 */
import { absoluteUrl } from './utilities.ts'

async function submitForm (formName: string, data: Record<string, unknown>): ReturnType<typeof fetch> {
  const url = absoluteUrl(`/api/forms/${formName}`, import.meta.env.PUBLIC_CMS_API_URL)
  return await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
}

export { submitForm }
