import express from "express";
import Prod from "../models/prod-model.js";
import verifyTokenMiddleware from "../middlewares/verify-token-middleware.js";
import validateSchema from "../middlewares/validate-middleware.js";
import { prodSchema, prodUpdateSchema } from "../validators/prod-validator.js";

const prodRouter = express.Router();

prodRouter.post("/",
    verifyTokenMiddleware,
    validateSchema(prodSchema),
    async (req, res) => {
        try {
            const data = req.body;
            const prod = new Prod(data);
            const doc = await prod.save();
            const prodCreated = doc.toObject();
            res.status(200).json(prodCreated);
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

prodRouter.get("/", async (req, res) => {
    try {
        const { nome, categoria, precoMin, precoMax } = req.query;
        const filter = {};
        if (nome) filter.nome = { $regex: nome, $options: "i" };
        if (categoria) filter.categoria = categoria;
        filter.preco = {};
        if (precoMin) filter.preco.$gte = precoMin;
        if (precoMax) filter.preco.$lte = precoMax;
        const prods = await Prod.find(filter)
            .sort({ nome: 1 });
        res.status(200).json(prods);
    } catch (error) {
        res.status(500).json({
            message: "Erro interno no servidor. Tente novamente mais tarde."
        });
    }
});

prodRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const prod = await Prod.findById(id);
        res.status(200).json(prod);
    } catch (error) {
        res.status(500).json({
            message: "Erro interno no servidor. Tente novamente mais tarde."
        });
    }
});

prodRouter.put("/:id",
    verifyTokenMiddleware,
    validateSchema(prodUpdateSchema),
    async (req, res) => {
        try {
            const data = req.body;
            const id = req.params.id;
            await Prod.updateOne({ _id: id }, { $set: data });
            const prodUpdated = await Prod.findById(id);
            res.status(200).json(prodUpdated);
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

prodRouter.delete("/:id",
    verifyTokenMiddleware,
    async (req, res) => {
        try {
            const id = req.params.id;
            await Prod.deleteOne({ _id: id });
            res.status(200).json({ message: "Produto removido." });
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

export default prodRouter;