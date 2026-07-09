import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors"
import connectDb from "./config/db.js";

import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

const app = express()

connectDb()

const port = process.env.PORT || 4000
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use("/api/auth",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)




console.log("ENV:", process.env.admin, process.env.password);
app.listen(port , ()=>{
    console.log("server working")
})