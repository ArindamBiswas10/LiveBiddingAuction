import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";

export const allItems = async (req: Request, res: Response) => {
    try {
        const items = await Items.find({});
        // console.log(items);
        res.status(200).json(items);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
