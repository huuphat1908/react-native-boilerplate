import { z } from 'zod'

export const formElementSchema = () => {
  return z.object({
    input: z.string().max(10),
    dateInput: z.string().max(10),
    timeInput: z.string().max(10),
    dropdown: z.string().endsWith('2'),
    checkbox: z.boolean(),
    switch: z.boolean(),
    textArea: z.string().max(10),
    radio: z.string().endsWith('2'),
    select: z.string().endsWith('2'),
  })
}

export type FormElementData = z.infer<ReturnType<typeof formElementSchema>>
