import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const findUser = await UserModel.findById(id);
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }
    const deleteUser = await UserModel.findByIdAndDelete(id);
    return res
      .status(201)
      .json({ success: true, message: "User Deleted Successfully" });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
export const Update = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { id } = req.params;
    const findUser = await UserModel.findById(id);
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }
    let updateData = { email, username };
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      {
        new: true,
      }
    );

    const { password: _, ...userinfo } = updatedUser._doc;
    return res
      .status(201)
      .json({ success: true, message: "User Updated Successfully", userinfo });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const Find = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }
    const { password: _, ...userInfo } = user._doc;
    return res.status(201).json({ success: true, userInfo });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const FindAllUsers = async (req, res) => {
  try {
    const query = req.query.new;
    const users = query
      ? await UserModel.find().limit(10)
      : await UserModel.find();
    if (!users) {
      return res
        .status(404)
        .json({ success: false, message: "No Users Found" });
    }

    return res.status(201).json({ success: true, users });
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const UserStats = async (req, res) => {
  try {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const monthsArray = [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const data = await UserModel.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    return res.status(201).json({success:true,message:"User Stats",data})
  } catch (error) {
    console.log("ERROR", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
