import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"; // Authentication
import bcrypt from "bcrypt"; // Password hashing
import validator from "validator"; // Input validation
import { response } from "express";









// login user
const loginUser = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await userModel.findOne({ email });
    if(!user){
      return res.json({success: false, message:"User not found"})
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      return res.json({success: false, message:"Invalid Password"})

    }
    const token = createToken(user._id);

    res.json({success: true,token})
    
  } catch (error) {
    console.log(error);
    res.json({success: false, message:"Error: " + error.message})

  }
};













const createToken =(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}









const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking the user exist or not
    const exists = await userModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "User already registered" });
    }
    // Validating email format and Strong Password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a Valid Email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a Strong Password",
      });
    }
    //Hashing the Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id)
    res.json({success: true,token })
  } catch (error) {
    console.log(error);
    res.json({success: false,message:"Error"});
  }
};

export { loginUser, registerUser };