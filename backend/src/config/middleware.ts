import cors from 'cors';
import type { Application } from 'express';
import { json } from 'express';
import session from 'express-session';
import helmet from 'helmet';
import passport from 'passport';

import env from './env';

function loadMiddleware(app: Application) {
  app.use(json());
  app.use(cors({
    credentials: true,
  }));
  app.use(helmet());
  app.use(session({
    secret: env.SESSION_SECRET,
    name: 'sessionId',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: !env.isDev,
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: 'lax',
    },
    rolling: true,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}

export default loadMiddleware;
