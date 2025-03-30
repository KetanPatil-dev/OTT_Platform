import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

export const VerifyToken= async(req ,res, next)=>{
    try {
        const token= req.cookies.token
        if(!token)
        {
            return res.status(300).json({success:false,message:"Access Denied"})
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        const user= await UserModel.findById(decoded.userId)
        if(!user)
        {
            return res.status(404).json({success:false,message:"User not found"})
        }
        if(user.isAdmin===false)
            return res.status(404).json({success:false,message:"You are not Admin"})

        next()
        
    } catch (error) {
        console.log("ERROR",error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}