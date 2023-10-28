import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: Number(process.env.PORT) || 8080,
  MONGO_URI: process.env.MONGO_URI!,
  SESSION_SECRET: process.env.SESSION_SECRET!,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  isDev: process.env.NODE_ENV === 'development',
};

export default config;
