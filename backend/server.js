const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { createServer } = require("http");
const authRoutes = require("./src/routes/authRoutes");
const filaRoutes = require("./src/routes/filaRoutes");
const categoriaRoutes = require("./src/routes/categoriaRoutes");

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/fila", filaRoutes);
app.use("/api/categorias", categoriaRoutes);

io.on("connection", (socket) => {
    console.log("Novo cliente conectado!");
});

server.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
