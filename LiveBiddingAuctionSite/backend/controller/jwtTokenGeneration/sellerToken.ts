import { ObjectId } from "mongoose";
import jwt from 'jsonwebtoken';

const secret_key_seller: (string | undefined) = process.env.secret_key_user || 'IwillsettleForthis02';

export const generateTokenSeller = (userid: ObjectId) => {
    const payload = {
        _id: userid
    }
    return jwt.sign(payload, secret_key_seller)
}
