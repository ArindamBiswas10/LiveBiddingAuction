import { Request, Response } from "express";
import { Bidders } from "../../db/bidderSchema";


export const updateProfileBidder = async (req: Request, res: Response) => {
    try {
        const id = req.params.bidderId;
        const bidder = await Bidders.findOne({ _id: id });
        if (!bidder) {
            res.status(400).json({ message: 'Invalid bidder id' })
        }
        else {
            await Bidders.findByIdAndUpdate(id, { ...req.body }, (err: Error | null, user: Document | null) => {
                if (err) {
                    res.status(400).json({ message: err })
                }
                else {
                    res.status(201).json({ message: `Updated bidder ${user}` });
                }
            })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

