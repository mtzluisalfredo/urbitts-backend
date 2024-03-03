import { Router } from 'express';

import parkingController from '@/controllers/parking';
import { isAuthenticated, validate } from '@/middleware';
import * as parkingValidations from '@/routes/validations/parking';

const router = Router();

router.route('/create')
  .post(isAuthenticated, validate(parkingValidations.createParkingRules), parkingController);

export default router;
