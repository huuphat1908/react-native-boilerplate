import { z } from 'zod'

const formElementSchema = () => {
  return z.object({
    input: z.string(),
    dateInput: z.string(),
  })
}

export type FormElementData = z.infer<ReturnType<typeof formElementSchema>>

export default formElementSchema
