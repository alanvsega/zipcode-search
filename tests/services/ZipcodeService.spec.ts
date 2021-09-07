import { cepExpected, resolvedExpected } from '../mocks/Address'
import { ZipcodeService } from '../../src/services/ZipcodeService'
import { IAddress } from '../../src/models/Address'

/**
 * Using require instead import due to lib
 * incompatibilities with Typescript. More
 * details: https://github.com/BrasilAPI/cep-promise/issues/212.
 */
const cep = require('cep-promise')

jest.mock('cep-promise')

describe('Zipcode service', () => {
  it('should be able to fetch a valid address', async () => {
    cep.mockResolvedValue(cepExpected)

    const address: IAddress = await ZipcodeService.fetchAddress('13051-115')

    expect(address).toEqual(resolvedExpected)
  })

  it('should return an error indicating that the zipcode was not found', async () => {
    cep.mockRejectedValue(new Error('CEP não encontrado.'))

    await expect(ZipcodeService.fetchAddress('10000-000')).rejects.toThrowError('CEP não encontrado.')
  })

  it('should return an error indicating that the zipcode is invalid', async () => {
    cep.mockRejectedValue(new Error('CEP inválido.'))

    await expect(ZipcodeService.fetchAddress('cep')).rejects.toThrowError('CEP inválido.')
  })
})
