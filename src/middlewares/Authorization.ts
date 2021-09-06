import 'dotenv/config';
import { Request, Response, NextFunction } from 'express'

const apiKey = process.env.API_KEY

const Authorization = (request: Request, response: Response, next: NextFunction) => {
  if (apiKey === request.get('X-API-KEY')) {
    next()
  } else {
    const error = new Error('Invalid API Key.')

    return response.status(401).json({
      message: error.message
    })
  }
}

export { Authorization }
