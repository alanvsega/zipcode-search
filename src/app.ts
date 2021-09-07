import express from 'express'
import morgan from 'morgan'
import yaml from 'yamljs'
import path  from 'path'
import swaggerUi from 'swagger-ui-express'
import { createStream } from 'rotating-file-stream'

import { Authorization } from './middlewares/Authorization'
import { ZipcodeRoutes } from './routes/ZipcodeRoutes'

const app = express()
const swaggerDocs = yaml.load(path.join(__dirname, '../api.schema.yaml'))

app.use(express.json())

var logStream = createStream('zipcode-search.log', {
  interval: '1d',
  path: path.join(__dirname, '..', 'logs')
})

app.use(morgan('combined', { stream: logStream }))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(Authorization)
app.use('/api', ZipcodeRoutes)

export { app }
