import { z } from 'zod';

export const ItemSchema = z.object({
    name: z.string().min(1),
    seller: z.string().min(1), // Assuming seller is the ID of the seller
    description: z.string().min(1),
    sold: z.boolean(),
    itemPic: z.string().min(1),
    buyer: z.string().min(1).nullable(), // Assuming buyer is the ID of the buyer, and it can be null if not sold
    startingPrice: z.number().int(),
    soldPrice: z.number().int().nullable(), // Assuming soldPrice can be null if not sold
    category: z.string().min(1),
    eventName: z.string().min(1), // Assuming eventName is the ID of the event
});

export type Item = z.infer<typeof ItemSchema>;
