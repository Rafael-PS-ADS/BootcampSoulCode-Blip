import express from "express";
import userRouter from "./routes/users-routes.js";

const server = express();

server.use("/users", userRouter);

server.use((req, res) => {
    res.status(404).json({
        message: "Caminho não encontrado.",
        path: req.path
    });
});

server.listen(8080, "0.0.0.0", () => {
    console.log("Server running on port 8080");
});
