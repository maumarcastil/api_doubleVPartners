import dotenv from 'dotenv'

dotenv.config()

export const {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
  DB_NAME
} = process.env

/* NODE_ENV=production
PORT=8000
DB_HOST=db
DB_PORT=5432
DB_USER=postgres
DB_PASS=secure_pass_here
DB_NAME=postgres */
