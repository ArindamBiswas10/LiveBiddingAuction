import { NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';
import { Request, Response } from 'express';
import * as dotenv from "dotenv"
dotenv.config()

const secret_key_seller: string = process.env.secret_key_seller || 'IwillsettleForthis02';

export const jwtVerificationSeller = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized, please login' });
        }
        jwt.verify(token, secret_key_seller, (err: any, decoded: any) => {
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
