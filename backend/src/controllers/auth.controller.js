import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils.js";

export const signup = async (req,res)=>  {

  try {
      const {name, email, password} = req.body;
    if (!name || !email || !password){
        return res.status(400).json({message:"all fields are required"});

    }

    if(password.length < 6){
       return  res.status(400).json({message: "Password length should be greater than 6"})
    }

    const user = await User.findOne({email});

    if (user) return res.status(400).json({message:"Email already exists"});
    

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser =new User({
        name,
        email,
        password: hashedPassword
    });

    if (newUser){
        await newUser.save();
        generateToken(newUser._id, res)
        res.status(201).json(newUser);
    }

  } catch (error) {
    console.log("Error in Signup controller," ,error)
    res.status(500);
  }

}

export const login = async (req,res)=>  {
    try {
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).json({message: "All Fields Required"})
        }
        
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(isPasswordCorrect){
            generateToken(user._id, res);
            return res.status(200).json(user)
        }else{
            return res.status(400).json({message:"invalid credentials"})
        }
    
        
    
     


    } catch (error) {
        console.log("Error in login controller", error)
        res.status(500).json({message: "internal Server Error "})
    }
}

export const logout = async (req,res)=>  {

    try {
        res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message: "Successfully logged out"})

    } catch (error) {
        console.log("Error in logout controller", error);
        res.status(500).json({message:"Internal Server Error"})
        
    }
}