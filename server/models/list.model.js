import mongoose from "mongoose";
const ListSchema = new mongoose.Schema({
  title: {
    type: String,
  },
 
  genre:{
    type:String
  },
  content:{
    type:Number
  },
 content:{
    type:Array
 }
  
},{timestamps:true});

const ListModel= mongoose.model("List",ListSchema)
export default ListModel