import {createFactory} from "hono/factory"
import getRootSchema from "./schema.ts"

const factory = createFactory()

const getRootHandlers = factory.createHandlers(
  getRootSchema,
  (c) => {
    const data = c.req.valid('query')

    if (!data.name) {
      return c.json({name: 'default'})
    }

    return c.json({name: data.name})
  })

export default getRootHandlers