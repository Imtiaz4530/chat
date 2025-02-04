import { createStore } from "easy-peasy";
import chatModel from "./model/chatModel";
import notificationModel from "./model/notificationModel";
import socketModel from "./model/socketModel";

const store = createStore({
  chat: chatModel,
  notification: notificationModel,
  socket: socketModel,
});

export default store;
