import { z } from 'zod'

const formElementSchema = () => {
  return z.object({
    input: z.string().min(5).max(10),
    dateInput: z.string().min(5).max(10),
  })
}

export type FormElementData = z.infer<ReturnType<typeof formElementSchema>>

export default formElementSchema
