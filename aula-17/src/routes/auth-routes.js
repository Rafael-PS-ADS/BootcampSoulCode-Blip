import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user-model.js";

const authRouter = express.Router();
const SECRET = process.env.JWT_SECRET;

authRouter.post("/", async (req, res) => {
    try {
        const { email, senha } = req.body;
        const user = await User
        .findOne({ email })
        .select({ nome: 1, email: 1, senha: 1 });

        if (!user) {
            return res.status(401).json({
                message: "Este e-mail não está cadastro"
            });
        }

        const compare = await bcrypt.compare(senha, user.senha);

        if (!compare) {
            return res.status(401).json({
                message: "A senha está incorreta"
            });
        }

        const payload = {
            id: user._id,
            nome: user.nome,
            email: user.email
        };
        const token = jwt.sign(payload, SECRET, { expiresIn: "1h" });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erro interno no servidor. Tente novamente mais tarde."
        });
    }
});

export default authRouter;