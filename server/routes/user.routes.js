import express from "express"
import { Delete, Find, FindAllUsers, Update, UserStats } from "../controllers/user.controllers.js"
import { VerifyToken } from "../middlewares/VerifiyToken.js"

const UserRoutes= express.Router()

UserRoutes.post("/delete/:id",VerifyToken,Delete)
UserRoutes.post("/update/:id",VerifyToken,Update)
UserRoutes.get("/find/:id",Find)
UserRoutes.get("/",VerifyToken,FindAllUsers)
UserRoutes.get("/stats",VerifyToken,UserStats)
export default UserRoutes