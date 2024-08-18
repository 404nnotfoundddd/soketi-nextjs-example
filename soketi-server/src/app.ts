import Pusher from 'pusher'
import { env } from '@/env'

const pusher = new Pusher({
  appId: env.SOKETI_DEFAULT_APP_ID,
  key: env.SOKETI_DEFAULT_APP_KEY,
  secret: env.SOKETI_DEFAULT_APP_SECRET,
  host: '127.0.0.1',
  port: '6002',
  useTLS: false,
})

// maybe some code here
