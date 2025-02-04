import { mkdirSync, renameSync } from "fs";

import { getReceiverId, io } from "../socket/socket.js";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import { v2 as cloudinary } from "cloudinary";

export const sendMessageController = async (req, res) => {
  try {
    const message = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const sender = await User.findById(senderId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    let newMessage;
    if (message.messageType === "file") {
      newMessage = new Message({
        senderId,
        receiverId,
        messageType: message.messageType,
        fileUrl: message.fileUrl,
      });
    } else {
      newMessage = new Message({
        senderId,
        receiverId,
        messageType: message.messageType,
        content: message.content,
      });
    }

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    // Socket.IO functionality for message
    const receiverSocketId = getReceiverId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (e) {
    console.log("Error In Send Message Controller ---> ", e.message);
    res.json({ success: false, message: e.message });
  }
};

export const getMessageController = async (req, res) => {
  try {
    const { id: userToChatWith } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatWith] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (e) {
    console.log("Error In Get Message Controller ---> ", e.message);
    res.json({ success: false, message: e.message });
  }
};

// export const uploadFileController = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).send("File is required!");
//     }

//     const date = Date.now();
//     const fileDir = `uploads/files/${date}`;
//     const fileName = `${fileDir}/${req.file.originalname}`;

//     mkdirSync(fileDir, { recursive: true });

//     renameSync(req.file.path, fileName);

//     return res.status(200).json({ filePath: fileName });
//   } catch (e) {
//     console.log("uploadFileController ---->", { e });
//     return res.status(500).send("Internal Server Error! uploadFileController");
//   }
// };

export const uploadFileController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("File is required!");
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    return res.status(200).json({ filePath: result.secure_url });
  } catch (e) {
    console.log("uploadFileController ---->", { e });
    return res.status(500).send("Internal Server Error! uploadFileController");
  }
};
