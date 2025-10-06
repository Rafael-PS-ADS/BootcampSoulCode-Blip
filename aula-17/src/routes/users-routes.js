import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import { userSchema, userUpdateSchema } from "../validators/user-validator.js";
import validateSchema from "../middlewares/validate-middleware.js";
import verifyTokenMiddleware from "../middlewares/verify-token-middleware.js";

const userRouter = express.Router();

userRouter.post("/",
    validateSchema(userSchema),
    async (req, res) => {
        try {
            const data = req.body;

            const existingUser = await User.findOne({ email: data.email });
            if (existingUser) {
                return res.status(400).json({
                    message: "Este e-mail já está cadastro."
                });
            }

            const hash = await bcrypt.hash(data.senha, 10);
            data.senha = hash;
            const user = new User(data);
            const doc = await user.save();
            const userCreated = doc.toObject();
            res.status(200).json(userCreated);
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

userRouter.get("/", async (req, res) => {
    try {
        const { nome, idade, role } = req.query;
        const filter = {};
        if (nome) filter.nome = { $regex: nome, $options: "i" };
        if (idade) filter.idade = idade;
        if (role) filter.role = role;
        const users = await User.find(filter)
            .sort({ nome: 1, email: 1 })
        // .limit(10);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Erro interno no servidor. Tente novamente mais tarde."
        });
    }
});

userRouter.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            message: "Erro interno no servidor. Tente novamente mais tarde."
        });
    }
});

userRouter.put("/:id",
    verifyTokenMiddleware,
    validateSchema(userUpdateSchema),
    async (req, res) => {
        try {
            const data = req.body;
            if (data.senha) {
                data.senha = await bcrypt.hash(data.senha, 10);
            }
            const id = req.params.id;
            await User.updateOne({ _id: id }, { $set: data });
            const userUpdated = await User.findById(id);
            res.status(200).json(userUpdated);
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

userRouter.delete("/:id",
    verifyTokenMiddleware,
    async (req, res) => {
        try {
            const id = req.params.id;
            await User.deleteOne({ _id: id });
            res.status(200).json({ message: "Usuário removido." });
        } catch (error) {
            res.status(500).json({
                message: "Erro interno no servidor. Tente novamente mais tarde."
            });
        }
    });

export default userRouter;

// C Create
// R Read
// U Update
// D Delete
