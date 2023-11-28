import { z } from 'zod'

const formElementSchema = () => {
  return z.object({
    input: z.string().max(10),
    dateInput: z.string().max(10),
    timeInput: z.string().max(10),
    checkbox: z.boolean(),
    switch: z.boolean(),
    textArea: z.string(),
    dropdown: z.string(),
  })
}

export type FormElementData = z.infer<ReturnType<typeof formElementSchema>>

export default formElementSchema
