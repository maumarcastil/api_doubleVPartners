import { DataSource } from 'typeorm'
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } from '../config/enviroments'

import { GitHubUser } from '../entities/GitHubUser'

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  entities: [GitHubUser],
  /* logging: true, */
  synchronize: true
})
