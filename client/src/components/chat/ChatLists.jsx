/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

import styles from "../../pages/Chat/chat.module.css";
import ChatList from "./ChatList";
import useGetConversation from "../../hooks/chat/useGetConversation";

const ChatLists = ({
  setIsChatClicked,
  screenWidth,
  isChatClicked,
  onlineUsers,
}) => {
  const { loading, conversation } = useGetConversation();

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
      <div className={styles.chatListContainer}>
        {conversation &&
          conversation.map((item, index) => (
            <ChatList
              key={item._id}
              setIsChatClicked={setIsChatClicked}
              conversation={item}
              lastIdx={index === conversation.length - 1}
              isActive="true"
              time="8h ago"
              message="nothing"
              onlineUsers={onlineUsers}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatLists;
