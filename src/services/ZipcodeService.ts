import { CEP } from 'cep-promise'
import { IAddress } from "../models/Address"
import { IResponseError } from "../models/Errors"

/**
 * 
 */
const cep = require('cep-promise')

export class ZipcodeService {
  private static async tryFetch(zipcode: string): Promise<IAddress> {
    let address: CEP | null = null
    let size: number = zipcode.length

    while (null === address && size >= 0) {
      try {
        address = await cep(zipcode)
      } catch (error) {
        zipcode = zipcode.slice(0, --size).padEnd(zipcode.length, '0')
      }
    }

    if (null === address) {
      const error = new Error('CEP não encontrado.') as IResponseError
      error.status = 404

      throw error
    }

    return {
      city: address.city,
      neighborhood: address.neighborhood,
      state: address.state,
      street: address.street,
      zipcode: address.cep
    }
  }

  static async fetchAddress(zipcode: string): Promise<IAddress> {
    zipcode = zipcode.replace(/[^\d]+/g, '')

    if (zipcode.length !== 8) {
      const error = new Error('CEP inválido.') as IResponseError
      error.status = 400

      throw error
    }

    return await this.tryFetch(zipcode)
  }
}
