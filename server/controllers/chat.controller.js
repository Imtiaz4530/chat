import { getReceiverId, io } from "../socket/socket.js";
import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const sendMessageController = async (req, res) => {
  try {
    const { message } = req.body;
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
