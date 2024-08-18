import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SOKETI_DEBUG: z.literal('1').or(z.literal('0')).default('0'),
    SOKETI_DEFAULT_APP_ID: z.string().cuid2(),
    SOKETI_DEFAULT_APP_KEY: z.string().cuid2(),
    SOKETI_DEFAULT_APP_SECRET: z.string(),
    SOKETI_DEFAULT_APP_MAX_CONNS: z.string(),
    SOKETI_DEFAULT_APP_USER_AUTHENTICATION: z
      .literal('true')
      .or(z.literal('false'))
      .default('false'),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   */
  runtimeEnv: process.env,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
})
