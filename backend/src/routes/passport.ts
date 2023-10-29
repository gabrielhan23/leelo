import { Router } from 'express';
import passport from 'passport';

import { LOGIN_REDIRECT, SCOPE } from '../config/passport';

const LOGIN_ROUTE = '/api/login';
const LOGOUT_ROUTE = '/api/logout';

const SUCCESS_REDIRECT = 'http://localhost:3000/';
const FAILURE_REDIRECT = '/api/login/failure';

const router = Router();

router.route(LOGIN_ROUTE).get((req, res, next) => {
  console.log('login route');
  if (req.isAuthenticated()) {
    console.log('already logged in');
    res.redirect(SUCCESS_REDIRECT);
  } else {
    console.log('login attempt');
    // next();
    passport.authenticate('google', {
      scope: SCOPE,
      accessType: 'offline',
      prompt: 'consent',
    });
    console.log('should have auth');
    next();
  }
}, passport.authenticate('google', {
  scope: SCOPE,
  accessType: 'offline',
  prompt: 'consent',
}));

router.route(LOGIN_REDIRECT).get(passport.authenticate('google', {
  failureRedirect: FAILURE_REDIRECT,
  // failureMessage: "failed",
  successRedirect: SUCCESS_REDIRECT,
}));

router.route(LOGOUT_ROUTE).get((req, res) => {
  req.logout((err) => {
    if (err) {
      res.redirect(FAILURE_REDIRECT);
    } else {
      res.redirect(SUCCESS_REDIRECT);
    }
  });
});

export default router;
