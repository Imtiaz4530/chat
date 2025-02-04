import express from "express";
import multer from "multer";

import protectRoute from "../middlewares/protectRoute.js";
import {
  getMessageController,
  sendMessageController,
  uploadFileController,
} from "../controllers/chat.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// const upload = multer({ dest: "uploads/files" });

router.get("/:id", protectRoute, getMessageController);
router.post("/send/:id", protectRoute, sendMessageController);
// router.post("/upload-file", upload.single("file"), uploadFileController);

router.post("/upload-file", upload.single("image"), uploadFileController);

export default router;
