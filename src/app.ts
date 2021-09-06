import express from 'express'

import { Authorization } from './middlewares/Authorization'
import { ZipcodeRoutes } from './routes/ZipcodeRoutes'

const app = express()

app.use(express.json())

app.use(Authorization)
app.use('/api/v1', ZipcodeRoutes)

export { app }
