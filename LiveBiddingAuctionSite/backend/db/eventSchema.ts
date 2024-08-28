import mongoose from 'mongoose';

const eventschema = new mongoose.Schema({
    name: String,
    date: Date,
    time: Date,
    startTime: Number,
    category: String,
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Items' }]
})


export const Events = mongoose.model('Events', eventschema);
