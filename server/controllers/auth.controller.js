import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

export const registerController = async (req, res) => {
  try {
    const { name, username, email, gender, password, confirmPassword } =
      req.body;

    if (
      !name ||
      !email ||
      !username ||
      !gender ||
      !password ||
      !confirmPassword
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill all information!" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        success: false,
        message: "Email already exist!",
      });
    }

    const isUsernameMatched = await User.findOne({ username });

    if (isUsernameMatched) {
      return res.status(400).json({
        success: false,
        message: "Username already exist!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password doesn't match!",
      });
    }

    //hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Generating Profile Picture
    const profilePicture =
      gender === "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
      gender,
      profilePicture,
    });

    if (newUser) {
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

      res.json({
        success: true,
        user: {
          id: newUser._id,
          name: newUser.name,
          username: newUser.username,
          email: newUser.email,
          gender: newUser.gender,
          profilePicture: newUser.profilePicture,
          token,
        },
      });
    }
  } catch (e) {
    console.log("Error In register Controller ---> ", e.message);
    res.json({ success: false, message: e.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { identifier, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user doesn't exist!" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email,
        gender: user.gender,
        profilePicture: user.profilePicture,
        token,
      },
    });
  } catch (e) {
    console.log("Error In login Controller ---> ", e.message);
    res.json({ success: false, message: e.message });
  }
};
