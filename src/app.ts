import express from 'express'
import morgan from 'morgan'
import path  from 'path'
import { createStream } from 'rotating-file-stream'

import { Authorization } from './middlewares/Authorization'
import { ZipcodeRoutes } from './routes/ZipcodeRoutes'

const app = express()

app.use(express.json())

var logStream = createStream('zipcode-search.log', {
  interval: '1d',
  path: path.join(__dirname, '..', 'logs')
})

app.use(morgan('combined', { stream: logStream }))

app.use(Authorization)
app.use('/api', ZipcodeRoutes)

export { app }
