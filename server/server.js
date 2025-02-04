import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";

import { app, server } from "./socket/socket.js";
import connectDB from "./db/mongodb.js";
import connectCloudinary from "./utils/cloudinary.js";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";

const __dirname = path.resolve();
app.use("/uploads/files", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/uploads/files", express.static("uploads/files"));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

await connectDB();
await connectCloudinary();

app.use("/api/auth", authRoute);
app.use("/api/chats", messageRoute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("API WORKING !!!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
