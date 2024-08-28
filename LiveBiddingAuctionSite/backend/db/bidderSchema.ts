import mongoose from 'mongoose';

const bidderschema = new mongoose.Schema({
    role: String,
    name: String,
    username: String,
    profileType: String,
    password: String,
    email: String,
    phone: Number,
    address: String,
    idType: String,
    idNumber: String,
    purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }],
    accountType: String,
    cardNumber: Number,
    expiryDate: String,
    cardHolderName: String,
    ifscCode: String,

});

export const Bidders = mongoose.model('Bidders', bidderschema);