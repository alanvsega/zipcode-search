import { Router } from 'express';
import { ZipcodeController } from '../controllers/ZipcodeController';

const ZipcodeRoutes = Router()

ZipcodeRoutes.get('/v1/zipcode/:zipcode', ZipcodeController.index)

export { ZipcodeRoutes }
