import { z } from 'zod'

export const dialogScreenSchema = () => {
  return z.object({
    input: z.string().max(10),
  })
}

export type FormElementData = z.infer<ReturnType<typeof dialogScreenSchema>>
