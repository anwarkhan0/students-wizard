import { Router, Request, Response } from 'express';
const router = Router();

import { getAllCountries, createCountry } from '../../modules/countries/controller';

router.get('/', getAllCountries);

router.post('/', createCountry);

export default router;
