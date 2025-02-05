/* eslint-disable react/prop-types */
import styles from "../../pages/Chat/chat.module.css";
import ChatHeader from "./ChatHeader";
import ChatMiddle from "./ChatMiddle";
import ChatBottom from "./ChatBottom";

const Chat = ({
  screenWidth,
  isChatClicked,
  selectedConversation,
  onlineUsers,
  setIsChatClicked,
}) => {
  return (
    <div
      className={styles.chatContainer}
      style={{
        display: screenWidth <= 700 && isChatClicked ? "flex" : "none",
      }}
    >
      <ChatHeader
        screenWidth={screenWidth}
        selectedConversation={selectedConversation}
        onlineUsers={onlineUsers}
        setIsChatClicked={setIsChatClicked}
      />
      <ChatMiddle />
      <ChatBottom />
    </div>
  );
};

export default Chat;
