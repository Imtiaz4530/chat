import express from "express";

import protectRoute from "../middlewares/protectRoute.js";
import {
  getMessageController,
  sendMessageController,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessageController);
router.post("/send/:id", protectRoute, sendMessageController);

export default router;
