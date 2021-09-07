import request from 'supertest'

import { app } from '../../src/app'
import { resolvedExpected } from '../mocks/Address'
import { IResponseError } from '../../src/models/Errors'
import { ZipcodeService } from '../../src/services/ZipcodeService'

describe('Zipcode controller', () => {
  const apiKey: string = process.env.API_KEY || ''

  it('should be able to fetch a valid address and return status code 200', async () => {
    jest.spyOn(ZipcodeService, 'fetchAddress')
      .mockResolvedValue(resolvedExpected)

    const response = await request(app)
      .get('/api/v1/zipcode/13087-500')
      .set('X-API-KEY', apiKey)

    expect(response.body).toEqual(resolvedExpected)
    expect(response.status).toBe(200)
  })

  it('should return a bad request error with status code 400', async () => {
    const error = new Error('CEP inválido.') as IResponseError
    error.status = 400

    jest.spyOn(ZipcodeService, 'fetchAddress')
      .mockRejectedValue(error)

    const response = await request(app)
      .get('/api/v1/zipcode/cep')
      .set('X-API-KEY', apiKey)

    expect(response.status).toBe(400)
  })

  it('should return a not found error with status code 404', async () => {
    const error = new Error('CEP não encontrado.') as IResponseError
      error.status = 404

    jest.spyOn(ZipcodeService, 'fetchAddress')
      .mockRejectedValue(error)

    const response = await request(app)
      .get('/api/v1/zipcode/10000-000')
      .set('X-API-KEY', apiKey)

    expect(response.status).toBe(404)
  })

  it('should return an unathorized error with status code 401', async () => {
    jest.spyOn(ZipcodeService, 'fetchAddress')
      .mockResolvedValue(resolvedExpected)

    const response = await request(app)
      .get('/api/v1/zipcode/13087-500')

    expect(response.status).toBe(401)
  })
})
