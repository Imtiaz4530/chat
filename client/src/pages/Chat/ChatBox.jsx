import { useEffect, useState } from "react";
import Chat from "../../components/chat/Chat";
import ChatInfo from "../../components/chat/ChatInfo";
import ChatLists from "../../components/chat/ChatLists";

import styles from "./chat.module.css";
import { useStoreState } from "easy-peasy";
import NoChat from "../../components/chat/NoChat";

const ChatBox = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isChatClicked, setIsChatClicked] = useState(false);

  const { selectedConversation } = useStoreState((state) => state.chat);

  const { onlineUsers } = useStoreState((state) => state.socket);

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
        onlineUsers={onlineUsers}
      />

      {!selectedConversation ? (
        screenWidth > 700 && <NoChat />
      ) : (
        <>
          <Chat
            screenWidth={screenWidth}
            isChatClicked={isChatClicked}
            selectedConversation={selectedConversation}
            onlineUsers={onlineUsers}
            setIsChatClicked={setIsChatClicked}
          />

          {screenWidth > 1350 && (
            <ChatInfo selectedConversation={selectedConversation} />
          )}
        </>
      )}
    </div>
  );
};

export default ChatBox;
