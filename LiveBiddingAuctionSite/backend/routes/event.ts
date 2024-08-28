import express from 'express';
import { categoryEventDetails } from '../controller/eventRoutes/categoryEventDetails'
import { allEvents } from '../controller/eventRoutes/allEvents';
import { eventDetails } from '../controller/eventRoutes/eventDetails';

const app = express();

app.get('/:category', categoryEventDetails); // Route to get all the events listed in the given category.
app.get('/', allEvents);             // Route to get all the events without any filter.   
app.get('/get/:eventId', eventDetails)


export default app