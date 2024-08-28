import express from 'express';
import { newSubscription } from '../controller/subscriptionRoutes/new';
import { getSubscribedUsers } from '../controller/subscriptionRoutes/getall';

const app = express();

app.post('/new', newSubscription);
app.get('/', getSubscribedUsers);

export default app;






