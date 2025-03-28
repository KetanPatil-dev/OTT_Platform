import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    profilepic: {
      type: String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
  },
  { timestamps: true }
);

const UserModel= mongoose.model("Users",userSchema)
export default UserModel
