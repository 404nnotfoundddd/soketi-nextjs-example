import { getPusherServer } from '@/pusher/server';
import { createId } from '@paralleldrive/cuid2';
import type Pusher from 'pusher';

const pusherServer = getPusherServer();

export async function POST(req: Request) {
  console.log('authenticating pusher perms...');
  const data = await req.text();
  const [socketId, channelName] = data
    .split('&')
    .map((str) => str.split('=')[1]);

  // logic to check user permissions

  const isPresenceChannel = channelName.startsWith('presence-');

  // don't do this in production, this code authorize everyone
  const authResponse: Pusher.ChannelAuthResponse =
    pusherServer.authorizeChannel(
      socketId,
      channelName,
      
    );

  console.log(authResponse);

  return new Response(JSON.stringify(authResponse));
}
