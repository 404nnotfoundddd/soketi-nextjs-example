import { NextResponse } from 'next/server';
import { getPusherServer } from '@/pusher/server';
const pusherServer = getPusherServer();

export async function POST(req: Request, res: Response) {
  try {
    await pusherServer.trigger('private-chat', 'evt::test', {
      message: 'test',
      user: 'ree',
      date: new Date(),
    });

    return NextResponse.json({ message: 'Sockets tested' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to test sockets', error: error },
      { status: 500 }
    );
  }
}
