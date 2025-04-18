import {hc} from "hono/client"
import {ApiRoutes} from "../../worker"

const {api} = hc<ApiRoutes>('http://localhost:5173')

export default api