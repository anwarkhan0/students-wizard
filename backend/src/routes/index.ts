import { Router } from 'express';
import countryRoutes from './admin/country.routes';
import universityRoutes from './admin/university.routes';
import programRoutes from './admin/program.routes';
import stepRoutes from './admin/step.routes';
import exploreRoutes from './user/explore.routes';
import applicationRoutes from './user/application.routes';

const router = Router();

// Admin routes
router.use('/admin/countries', countryRoutes);
router.use('/admin/universities', universityRoutes);
router.use('/admin/programs', programRoutes);
router.use('/admin/steps', stepRoutes);

// User routes
router.use('/explore', exploreRoutes);
router.use('/application', applicationRoutes);

export default router;
