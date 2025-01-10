import express from "express"
import dotenv from "dotenv"
import http from "http"
import cors from "cors"
import { Server } from "socket.io";

dotenv.config()
const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("user connected");
    console.log("id", socket.id);
    socket.on("disconnect", () => {
        console.log(`user disconnected ${socket.id}`);
    })
})

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});