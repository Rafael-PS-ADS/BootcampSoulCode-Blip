import mongoose from "mongoose";

const prodSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    preco: { type: Number, min: 0 }
}, { timestamps: true });

const prod = mongoose.model("Products", prodSchema);

export default prod;