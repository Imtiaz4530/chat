import "dotenv/config";
import express from "express";
import cors from "cors";

import { app, server } from "./socket/socket.js";
import connectDB from "./db/mongodb.js";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

await connectDB();

app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.get("/", (req, res) => {
  res.send("API WORKING !!!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
