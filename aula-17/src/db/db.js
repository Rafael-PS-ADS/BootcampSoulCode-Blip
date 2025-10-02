import mongoose from "mongoose";

async function connection() {
    try {
        await mongoose.connect("mongodb+srv://rafaelpsilvaads:Jago@0111@cluster0.v6vrqiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Database conected.");
    } catch (error) {
        console.log("Database connection error.");
    }
}

export { connection };
