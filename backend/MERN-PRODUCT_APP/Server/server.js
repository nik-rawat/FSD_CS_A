import express from "express";

const server = express();
const PORT = 3000;

server.get("/", (req, res) => {
    res.send(JSON.stringify("Server is running"));
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})