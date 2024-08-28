import { Request, Response } from "express";
import { Events } from "../../db/eventSchema";


export const allEvents = async (req: Request, res: Response) => {
    try {
        const events = await Events.find({});
        res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}