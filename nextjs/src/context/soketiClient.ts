import type Pusher from 'pusher-js';
import { createContext, useContext } from 'react';

export const SoketiClientCtx = createContext<Pusher | null>(null);

export const useSoketiClient = () => {
  const client = useContext(SoketiClientCtx);
  if (!client) {
    throw new Error(
      'useSoketiClient must be used within a SoketiClientCtx.Provider'
    );
  }

  return client;
};
