import "dotenv/config";
import express from "express";
import cors from "cors";

import connectDB from "./db/mongodb.js";
import authRoute from "./routes/auth.routes.js";

const app = express();

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

app.get("/", (req, res) => {
  res.send("API WORKING !!!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Application running on http://localhost:${PORT}`);
});
