import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import { config } from './config'

import { router as resourcesRouter } from './routes/resources.router'
import { router as authRouter } from './routes/auth.router'
import { notFoundRoute } from './middlewares/notFoundRoute.middleware'
import { errorHandler } from './middlewares/errorHandler.middleware'

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(cors())

app.use(resourcesRouter)
app.use('/auth', authRouter)

app.use(notFoundRoute)
app.use(errorHandler)

app.listen(config.server.PORT, () => {
  console.log(`Listening on port: ${config.server.PORT}`)
})