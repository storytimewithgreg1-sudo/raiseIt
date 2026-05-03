import mongoose from "mongoose";

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`You have successfully connected: ${conn.connection.host}`)

} 

export default connectDB;