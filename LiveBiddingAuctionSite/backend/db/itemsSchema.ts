import mongoose from 'mongoose';

const itemschema = new mongoose.Schema({
    name: String,
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'Sellers' },
    sellerName: String,
    description: String,
    sold: Boolean,
    itemPic: String,
    buyer: { type: String, ref: 'Bidders' },
    buyerName: String,
    startingPrice: String,
    soldPrice: String,
    category: String,
    eventName: String,
    
})

export const Items = mongoose.model('Items', itemschema);