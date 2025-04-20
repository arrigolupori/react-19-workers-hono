import {testClient} from "hono/testing"
import {it, describe, expect} from "vitest"
import app, {ApiRoutes} from "../../../index.ts"

describe('Books Endpoint', () => {
  const {api} = testClient<ApiRoutes>(app)

  it('should return 200', async () => {
    const response = await api.books.$get({
      query: { title: 'hono' },
    })

    // Assertions
    expect(response.status).toBe(200)
  })
})