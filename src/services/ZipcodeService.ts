import cep from 'cep-promise'

export class ZipcodeService {
  async find(zipcode: string) {
    return await cep(zipcode)
  }
}
