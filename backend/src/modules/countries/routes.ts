import { Router } from 'express';
import { getAllCountries, createCountry } from './controller';

const router = Router();

router.get('/', getAllCountries);
router.post('/', createCountry);

export default router;
