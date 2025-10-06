import joi from "joi";

const prodSchema = joi.object({
    nome: joi.string().min(5).max(150).required(),
    categoria: joi.string().min(5).max(150).required(),
    preco: joi.number().min(0).required(),
});

const prodUpdateSchema = joi.object({
    nome: joi.string().min(5).max(150),
    categoria: joi.string().min(5).max(150),
    preco: joi.number().min(0),
});

export { prodSchema, prodUpdateSchema };