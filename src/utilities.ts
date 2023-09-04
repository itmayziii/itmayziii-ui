export function absoluteUrl (relativePath: string, baseUrl: string | URL): string {
  return (new URL(relativePath, baseUrl)).toString()
}
