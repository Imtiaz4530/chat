/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import styles from "../../pages/Chat/chat.module.css";

const ChatMiddle = ({ chats }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div ref={chatContainerRef} className={styles.chat_chatMiddle_container}>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`${styles.chat_chatMiddle_message} ${
            chat.isOutgoing
              ? styles.chat_chatMiddle_outgoing
              : styles.chat_chatMiddle_incoming
          }`}
        >
          <p className={styles.chat_chatMiddle_messageText}>{chat.message}</p>
          <p className={styles.chat_chatMiddle_time}>{chat.time}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatMiddle;
