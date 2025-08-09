import { Router, Request, Response } from 'express'; // <-- Missing Request, Response imports
const router = Router();

const home = async (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Explore route is working',
        data: {
            info: 'This is the explore endpoint'
        }
    });
};

router.get('/', home);

export default router;
