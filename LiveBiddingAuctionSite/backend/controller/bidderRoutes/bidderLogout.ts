import { Request, Response } from "express";
import express from 'express'

const app = express();

app.get('/logout', (req: Request, res: Response) => {
    res.clearCookie('token');
    return res.status(200).json({ message: 'Bidder logged out successfully' });
});