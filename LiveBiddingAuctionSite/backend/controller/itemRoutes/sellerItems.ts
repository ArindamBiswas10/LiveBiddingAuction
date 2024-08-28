import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";


export const sellerItems = async (req: Request, res: Response) => {
    try {
        const sellerId = req.params.sellerId;
        const sellerItems = await Items.find({ sellerId: sellerId });
        if (!sellerItems) {
            res.status(404).json({ message: 'Zero items published by the seller for bidding' });
        }
        else {
            res.status(200).json(sellerItems);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}