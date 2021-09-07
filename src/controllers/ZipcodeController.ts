import { Request, Response } from 'express'

import { IAddress } from '../models/Address'
import { IResponseError } from '../models/Errors'
import { ZipcodeService } from '../services/ZipcodeService'

export class ZipcodeController {
  static async index(request: Request, response: Response): Promise<Response> {
    try {
      const { zipcode } = request.params

      const address: IAddress = await ZipcodeService.fetchAddress(zipcode)

      return response.status(200).send(address)
    } catch (error: IResponseError | any) {
      return response.status(error.status).json({
        message: error.message
      })
    }
  }
}
