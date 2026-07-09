import express from "express";
import {addToCart,deleteFromCart,listCartItems} from "../controllers/cartController.js"
import authenticate from "../middleware/adminAuth.js";
const cartRouter = express.Router()

cartRouter.post("/add",authenticate,addToCart)
cartRouter.delete("/remove/:id",authenticate,deleteFromCart)
cartRouter.get("/list",authenticate,listCartItems)



export default cartRouter