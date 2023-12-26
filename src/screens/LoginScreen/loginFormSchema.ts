import { z } from 'zod'

export const loginFormSchema = () =>
  z.object({
    email: z.string().email({
      message: 'Invalid email',
    }),
    password: z
      .string()
      .min(4, {
        message: 'Password must be at least 4 characters',
      })
      .max(16, {
        message: 'Password cannot exceed 16 characters',
      }),
  })

export type LoginFormData = z.infer<ReturnType<typeof loginFormSchema>>
