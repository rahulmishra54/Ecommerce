import express from "express";

import multer from "multer";
import authenticate from "../middleware/adminAuth.js";

import { addProduct,removeProduct,singleProduct,listProduct } from "../controllers/productController.js";

const productRouter = express.Router()

const upload = multer({
    storage : multer.memoryStorage() 
});
 

productRouter.post("/add",upload.array("images", 5),addProduct)
productRouter.delete("/remove/:id",removeProduct)
productRouter.get("/single/:id",singleProduct)
productRouter.get("/list",listProduct)

export default productRouter