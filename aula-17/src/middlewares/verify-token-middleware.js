import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export default (req, res, next) => {
    const authorization = req.headers.authorization;
    const token = authorization?.split(" ")[1]; // Remove o prefixo "Bearer"

    if (!token) {
        return res.status(401).json({
            message: "Autenticação necessária"
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Token inválido ou expirado"
        });
    }
}