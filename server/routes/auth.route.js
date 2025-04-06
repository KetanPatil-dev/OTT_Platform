import express from "express"
import { Login, Logout, Signup, Verify } from "../controllers/auth.controller.js"
import { VerifyToken } from "../middlewares/VerifiyToken.js"

const AuthRoutes= express.Router()
AuthRoutes.post("/signup",Signup)
AuthRoutes.post("/login",Login)
AuthRoutes.post("/logout",Logout)
AuthRoutes.get("/verify",VerifyToken,Verify)
export default AuthRoutes