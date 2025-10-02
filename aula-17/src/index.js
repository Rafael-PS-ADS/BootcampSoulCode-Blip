import express from "express";
import userRouter from "./routes/users-routes.js";
import notFoundMiddleware from "./middlewares/not-found-middleware.js";
import logTimeMiddleware from "./middlewares/log-time-middleware.js";
import { connection } from "./db/db.js";

connection();

const server = express();

server.use(express.json());

server.use(logTimeMiddleware);

server.use("/users", userRouter);

server.use(notFoundMiddleware);

server.listen(8080, "0.0.0.0", () => {
    console.log("Server running on port 8080");
});
