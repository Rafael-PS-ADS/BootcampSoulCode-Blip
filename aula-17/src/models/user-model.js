import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    idade: { type: Number, min: 0 },
    role: { type: String, default: "user" }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;