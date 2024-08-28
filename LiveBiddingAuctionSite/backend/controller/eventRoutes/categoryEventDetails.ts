import { Request, Response } from "express";
import { Events } from "../../db/eventSchema";


export const categoryEventDetails = async (req: Request, res: Response) => {
    try {
        const category = req.params.category;
        const events = await Events.find({ category: category });
        if (!events) {
            res.status(400).json({ message: 'Invalid category' })
        }
        else {
            res.status(200).json(events);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}