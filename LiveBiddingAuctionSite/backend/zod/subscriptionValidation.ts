import { z } from 'zod';

export const subscriptionSchema = z.object({
    name: z.string(),
    email: z.string(),
    address: z.string(),
    subscription: z.string()
})

export type Item = z.infer<typeof subscriptionSchema>;