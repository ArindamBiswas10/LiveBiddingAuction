import { Request, Response } from "express";
import { Sellers } from "../../db/sellerSchema";
import { generateTokenSeller } from '../jwtTokenGeneration/sellerToken'

export const sellerLogin = async (req: Request, res: Response) => {
    try {
        const seller = await Sellers.findOne({ username: req.body.username, password: req.body.password });
        if (!seller) {
            
            res.status(401).json({ message: 'Seller not found' })
        }
        else {
            //@ts-ignore
            const token = generateTokenSeller(seller._id);
            res.cookie('token', token);
            
            return res.status(201).json({
                user:seller,
                message: 'Seller logged in successfully'
            });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
}