import express from "express"
import dotenv from "dotenv"
import { Server } from "socket.io";
import { createServer } from "node:http"
import cors from "cors"

dotenv.config()
const port = process.env.PORT || 8000

const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("user connected");
    console.log("id", socket.id);
})


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});