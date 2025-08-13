import { Router, Request, Response  } from 'express';
const router = Router();

import { createUser, getUserById } from '../../users/controller';


router.post('/create', createUser);
router.get('/:id', getUserById);



export default router;
