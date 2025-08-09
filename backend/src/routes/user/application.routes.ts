import { Router, Request, Response  } from 'express';
const router = Router();

import { getApplication } from '../../modules/applications/controller';

router.get('/', getApplication);

export default router;
