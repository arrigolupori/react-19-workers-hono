import {z} from 'zod'
import {zValidator} from '@hono/zod-validator'

const getRootSchema = zValidator('query', z.object({
  name: z.string().optional()
}))

export default getRootSchema