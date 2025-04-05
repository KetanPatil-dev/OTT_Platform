import jwt from "jsonwebtoken"
import UserModel from "../models/user.model.js"

export const VerifyToken= async(req ,res, next)=>{
    try {
        const token= req.cookies.token
        console.log(req.cookies)
        if(!token)
        {
            return res.status(401).json({success:false,message:"Access Denied"})
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded )
        const user= await UserModel.findById(decoded.userId)
        if(!user)
        {
            return res.status(404).json({success:false,message:"User not found"})
        }
       req.user=user

        next()
        
    } catch (error) {
        console.log("ERROR",error)
        return res.status(500).json({success:false,message:"Internal Server Error"})
    }
}