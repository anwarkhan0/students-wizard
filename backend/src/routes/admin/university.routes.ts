import { Router, Request, Response } from 'express';
const router = Router();

import { getUniversitiesByCountry, createUniversity } from '../../modules/universities/controller';

router.get('/', getUniversitiesByCountry);
router.post('/', createUniversity);

export default router;
