import { Request, Response } from "express";
import { Events } from "../../db/eventSchema";


export const eventDetails = async (req: Request, res: Response) => {
    try {
        const eventId = req.params.eventId;
        const event = await Events.findOne({ _id: eventId });
        if (!event) {
            res.sendStatus(404);
        }
        res.status(200).json(event);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}