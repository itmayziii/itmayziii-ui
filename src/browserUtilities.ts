export function absoluteUrl (relativePath: string, baseUrl: string | URL): string {
  return (new URL(relativePath, baseUrl)).toString()
}

export function mediaUrl (url: string): string {
  if (url.startsWith('/')) {
    return `${import.meta.env.MEDIA_URL}${url}`
  }
  if (url.startsWith('http')) {
    return url
  }

  // Being somewhat forgiving in case the starting "/" is missing
  return `${import.meta.env.MEDIA_URL}/${url}`
}

interface Densities {
  1?: string
  '1.5'?: string
  2?: string
  3?: string
  4?: string
}
export function densitySrcset (densities: Densities): string {
  return Object.keys(densities).map(k => `${densities[k as keyof Densities]} ${k}x`).join(', ')
}
