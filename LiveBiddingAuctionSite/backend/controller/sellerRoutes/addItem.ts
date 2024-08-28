import { Request, Response } from "express";
import { Items } from "../../db/itemsSchema";
import { Sellers } from "../../db/sellerSchema";
// const multer = require('multer');

// Configure multer for handling file uploads


// Set the destination folder for uploaded files

export const addItem = async (req: Request & { file: any }, res: Response) => { // Define the file property on the request object
    try {
        const url = req.protocol + '://' + req.get('host')
        const sellerId = req.params.sellerId;
        console.log(sellerId)
        const name = req.body.name;
        console.log(req.body)

        //fetch sellerName 
        const seller = await Sellers.findById(sellerId);
        console.log(seller)
        const sellerName = seller?.name;
        console.log(sellerName)
        // const item = await Items.findOne({ name: name });

        // if (item) {
        //     return res.status(409).json({ message: 'Item already exists' });
        // }
        
        const newItemData = {
            ...req.body,
            sellerName: sellerName,
            itemPic:  req.file?.filename // Store the path of uploaded file in the itemPic field
        };

        const newItem = new Items(newItemData);
        console.log(newItemData)
        await newItem.save();

        await Sellers.findByIdAndUpdate(sellerId, { $push: { publishedItems: newItem._id, unsoldItems: newItem._id } }, { new: true });

        return res.status(201).json(newItem);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

