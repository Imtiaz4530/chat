import { useEffect, useState } from "react";
import Chat from "../../components/chat/Chat";
import ChatInfo from "../../components/chat/ChatInfo";
import ChatLists from "../../components/chat/ChatLists";

import styles from "./chat.module.css";

const ChatBox = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isChatClicked, setIsChatClicked] = useState(false);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <div className={styles.container}>
      <ChatLists
        setIsChatClicked={setIsChatClicked}
        screenWidth={screenWidth}
        isChatClicked={isChatClicked}
      />

      <Chat screenWidth={screenWidth} isChatClicked={isChatClicked} />

      {screenWidth > 1350 && <ChatInfo />}
    </div>
  );
};

export default ChatBox;
