import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Lista de usuários." });
});

userRouter.post("/", (req, res) => {
    res.status(200).json({ message: "Usuário cadastrado." });
});

userRouter.put("/id", (req, res) => {
    res.status(200).json({ message: "Usuário atualizado." });
});

userRouter.delete("/id", (req, res) => {
    res.status(200).json({ message: "Usuário excluído." });
});

export default userRouter;