import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const protectRoutes = (req,res,next) => {

    try {
        const token = req.cookie.jwt;

        if(!token){
            return res.status(401).json({message:"Unauthorized request"})
        };
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({message:"Token is invalid"});
        }

        const user = User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(400).json({message:"User could not be found"})
        }

        req.user = user;

        next();
        
    } catch (error) {
        console.log("Error in protect route," ,error);
        res.status(500).json({message:"Internal Server Error"})
    }


}