function validateSchema(schema) {
    return (req, res, next) => {
        const data = req.body;
        const verification = schema.validate(data);
        if (verification.error) {
            res.status(400).json({
                message: "Dados inválidos. Verifique e tente novamente."
            });
        } else next();
    }
}

export default validateSchema;