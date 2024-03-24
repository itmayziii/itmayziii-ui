// import { absoluteUrl } from './utilities.ts'
//
// describe('absoluteUrl', () => {
//   it('should return an absolute URL when provided relative path', async () => {
//     const actual = absoluteUrl('bananas', 'https://test.tommymay.dev')
//     const expected = 'https://test.tommymay.dev/bananas'
//     return await expect(actual).to.equal(expected)
//   })
//
//   it('should return an absolute URL when provided absolute path', async () => {
//     const actual = absoluteUrl('/apples', 'https://test.tommymay.dev')
//     const expected = 'https://test.tommymay.dev/apples'
//     return await expect(actual).to.equal(expected)
//   })
//
//   it('should return the original URL if it starts to "http"', async () => {
//     return await Promise.all([
//       expect(absoluteUrl('http://tommymay.dev/some/url', 'https://google.com'))
//         .to.equal('http://tommymay.dev/some/url'),
//       expect(absoluteUrl('https://tommymay.dev/another/url', 'https://google.com'))
//         .to.equal('https://tommymay.dev/another/url')
//     ])
//   })
//
//   it('should throw an error if the resulting URL would be malformed', async () => {
//     return expect(absoluteUrl.bind(null, 'apples', ''))
//       .to
//       .throw('Failed to construct \'URL\': Invalid base URL')
//   })
// })
