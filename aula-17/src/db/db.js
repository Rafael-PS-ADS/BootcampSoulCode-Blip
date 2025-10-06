import mongoose from "mongoose";

async function connection() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database conected.");
    } catch (error) {
        console.log("Database connection error.");
    }
}

export { connection };
