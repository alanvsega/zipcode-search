import cep from 'cep-promise'

export class ZipcodeService {
  private async tryFetch(zipcode: string) {
    let address = null
    let size = zipcode.length

    while (null === address && size >= 0) {
      try {
        address = await cep(zipcode)
      } catch (error) {
        zipcode = zipcode.slice(0, --size).padEnd(zipcode.length, '0')
      }
    }

    if (null === address) {
      throw new Error('CEP inválido.')
    }

    return address
  }

  async fetchAddress(zipcode: string) {
    zipcode = zipcode.replace(/[^\d]+/g, '')

    if (zipcode.length !== 8) {
      throw new Error('CEP inválido.')
    }

    const address = await this.tryFetch(zipcode)

    return address
  }
}
