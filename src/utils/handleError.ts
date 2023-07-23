import { type Response } from 'express'
import { QueryFailedError } from 'typeorm'

export const HandleError = (error: any, res: Response): void => {
  console.log('🚀 ~ file: handleError.ts ~ error:', error)
  const customErrorResponse = {
    status: error.status ?? 500,
    code: error.code,
    name: error.name,
    message: error.message
  }

  if (error instanceof QueryFailedError) {
    customErrorResponse.status = 500
    if (customErrorResponse.code === '23505') {
      customErrorResponse.message = 'The element already exists'
    }
  }

  res.status(customErrorResponse.status).json(customErrorResponse)
}
