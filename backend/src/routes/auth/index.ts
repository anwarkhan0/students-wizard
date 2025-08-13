import { Router } from 'express';
import passport from 'passport';
import { register, login } from '../../auth/auth.controller';

const router = Router();

// Local Auth
router.post('/register', register);
router.post('/login', login);

// Google Auth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req: any, res) => {
    // Redirect to frontend with JWT token
    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${req.user.token}`);
  }
);

export default router;
