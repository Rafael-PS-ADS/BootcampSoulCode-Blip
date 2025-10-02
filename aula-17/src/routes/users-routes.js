import express from "express";
import User from "../models/user-model.js";
import { userSchema, userUpdateSchema } from "../validators/user-validator.js";
import validateSchema from "../middlewares/validate-middleware.js";

const userRouter = express.Router();

userRouter.post("/", validateSchema(userSchema), async (req, res) => {
    const data = req.body;
    const user = new User(data);
    const doc = await user.save();
    const userCreated = doc.toObject();
    res.status(200).json(userCreated);
});

userRouter.get("/", async (req, res) => {
    const { nome, idade, role } = req.query;
    const filter = {};
    if (nome) filter.nome = { $regex: nome, $options: "i" };
    if (idade) filter.idade = idade;
    if (role) filter.role = role;
    const users = await User.find(filter)
        .sort({ nome: 1, email: 1 })
        .limit(10);
    res.status(200).json(users);
});

userRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).json(user);
});

userRouter.put("/:id", validateSchema(userUpdateSchema), async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    await User.updateOne({ _id: id }, { $set: data });
    const userUpdated = await User.findById(id);
    res.status(200).json(userUpdated);
});

userRouter.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "User deleted." });
});

export default userRouter;

// C Create
// R Read
// U Update
// D Delete
