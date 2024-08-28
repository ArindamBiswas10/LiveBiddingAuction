import { z } from 'zod';

export const BidderSchema = z.object({
    role: z.string(),
    name: z.string(),
    username: z.string(),
    profileType: z.string().optional(),
    password: z.string().min(8, 'Password must be at least 8 characters long').max(32, 'Password must be at most 32 characters long').min(1),
    email: z.string(),
    phone: z.number(),
    address: z.string(),
    idType: z.string(),
    idNumber: z.string(),
    purchasedItems: z.array(z.string().optional()).optional(), // Assuming purchasedItems are IDs of Items
    accountType: z.string(),
    cardNumber: z.number().int(),
    expiryDate: z.string(), // You might want to use a specific date format or a Date type here
    cardHolderName: z.string(),
    ifscCode: z.string(),
});


export type Bidder = z.infer<typeof BidderSchema>;
