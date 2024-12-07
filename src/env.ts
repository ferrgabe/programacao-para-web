import z from 'zod';

export const envSchema = z.object({
  PORT: z.string().default('3000'),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
});

export type Env = z.infer<typeof envSchema>;
export const env: Env = envSchema.parse(process.env);
