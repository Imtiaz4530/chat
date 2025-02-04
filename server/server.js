import "dotenv/config";
import express from "express";
import cors from "cors";

import { app, server } from "./socket/socket.js";
import connectDB from "./db/mongodb.js";
import connectCloudinary from "./utils/cloudinary.js";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoute from "./routes/user.routes.js";

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

app.get("/", (req, res) => {
  res.send("API WORKING !!!");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
