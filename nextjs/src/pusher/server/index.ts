import { env } from '@/env/server';
import PusherServer from 'pusher';

export const getPusherServer = (options?: PusherServer.Options) =>
  new PusherServer({
    appId: env.PUSHER_APP_ID,
    key: env.PUSHER_KEY,
    secret: env.PUSHER_SECRET,
    host: '127.0.0.1',
    port: '6002',
    useTLS: false,
    ...options,
  });
