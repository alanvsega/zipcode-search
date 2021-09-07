import 'dotenv/config';
import { Request, Response, NextFunction } from 'express'

const apiKey = process.env.API_KEY

const Authorization = (request: Request, response: Response, next: NextFunction) => {
  if (apiKey !== request.get('X-API-KEY')) {
    return response.status(401).json({
      message: 'Invalid API Key.'
    })
  }

  next()
}

export { Authorization }
