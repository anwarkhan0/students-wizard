import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Hello from step route' });
});

export default router;
