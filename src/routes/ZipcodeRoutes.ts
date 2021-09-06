import { Router } from 'express';
import { ZipcodeController } from '../controllers/ZipcodeController';

const ZipcodeRoutes = Router()

ZipcodeRoutes.get('/zipcode/:zipcode', ZipcodeController.index)

export { ZipcodeRoutes }
