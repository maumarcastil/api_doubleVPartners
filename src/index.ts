import cors from 'cors'
import morgan from 'morgan'
import express, { type Express, type Request, type Response } from 'express'

import 'reflect-metadata'
import { PORT } from './config/enviroments'
import { PostgresDataSource } from './database/config'
import rootRouter from './routes/index.routes'

const app: Express = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/api', rootRouter)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT as string}`)
})

PostgresDataSource.initialize()
  .then(() => {
    console.log('⚡️[postgres]: Data Source has been initialized!')
  })
  .catch((err) => {
    console.log('⚡️[postgres]: Error during Data Source initialization', err)
  })
