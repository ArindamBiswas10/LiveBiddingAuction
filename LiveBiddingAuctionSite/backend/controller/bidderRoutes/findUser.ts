import { Request, Response } from 'express';
import { Bidders } from '../../db/bidderSchema';


export const findUser = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user = await Bidders.findOne({username,password});
        res.status(200).json({user});
    } catch (error) {
        console.error('Following error', error);
    }
}