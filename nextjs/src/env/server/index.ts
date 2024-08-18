// https://env.t3.gg/docs/introduction
// https://env.t3.gg/docs/nextjs

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    PUSHER_APP_ID: z
      .string()
      .cuid2()
      .refine(
        (str) => !str.includes('YOUR_PUSHER_APP_ID_HERE'),
        'You forgot to change the default pusher app id'
      ),
    PUSHER_KEY: z
      .string()
      .cuid2()
      .refine(
        (str) => !str.includes('YOUR_PUSHER_KEY_HERE'),
        'You forgot to change the default pusher key'
      ),
    PUSHER_SECRET: z
      .string()
      .refine(
        (str) => !str.includes('YOUR_PUSHER_SECRET_HERE'),
        'You forgot to change the default pusher secret'
      ),

    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_KEY: process.env.PUSHER_KEY,
    PUSHER_SECRET: process.env.PUSHER_SECRET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined.
   * `SOME_VAR: z.string()` and `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
