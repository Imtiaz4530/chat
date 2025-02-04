/* eslint-disable no-unused-vars */
import { action, thunk } from "easy-peasy";
import io from "socket.io-client";

const socketModel = {
  socket: null,
  onlineUsers: [],

  setSocket: action((state, payload) => {
    state.socket = payload;
  }),

  setOnlineUsers: action((state, payload) => {
    state.onlineUsers = payload;
  }),

  initializeSocket: thunk((actions, payload) => {
    if (payload) {
      const socket = io(import.meta.env.VITE_BACKEND_URL, {
        query: { userId: payload.id },
      });

      actions.setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        actions.setOnlineUsers(users);
      });
    } else {
      actions.setSocket(null);
    }
  }),
};

export default socketModel;
