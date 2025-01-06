import { useState } from "react";
import { FaPlus, FaImage, FaRegThumbsUp } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

import styles from "../../pages/Chat/chat.module.css";

const ChatBottom = () => {
  const [input, setInput] = useState("");

  return (
    <div className={styles.chat_chatBottom_container}>
      <div className={styles.chat_chatBottom_left}>
        <FaPlus className={styles.chat_chatBottom_icon} />
        <FaImage className={styles.chat_chatBottom_icon} />
      </div>

      <input
        type="text"
        className={styles.chat_chatBottom_input}
        placeholder="Aa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input ? (
        <RiSendPlane2Fill className={styles.chat_chatBottom_like} />
      ) : (
        <FaRegThumbsUp className={styles.chat_chatBottom_like} />
      )}
    </div>
  );
};

export default ChatBottom;
