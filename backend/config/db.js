import mongoose from "mongoose";

async function connectDb(){
    const conn = await mongoose.connect(process.env.MONGO_URI).then(res=>{
        console.log("Connected")
    }).catch(err=>{
        console.log(err)
    })

}

export default connectDb