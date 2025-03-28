import express from "express"
import dotenv from "dotenv"
import  ConnectDB  from "./connect.js"
dotenv.config()

const PORT= process.env.PORT || 7676
const app= express()

const Start= async()=>{
    try {
         await ConnectDB()
        app.listen(PORT, ()=>console.log(`Server Started on PORT: ${PORT}`))
        
    } catch (error) {
        console.log("ERROR",error)
    }
}
Start()