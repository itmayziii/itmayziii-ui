import { sequence } from 'astro:middleware'
import cspHeaderMiddleware from './cspHeaderMiddleware.ts'

export const onRequest = sequence(
  cspHeaderMiddleware
)
