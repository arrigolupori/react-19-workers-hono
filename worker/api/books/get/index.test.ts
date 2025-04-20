import {testClient} from "hono/testing"
import {describe, expect, it} from "vitest"
import app, {ApiRoutes} from "../../../index.ts"

describe('Books Endpoint', () => {
  const client = testClient<ApiRoutes>(app)

  describe('GET /api/books', () => {
    it('should return the provided title when title is specified', async () => {
      const response = await client.api.books.$get({
        query: {title: 'Clean Code'}
      })

      expect(response.status).toBe(200)

      const data = await response.json()
      expect(data).toEqual({title: 'Clean Code'})
    })

    it('should return default title when no title is provided', async () => {
      const response = await client.api.books.$get(
        {
          query: {}
        }
      )

      expect(response.status).toBe(200)

      const data = await response.json()
      expect(data).toEqual({title: 'default'})
    })

    it('should return default title when title is empty string', async () => {
      const response = await client.api.books.$get({
        query: {title: ''}
      })

      expect(response.status).toBe(200)

      const data = await response.json()
      expect(data).toEqual({title: 'default'})
    })

    it('should handle special characters in title', async () => {
      const specialTitle = 'Test & Special: Characters!'
      const response = await client.api.books.$get({
        query: {title: specialTitle}
      })

      expect(response.status).toBe(200)

      const data = await response.json()
      expect(data).toEqual({title: specialTitle})
    })
  })
})