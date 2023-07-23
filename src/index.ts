import cors from 'cors'
import morgan from 'morgan'
import express, { type Express, type Request, type Response } from 'express'

import 'reflect-metadata'
import { PORT } from './config/enviroments'

const app: Express = express()
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT as string}`)
})
