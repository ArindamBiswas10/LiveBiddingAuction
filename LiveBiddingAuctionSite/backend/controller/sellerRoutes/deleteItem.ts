import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";


export const deleteItem = async (req: Request, res: Response) => {
    try {
        const itemId = req.params.itemId;
        const item = await Items.findOne({ _id: itemId });
        if (!item) {
            res.status(404).json({ message: 'Invalid item id' });
        }
        else {
            await Items.findByIdAndUpdate(itemId, (err: Error | null, docs: Document | null) => {
                if (err) {
                    res.status(400).json({ message: err })
                }
                else {
                    res.status(201).json({ message: `Deleted item ${docs}` });
                }
            })
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}
