import mongoose from 'mongoose';

const sellerschema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String,
    phoneNo: Number,
    address: String,
    idType: String,
    govId: String,
    publishedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }],
    unsoldItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }],
    cardType: String,
    cardNo: Number,
    expiryDate: String,
    cardHolderName: String,
    ifsc: String,
    bankName: String,
    pancardId: String
});

export const Sellers = mongoose.model('Sellers', sellerschema);