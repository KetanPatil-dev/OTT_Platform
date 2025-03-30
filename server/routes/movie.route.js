import express from "express"
import { VerifyToken } from "../middlewares/VerifiyToken.js"
import { CreateMovie, DeleteMovie, GetAllMovies, Random, UpdateMovie } from "../controllers/movie.controllers.js"
const MovieRoutes=express.Router()
MovieRoutes.post("/create",VerifyToken,CreateMovie)
MovieRoutes.put("/update/:id",VerifyToken,UpdateMovie)
MovieRoutes.delete("/delete/:id",VerifyToken,DeleteMovie)
MovieRoutes.get("/random",VerifyToken,Random)
MovieRoutes.get("/allmovies",VerifyToken,GetAllMovies)

export default MovieRoutes