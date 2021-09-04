import { Router } from 'express';
import { ZipcodeService } from './services/ZipcodeService';
import { ZipcodeController } from './controllers/ZipcodeController';

const router = Router()

const zipcodeService = new ZipcodeService()
const zipcodeController = new ZipcodeController(zipcodeService)

router.get('/zipcode/:zipcode', async (request, response) => {
  return await zipcodeController.index(request, response)
})

export { router }
