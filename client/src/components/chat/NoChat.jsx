import { TiMessages } from "react-icons/ti";

import styles from "../../pages/Chat/chat.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NoChat = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={styles.noChatContainer}>
      <div className={styles.noChatContent}>
        <p>Welcome 👋 {user?.name} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages style={{ fontSize: "56px" }} />
      </div>
    </div>
  );
};

export default NoChat;
