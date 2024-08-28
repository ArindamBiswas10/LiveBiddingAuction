import { z } from 'zod';

export const SellerSchema = z.object({
    name: z.string().min(1),
    username: z.string().min(1),
    password: z.string().min(8, 'Password must be at least 8 characters long').max(32, 'Password must be at most 32 characters long').min(1),
    email: z.string().email('Invalid email format').min(1),
    phoneNo: z.string().refine((value) => value.length === 10, { message: 'Phone number must be 10 digits long' }),
    address: z.string().min(1),
    idType: z.string().min(1),
    govId: z.string().min(1),
    publishedItems: z.array(z.string()).min(1), // Assuming publishedItems are IDs of Items
    unsoldItems: z.array(z.string()).min(1), // Assuming unsoldItems are IDs of Items
    cardType: z.string().min(1),
    cardNo: z.number().int().min(1),
    expiryDate: z.string().min(1), // You might want to use a specific date format or a Date type here
    cardHolderName: z.string().min(1),
    ifsc: z.string().min(1),
    bankName: z.string().min(1),
    pancardId: z.string().min(1),
});


export type Sellers = z.infer<typeof SellerSchema>;
