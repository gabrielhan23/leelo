import { Router } from 'express';
import passport from 'passport';

import { LOGIN_REDIRECT, SCOPE } from '../config/passport';

const LOGIN_ROUTE = '/api/login';
const LOGOUT_ROUTE = '/api/logout';

const SUCCESS_REDIRECT = '/api/login/success';
const FAILURE_REDIRECT = '/api/login/failure';

const router = Router();

router.route(LOGIN_ROUTE).get((req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect(SUCCESS_REDIRECT);
  } else {
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
