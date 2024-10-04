import express, { Application, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from 'passport';

import db_connect from './database/db';
import {
  DATABASE_CONNECTION_STRING,
  DATABASE_NAME,
  FRONTEND_URL,
  PORT,
  SESSION_SECRET
} from './utils/secrets';
import ApiResponse from './utils/api-response-handler';

const app: Application = express();
const corsOptions: CorsOptions = {
  origin: [`${FRONTEND_URL}`],
  credentials: true
};
const sessionOptions = {
  secret: [`${SESSION_SECRET}`],
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: `${DATABASE_CONNECTION_STRING}/${DATABASE_NAME}`,
    collectionName: 'sessions'
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // valid for 1-day
  }
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());

db_connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
  });

  app.get('/api/v1/health', (_, res: Response) => {
    res.status(200).json(new ApiResponse(200, 'Server is Healthy'));
    return;
  });
});
