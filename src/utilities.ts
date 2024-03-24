export function absoluteUrl (relativePath: string, baseUrl: string | URL): string {
  return (new URL(relativePath, baseUrl)).toString()
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
