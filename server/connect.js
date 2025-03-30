import mongoose from "mongoose";

 const ConnectDB=async()=>{
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/CloneFlix")
    console.log("MongoDB Connected Successfully")
    } catch(error)
    {
        console.log("ERROR",error)
    }
}
export default ConnectDB