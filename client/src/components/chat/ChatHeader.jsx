/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaVideo, FaPhone, FaInfoCircle, FaArrowLeft } from "react-icons/fa";

import styles from "../../pages/Chat/chat.module.css";
import Drawer from "../drawer/Drawer";

const ChatHeader = ({
  screenWidth,
  selectedConversation,
  onlineUsers,
  setIsChatClicked,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInfoDrawerOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = onlineUsers.includes(selectedConversation?._id);

  const handleBackToChatList = () => {
    setIsChatClicked(false);
  };

  return (
    <>
      <div className={styles.chatHeader}>
        {/* Left Section: Avatar and Name */}
        <div className={styles.avatarName}>
          {screenWidth <= 700 && <FaArrowLeft onClick={handleBackToChatList} />}
          <img
            src={selectedConversation?.profilePicture}
            alt={`${selectedConversation?.name}'s avatar`}
            className={styles.chatHeaderAvatar}
          />
          <div className={styles.userInfo}>
            <p className={styles.chatHeaderName}>
              {screenWidth < 500
                ? selectedConversation?.name.length > 12
                  ? selectedConversation?.name.substring(0, 12) + "..."
                  : selectedConversation?.name
                : selectedConversation?.name.length > 24
                ? selectedConversation?.name.substring(0, 24) + "..."
                : selectedConversation?.name}
            </p>
            <p className={styles.status}>{isActive ? "Online" : "Offline"}</p>
          </div>
        </div>

        {/* Right Section: Call Buttons */}
        <div className={styles.callButtons}>
          <button className={styles.callButton}>
            <FaPhone />
          </button>
          <button className={styles.callButton}>
            <FaVideo />
          </button>
          <button className={styles.callButton}>
            <FaInfoCircle onClick={handleInfoDrawerOpen} />
          </button>
        </div>
      </div>
      {screenWidth <= 1350 && (
        <Drawer
          isOpen={isOpen}
          handleInfoDrawerOpen={handleInfoDrawerOpen}
          setIsOpen={setIsOpen}
          selectedConversation={selectedConversation}
        />
      )}
    </>
  );
};

export default ChatHeader;
