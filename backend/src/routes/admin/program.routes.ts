import { Router } from 'express';
const router = Router();

import { getProgramsByUniversity, createProgram } from '../../modules/programs/controller';

router.get('/:universityId', getProgramsByUniversity);
router.post('/', createProgram);

export default router;
