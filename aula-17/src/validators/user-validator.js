import joi from "joi";

const userSchema = joi.object({
    nome: joi.string().min(5).max(150).required(),
    email: joi.string().email().required(),
    senha: joi.string().min(4).max(50).required(),
    idade: joi.number().integer().min(0).max(120),
    role: joi.string().valid("user", "adm"),
});

const userUpdateSchema = joi.object({
    nome: joi.string().min(5).max(150),
    email: joi.string().email(),
    senha: joi.string().min(4).max(50),
    idade: joi.number().integer().min(0).max(120),
    role: joi.string().valid("user", "adm"),
});

export { userSchema, userUpdateSchema };