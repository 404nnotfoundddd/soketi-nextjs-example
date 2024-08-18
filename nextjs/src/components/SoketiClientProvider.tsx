"use client"

import { SoketiClientCtx } from '@/context/soketiClient'
import { getPusherClient } from '@/pusher/client'
import type { PropsWithChildren } from 'react'

export const SoketiClientProvider = ({children}: PropsWithChildren) => {
  const soketiClient = getPusherClient

    return (
    <SoketiClientCtx.Provider value={soketiClient}>
        {children}
    </SoketiClientCtx.Provider>
)
}