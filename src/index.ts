import express, { type Express, type Request, type Response } from 'express'
import { PORT } from './config/enviroments'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT as string}`)
})
