import { Request, Response } from 'express'
import { ZipcodeService } from "../services/ZipcodeService"

export class ZipcodeController {
  constructor (
    private zipcodeService: ZipcodeService
  ) {}

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const { zipcode } = request.params

      const address = await this.zipcodeService.fetchAddress(zipcode)

      return response.status(200).send(address)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}
