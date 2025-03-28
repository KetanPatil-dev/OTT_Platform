import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
  },
  imgTitle: {
    type: String,
  },
  imgSm: {
    type: String,
  },
  trailer: {
    type: String,
  },
  video: {
    type: String,
  },
  year: {
    type: String,
  },
  genre:{
    type:String
  },
  limit:{
    type:Number
  },
  isSeries:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

const MovieModel= mongoose.model("Movies",movieSchema)
export default MovieModel