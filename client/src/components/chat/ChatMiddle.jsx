/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";

import styles from "../../pages/Chat/chat.module.css";
import useGetMessages from "../../hooks/chat/useGetMessages";
import useListenMessages from "../../hooks/chat/useListenMessages";
import Message from "./Message";

const ChatMiddle = () => {
  const chatContainerRef = useRef(null);

  const { loading, messages } = useGetMessages();
  useListenMessages();

  useEffect(() => {
    if (chatContainerRef.current) {
      setTimeout(() => {
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, loading]);

  return (
    <div ref={chatContainerRef} className={styles.chat_chatMiddle_container}>
      {messages &&
        messages.map((message) => (
          <Message message={message} key={message._id} />
        ))}
    </div>
  );
};

export default ChatMiddle;
