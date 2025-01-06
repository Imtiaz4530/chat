/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

import styles from "../../pages/Chat/chat.module.css";
import ChatList from "./ChatList";

const sampleChats = [
  {
    id: 1,
    name: "John Doe",
    message: "Hey! ",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "2s ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Can you send me the file when you get a chance?",
    avatar: "https://via.placeholder.com/150",
    isActive: false,
    time: "36w ago",
  },
  {
    id: 3,
    name: "Alex Johnson",
    message:
      "Just checking in to see how everything is going. Let me know if you need anything!",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "8h ago",
  },
  ,
  {
    id: 4,
    name: "John Doe",
    message: "Hey! ",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "2s ago",
  },
  {
    id: 5,
    name: "Jane Smith",
    message: "Can you send me the file when you get a chance?",
    avatar: "https://via.placeholder.com/150",
    isActive: false,
    time: "36w ago",
  },
  {
    id: 6,
    name: "Alex Johnson",
    message:
      "Just checking in to see how everything is going. Let me know if you need anything!",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "8h ago",
  },
  {
    id: 7,
    name: "John Doe",
    message: "Hey! ",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "2s ago",
  },
  {
    id: 8,
    name: "Jane Smith",
    message: "Can you send me the file when you get a chance?",
    avatar: "https://via.placeholder.com/150",
    isActive: false,
    time: "36w ago",
  },
  {
    id: 9,
    name: "Alex Johnson",
    message:
      "Just checking in to see how everything is going. Let me know if you need anything!",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "8h ago",
  },
  {
    id: 10,
    name: "John Doe",
    message: "Hey! ",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "2s ago",
  },
  {
    id: 11,
    name: "Jane Smith",
    message: "Can you send me the file when you get a chance?",
    avatar: "https://via.placeholder.com/150",
    isActive: false,
    time: "36w ago",
  },
  {
    id: 12,
    name: "Alex Johnson",
    message:
      "Just checking in to see how everything is going. Let me know if you need anything!",
    avatar: "https://via.placeholder.com/150",
    isActive: true,
    time: "8h ago",
  },
];

const ChatLists = ({ setIsChatClicked, screenWidth, isChatClicked }) => {
  return (
    <div
      className={styles.chatListsContainer}
      style={{
        display: screenWidth <= 700 && isChatClicked ? "none" : "block",
      }}
    >
      <h2>Messages</h2>
      <div className={styles.searchContainer}>
        <span className={styles.searchIcon}>
          <FaSearch />
        </span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search Chat"
        />
      </div>
      <ChatList chats={sampleChats} setIsChatClicked={setIsChatClicked} />{" "}
    </div>
  );
};

export default ChatLists;
