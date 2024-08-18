// src/app/page.tsx
import MessageList from '@/components/MessageList';
import { SoketiClientProvider } from '@/components/SoketiClientProvider';

export default function Home() {
  return (
    <SoketiClientProvider>
      <main className='flex bg-gradient-to-tr from-emerald-600 to-[rgb(0,209,178)] min-h-screen flex-col items-center justify-between p-24'>
        <MessageList />
      </main>
    </SoketiClientProvider>
  );
}
