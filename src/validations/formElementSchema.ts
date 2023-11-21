import { z } from 'zod'

const formElementSchema = () => {
  return z.object({
    input: z.string().max(10),
    dateInput: z.string().max(10),
  })
}

export type FormElementData = z.infer<ReturnType<typeof formElementSchema>>

export default formElementSchema
