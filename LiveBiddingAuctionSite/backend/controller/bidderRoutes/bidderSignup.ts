import { Request, Response } from 'express';
import { Bidders } from '../../db/bidderSchema';
import { BidderSchema } from '../../zod/bidderValidations';
import { generateTokenBidder } from '../jwtTokenGeneration/bidderToken'

export const bidderSignup = async (req: Request, res: Response) => {
    try {
        // const validationResult = BidderSchema.safeParse(req.body);

        // if (!validationResult.success) {
        //     console.error('Validation error:', validationResult.error.errors);
        //     return res.status(400).json({ message: 'Validation error', errors: validationResult.error.errors });
        // }

        const { username } = req.body;
        if (!username) {
            console.error('Username missing from request body');
            return res.status(400).json({ message: 'Username is required' });
        }

        const existingBidder = await Bidders.findOne({ username });
        if (existingBidder) {
            console.error('Bidder already exists:', username);
            return res.status(409).json({ message: 'Bidder already exists' });
        }

        const newBidder = new Bidders({ ...req.body, purchasedItems: [] });
        await newBidder.save();
        // const bidder = await Bidders.findOne({ username: req.body.username, password: req.body.password, role: req.body.role });
            // const token = generateTokenBidder(bidder._id);
        return res.status(201).json({ message: 'Bidder logged in successfully' });
    } catch (error) {
        console.error('Internal server error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
