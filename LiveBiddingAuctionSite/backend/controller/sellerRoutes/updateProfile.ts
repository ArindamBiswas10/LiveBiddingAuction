import { Request, Response } from "express";
import { Sellers } from "../../db/sellerSchema";


export const updateProfileSeller = async (req: Request, res: Response) => {
    try {
        const id = req.params.bidderId;
        const bidder = await Sellers.findOne({ _id: id });
        if (!bidder) {
            res.status(400).json({ message: 'Invalid seller id' })
        }
        else {
            await Sellers.findByIdAndUpdate(id, { ...req.body }, (err: Error | null, docs: Document | null) => {
                if (err) {
                    res.status(400).json({ message: err })
                }
                else {
                    res.status(201).json({ message: `Updated seller details ${docs}` });
                }
            })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}

