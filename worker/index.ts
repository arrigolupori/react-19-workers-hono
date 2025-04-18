import {Hono} from 'hono'

import {trimTrailingSlash} from 'hono/trailing-slash'

import getRootHandlers from "./api/root/get"
import getBooksHandlers from "./api/books/get"

const app = new Hono()
app.use(trimTrailingSlash())

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .get('/api', ...getRootHandlers)
  .get('/api/books', ...getBooksHandlers)

export type ApiRoutes = typeof routes

export default app