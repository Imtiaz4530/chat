/* eslint-disable react/prop-types */
import styles from "../../pages/Chat/chat.module.css";
import ChatHeader from "./ChatHeader";
import ChatMiddle from "./ChatMiddle";
import ChatBottom from "./ChatBottom";

const user = {
  id: 1,
  name: "John Doe",
  message: "Hey! ",
  avatar: "https://via.placeholder.com/150",
  isActive: true,
  time: "2s ago",
};
const sampleChats = [
  {
    id: 1,
    message: "Hey! How are you?",
    time: "12:30 PM",
    isOutgoing: false,
  },
  {
    id: 2,
    message: "I'm doing great! How about you?",
    time: "12:31 PM",
    isOutgoing: true,
  },
  {
    id: 3,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
  {
    id: 4,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
  {
    id: 5,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: true,
  },
  {
    id: 6,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
  {
    id: 7,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
  {
    id: 8,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
  {
    id: 9,
    message:
      "All good! Let's catch up soon. All good! Let's catch up soon. All good! Let's catch up soon.  All good! Let's catch up soon. All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.All good! Let's catch up soon.",
    time: "12:32 PM",
    isOutgoing: false,
  },
];

const Chat = ({ screenWidth, isChatClicked }) => {
  return (
    <div
      className={styles.chatContainer}
      style={{
        display: screenWidth <= 700 && isChatClicked ? "flex" : "none",
      }}
    >
      <ChatHeader user={user} screenWidth={screenWidth} />
      <ChatMiddle chats={sampleChats} />
      <ChatBottom />
    </div>
  );
};

export default Chat;
