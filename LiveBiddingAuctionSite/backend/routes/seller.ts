import express from "express";
import { sellerSignup } from "../controller/sellerRoutes/sellerSignup";
import { sellerLogin } from "../controller/sellerRoutes/sellerLogin";
import { updateProfileSeller } from "../controller/sellerRoutes/updateProfile";
const { addItem } = require("../controller/sellerRoutes/addItem");
import { updateItem } from "../controller/sellerRoutes/updateItem";
import { deleteItem } from "../controller/sellerRoutes/deleteItem";
import { jwtVerificationSeller } from "../middlewares/jwtSeller";
const multer = require("multer");

const app = express();
const storage = multer.diskStorage({
  destination: (req: Request, file: any, cb: any) => {
    cb(null, "/home/armaan/Subasta/Ctrl-Alt-Defeat_2.1.3/frontend/public/");
  },
  filename: (req: Request, file: any, cb: any) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, `${Date.now()} - ${fileName}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req: Request, file: any, cb: any) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

app.post("/signup", sellerSignup); // Route for seller to signup.
app.post("/login", sellerLogin); // Route for seller to login.
app.put("/:sellerId", jwtVerificationSeller, updateProfileSeller); // Route for seller to update/modify his/her profile.
app.post("/item/:sellerId", upload.single("itemPic"), addItem); // Route for seller to publish new item for bidding into any upcoming event.
app.put("/item/:itemId", jwtVerificationSeller, updateItem); // Route for seller to update/modify the details of his/her published items.
app.delete("/item/:itemid", jwtVerificationSeller, deleteItem); // Route for seller to delete his/her item from the listing.

export default app;
