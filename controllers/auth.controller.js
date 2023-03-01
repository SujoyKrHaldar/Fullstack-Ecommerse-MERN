import Jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/hashHelper.js";

const authController = {
  register: async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;

      if (!name || !email || !password || !address || !phone)
        return res.status(400).json({ message: "Field is empty!" });

      const isUserExist = await UserModel.findOne({ email });
      if (isUserExist)
        return res.status(400).json({ message: "Email already exists." });

      const hasedPassword = await hashPassword(password);

      await new UserModel({
        ...req.body,
        password: hasedPassword,
      }).save();

      console.log(` User created successfully `.bgMagenta);
      res.status(201).json({
        success: true,
        message: "Register successfull.",
      });
    } catch (e) {
      console.log(` User registration failed! `.red.inverse);
      res.status(500).json({
        success: false,
        message: "Server error, registration failed.",
        error: e.message,
      });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res.status(400).json({ message: "Field is empty!" });

      const existUser = await UserModel.findOne({ email });
      if (!existUser)
        return res.status(404).json({ message: "Invalid credential." });

      const isPassMatched = await comparePassword(password, existUser.password);
      if (!isPassMatched)
        return res.status(404).json({ message: "Invalid credential." });

      const token = Jwt.sign(
        {
          _id: existUser._id,
          name: existUser.name,
          isAdmin: existUser.isAdmin,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      console.log(` User loggedin successfully `.bgMagenta);
      res.status(200).json({
        success: true,
        message: "Login successfull.",
        user: {
          name: existUser.name,
          email: existUser.email,
          phone: existUser.phone,
          address: existUser.address,
        },
        token,
      });
    } catch (e) {
      console.log(` User login failed! `.red.inverse);
      res.status(500).json({
        success: false,
        message: "Server error, login failed.",
        error: e.message,
      });
    }
  },

  check: (req, res) => {
    res.status(200).json("hello Sujoy");
  },
  logout: async (req, res) => {},
};

export default authController;
