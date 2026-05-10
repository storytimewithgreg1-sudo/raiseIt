import jwt from "jsonwebtoken"
import User from "../models/User.js";
import Classroom from "../models/Classroom.js";
import { request } from "express";
import Suggestion from "../models/Suggestion.js";

export const protectRoutes = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized request" })
        };

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ message: "Token is invalid" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(400).json({ message: "User could not be found" })
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protect route,", error);
        return res.status(500).json({ message: "Internal Server Error" })
    }


}

export const isCreator = async (req, res, next) => {

    try {

        const userId = req.user._id.toString();

        const isCreator = await Classroom.findOne({ createdBy: userId, _id: req.params.classId });

        if (!isCreator) {
            return res.status(400).json({ message: "Unauthorised, Not the creator of this classroom" });
        }

        req.isCreator = isCreator;
        next();

    } catch (error) {
        console.log("Error in isCreator,", error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const isMember = async (req, res, next) => {

    try {

        const userId = req.user._id;
        const classId = req.params.classId;

        const classroom = await Classroom.findById(classId);

        if (!classroom.members.includes(userId)) {
            return res.status(400).json({ message: " Unauthorised, Not A Member of this Classroom" });
        }
        next();


    } catch (error) {
        console.log("Error in isMember,", error);
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const isAuthor = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const suggestionId = req.params.suggestionId;

        const isAuthor = await Suggestion.findOne({ author: userId });

        if (!isAuthor) {
            return res.status(400).json({ message: "Unauthorised , Not the author of this suggestion" });
        }
        next();

    } catch (error) {
        console.log("Error in isAuthor middleware")
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

export const isCreatorOrAuthor = async (req, res, next) => {
    try {

        const userId = req.user._id;
        const isAuthor = await Suggestion.findOne({ author: userId });


        const isCreator = await Classroom.findOne({ createdBy: userId, _id: req.params.classId });

        if (!isAuthor && !isCreator) {
            return res.status(400).json({ message: "Unauthorised, Not the creator of this classroom or the author of this suggestion" });
        }
        next();

    } catch (error) {
        console.log("Error in isCreatorOrAuthor middleware")
        return res.status(500).json({ message: "Internal Server Error" })
    }
}