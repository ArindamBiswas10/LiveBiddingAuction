import { NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request, Response } from 'express'
import * as dotenv from "dotenv"
dotenv.config()

const secret_key_bidder: string = process.env.secret_key_bidder || 'AlrightIwillsettleforthis';

export const jwtVerificationBidder = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized, please login' });
        }

        jwt.verify(token, secret_key_bidder, (err: VerifyErrors | null, decoded: any) => {
            if (err) {
                return res.status(401).json({ message: 'Token authentication failed' });
            }
            if (!decoded) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            next();
        });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
