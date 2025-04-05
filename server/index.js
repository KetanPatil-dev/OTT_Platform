import express from "express"
import dotenv from "dotenv"
import  ConnectDB  from "./connect.js"
import AuthRoutes from "./routes/auth.route.js"
import UserRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser"
import MovieRoutes from "./routes/movie.route.js"
import ListRoutes from "./routes/list.route.js"
import cors from "cors"

dotenv.config()

const PORT= process.env.PORT || 7676
const app= express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    
}))

const Start= async()=>{
    try {
         await ConnectDB()
         app.use("/auth",AuthRoutes)
         app.use("/users",UserRoutes)
         app.use("/movies",MovieRoutes)
         app.use("/list",ListRoutes)
        app.listen(PORT, ()=>console.log(`Server Started on PORT: ${PORT}`))
        
    } catch (error) {
        console.log("ERROR",error)
    }
}
Start()