import express, { json } from "express";
import authRoutes from "./routes/auth.routes.js";
import classroomRoutes from "./routes/classroom.routes.js";
import suggestionRoutes from "./routes/suggestion.route.js";
import connectDB from "./lib/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;



const app = express();



app.use(json())



app.use("api/auth",authRoutes)
app.use("api/classroom",classroomRoutes)
app.use("api/auth",suggestionRoutes)

 app.listen(5000, () => {
    connectDB();
    console.log("Server is running")
 })