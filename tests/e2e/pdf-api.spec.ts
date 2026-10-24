import { expect, test } from '@playwright/test'

test.describe('PDF API', () => {
  test('should reject a path that is not a resume page', async ({ request }) => {
    const response = await request.get('/api/pdf', { params: { path: 'https://example.com' } })
    expect(response.status()).toBe(400)
  })

  test('should reject the url param', async ({ request }) => {
    const response = await request.get('/api/pdf', { params: { url: 'https://example.com' } })
    expect(response.status()).toBe(400)
  })
})
