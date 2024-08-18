// src/components/MessageList.tsx
'use client';

import { useSoketiClient } from '@/context/soketiClient';
import { useEffect, useState } from 'react';

interface MessageListProps {}

export default function MessageList({}: MessageListProps) {
  console.log('rendered');
  const soketiClient  = useSoketiClient()

  const [messages, setMessages] = useState<
    {
      message: string;
      date: string;
    }[]
  >([])
 
  useEffect(() => {
    const channel = soketiClient.subscribe('private-chat');

    channel.bind('evt::test', (data: any) => {
      console.log('test', data);
      setMessages([...messages, data]);
    });

    const presenceChannel = soketiClient.subscribe('presence-chat');

    channel.bind('pusher:subscription_succeeded', (members: any) => {
      console.log('subscription_succeeded', members);
    });

    channel.bind('pusher:subscription_error', (status: any) => {
      console.log('subscription_error', status);
    });

    presenceChannel.bind('pusher:member_added', (member: any) => {
      console.log('member_added', member);
    });

    console.log();

    return () => {
      channel.unsubscribe();
    };
  }, [messages]);

  const handleTestClick = async () => {
    let data = await fetch('/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'test' }),
    });
    let json = await data.json();
    console.log(json);
  };

  return (
    <div className='flex flex-col w-full items-center'>
      <button
        className='w-[10rem] bg-[#ffffff88] text-[#0000005b] font-[700] hover:opacity-70 text-[1.2rem] rounded-lg p-2 m-2'
        onClick={() => handleTestClick()}
      >
        SEND
      </button>

      <div className='flex flex-col gap-2'>
        {messages
          .slice()
          .reverse()
          .map((message: any) => (
            <div
              className='border-[#ffffff98] border-[0.2rem] rounded-lg px-3 py-2'
              key={message.date}
            >
              {message.message}
              <br />
              {message.date}
            </div>
          ))}
      </div>
    </div>
  );
}
