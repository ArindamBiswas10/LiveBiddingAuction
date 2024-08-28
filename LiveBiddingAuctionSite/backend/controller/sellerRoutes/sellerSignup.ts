import { Request, Response } from 'express';
import { Sellers } from '../../db/sellerSchema'
import { SellerSchema } from '../../zod/sellerValidaitons';


export const sellerSignup = async (req: Request, res: Response) => {
    try {
        // const validationResult = SellerSchema.safeParse(req.body);

        // if (!validationResult.success) {
        //     return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        // }

        const seller = await Sellers.findOne({ username: req.body.username });
        if (seller) {
            console.log('Seller already exists')
            return res.status(409).json({ message: 'Seller already exists' });
        }

        const newSeller = new Sellers({ ...req.body, publishedItems: [], unsoldItems: [] });
        await newSeller.save();
        return res.status(201).json(newSeller);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
