import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(req.body)
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      return res
        .status(300)
        .json({ success: false, message: "User Already Exists" });
    }
    const checklength = password.toString();
    if (checklength.length < 6) {
      return res
        .status(300)
        .json({
          success: false,
          message: "Password must be more than 6 digits",
        });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashPassword,
    });
    await newUser.save();
    //console.log(newUser)
    return res
      .status(201)
      .json({
        success: true,
        message: "User Created Successfully",
        user: newUser,
      });
  } catch (error) {
    console.log("Signup Error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email });
    if (!findUser)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    const comparePassword = await bcrypt.compare(password, findUser.password);
    if (!comparePassword) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Password" });
    }
    const token = jwt.sign({ userId: findUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    const { password: _, ...userInfo } = findUser._doc;
    return res
      .status(201)
      .json({ success: true, message: "User Logged In Successfully", token });
  } catch (error) {
    console.log("Login Error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res
      .status(201)
      .json({ success: true, message: "User Logged Out Successfully" });
  } catch (error) {
    console.log("Logout Error", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const Verify = async (req, res) => {
  try {
    res.status(200).json({ user: req.user, message: "Authenticated" });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
