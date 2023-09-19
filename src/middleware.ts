import type { MiddlewareHandler } from 'astro'
import { sequence } from 'astro:middleware'
import cspBuilder from 'content-security-policy-builder'

const setCspHeader: MiddlewareHandler<any> = async function setCspHeader (_, next) {
  const response = await next()
  if (response.headers.get('content-type') !== 'text/html') return response

  /*
   * I do not love the use of `unsafe-inline` here. Astro needs to support adding a `nonce` value to scripts and styles
   * but until they do that we have to use `unsafe-inline`.
   *
   * https://github.com/withastro/roadmap/discussions/377
   * https://github.com/withastro/roadmap/discussions/377#discussioncomment-7048030
   */
  response.headers.set('Content-Security-Policy', cspBuilder({
    directives: {
      defaultSrc: ['\'self\''],
      scriptSrc: [
        '\'self\'',
        '\'unsafe-inline\'',
        'https://www.googletagmanager.com',
        'https://www.googletagmanager.com',
        'https://www.google.com',
        'https://www.gstatic.com'
      ],
      styleSrc: [
        '\'self\'',
        '\'unsafe-inline\'',
        'https://fonts.googleapis.com'
      ],
      fontSrc: [
        'https://fonts.gstatic.com'
      ],
      imgSrc: [
        '\'self\'',
        'https://maps.googleapis.com',
        import.meta.env.CMS_API_URL
      ],
      frameSrc: [
        'https://www.google.com'
      ],
      connectSrc: [
        '\'self\'',
        'https://www.google-analytics.com'
      ]
    }
  }))

  return response
}

export const onRequest = sequence(setCspHeader)
