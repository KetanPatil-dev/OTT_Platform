import express from "express"
import { Login, Logout, Signup } from "../controllers/auth.controller.js"
import { VerifyToken } from "../middlewares/VerifiyToken.js"

const AuthRoutes= express.Router()
AuthRoutes.post("/signup",Signup)
AuthRoutes.post("/login",Login)
AuthRoutes.post("/logout",Logout)
AuthRoutes.get("/verify",VerifyToken,(req,res)=>{
    res.status(201).json({user:req.user,message:"Authenticated"})
})
export default AuthRoutes