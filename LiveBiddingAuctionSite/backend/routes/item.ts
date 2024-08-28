import express from 'express'
import { allItems } from '../controller/itemRoutes/allItems';
import { sellerItems } from '../controller/itemRoutes/sellerItems';
import { itemDetails } from '../controller/itemRoutes/itemDetails'
const app = express();

app.use('/', allItems);        // Route to get all the published items irrespective of any categories or filters.
app.use('/:sellerId', sellerItems);  // Route to get all the items published by a particular seller.
app.use('/event/:eventId', itemDetails)



export default app