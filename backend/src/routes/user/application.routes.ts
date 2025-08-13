import { Router } from 'express';
import { createApplication, updateApplicationPhase, getApplicationsByUser, moveToNextPhase } from '../../modules/applications/controller';
import { addStep, getStepsByApplication, updateStepCompletion, completeStep } from '../../modules/stepProgress/controller';

const router = Router();

router.post('/', createApplication);
router.put('/:id', updateApplicationPhase);
router.get('/user/:userId', getApplicationsByUser);
router.patch('/:applicationId/next-step', moveToNextPhase);

router.post('/steps/:applicationId', addStep);
router.get('/steps/:applicationId', getStepsByApplication);
router.patch('/steps/:stepId', updateStepCompletion);
router.patch('/steps/:stepId/complete', completeStep);


export default router;
