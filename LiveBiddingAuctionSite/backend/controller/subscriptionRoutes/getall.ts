import { Request, Response } from "express";
import { Subscriptions } from "../../db/subscriptionSchema";


export const getSubscribedUsers = async (req: Request, res: Response) => {
    try{
        const users = await Subscriptions.find({});
        console.log(users);
        return res.status(200).json({ users});
    }
    catch(err){
        console.error('Error while processing subscription:', err);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}