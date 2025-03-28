import mongoose from "mongoose";

 const ConnectDB=async()=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDB Connected Successfully")
    } catch(error)
    {
        console.log("ERROR",error)
    }
}
export default ConnectDB