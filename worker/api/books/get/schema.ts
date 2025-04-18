import {z} from 'zod'
import {zValidator} from '@hono/zod-validator'

const getBooksSchema = zValidator('query', z.object({
  title: z.string().optional()
}))

export default getBooksSchema