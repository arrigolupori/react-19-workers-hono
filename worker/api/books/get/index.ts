import {createFactory} from "hono/factory"
import getBooksSchema from "./schema.ts"

const factory = createFactory()

const getBooksHandlers = factory.createHandlers(
  getBooksSchema,
  (c) => {
    const data = c.req.valid('query')

    if (!data.title) {
      return c.json({title: 'default'})
    }

    return c.json({title: data.title})
  })

export default getBooksHandlers