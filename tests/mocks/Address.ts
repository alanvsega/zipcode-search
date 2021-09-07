import { CEP } from 'cep-promise'
import { IAddress } from '../../src/models/Address'

const cepExpected: CEP = {
  cep: '13051115',
  city: 'Campinas',
  neighborhood: 'Jardim das Bandeiras',
  service: 'brasilapi',
  state: 'SP',
  street: 'Rua José Florence Teixeira'
}

const resolvedExpected: IAddress = {
  city: 'Campinas',
  neighborhood: 'Jardim das Bandeiras',
  state: 'SP',
  street: 'Rua José Florence Teixeira',
  zipcode: '13051115'
}

export { cepExpected, resolvedExpected }
