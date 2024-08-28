import { Request, Response } from "express";
import { Subscriptions } from "../../db/subscriptionSchema";
// import { subscriptionSchema } from "../../zod/subscriptionValidation";

export const newSubscription = async (req: Request, res: Response) => {
    try {
        // Destructure properties from req.body with default values to prevent undefined errors
        const { name = '', email = '', address = '', subscription = '' } = req.body;

        // Check if required properties exist
        if (!name || !email || !address || !subscription) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // Create new subscription instance
        const newSubscription = new Subscriptions({ name, email, address, subscription });

        // Save subscription to the database
        await newSubscription.save();

        // Return success response
        return res.status(201).json({ success: true, message: 'Subscription created successfully' });
    } catch (err) {
        console.error('Error while processing subscription:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}
