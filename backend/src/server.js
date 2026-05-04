import express, { json } from "express";
import authRoutes from "./routes/auth.routes.js";
import classroomRoutes from "./routes/classroom.routes.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cookieParser())
app.use(json())

app.use("/api/auth",authRoutes)
app.use("/api/classroom",classroomRoutes)


 app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on Port:", PORT)
 })