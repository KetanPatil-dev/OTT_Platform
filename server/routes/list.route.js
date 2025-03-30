import express from "express"
import { VerifyToken } from "../middlewares/VerifiyToken.js"
import { Create, DeleteList,JustTenVideos,UpdateList } from "../controllers/list.controller.js"

const ListRoutes= express.Router()

ListRoutes.post("/create",VerifyToken,Create)
ListRoutes.delete("/delete/:id",VerifyToken,DeleteList)
ListRoutes.put("/update/:id",VerifyToken,UpdateList)
ListRoutes.get("/",VerifyToken,JustTenVideos)
export default ListRoutes