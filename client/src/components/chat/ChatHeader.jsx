/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaVideo, FaPhone, FaInfoCircle } from "react-icons/fa";

import styles from "../../pages/Chat/chat.module.css";
import Drawer from "../drawer/Drawer";

const ChatHeader = ({ user, screenWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInfoDrawerOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.chatHeader}>
        {/* Left Section: Avatar and Name */}
        <div className={styles.avatarName}>
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className={styles.chatHeaderAvatar}
          />
          <div className={styles.userInfo}>
            <p className={styles.chatHeaderName}>
              {user.name.length > 30
                ? user.name.substring(0, 30) + "..."
                : user.name}
            </p>
            <p className={styles.status}>
              {user.isActive ? "Online" : "Offline"}
            </p>
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
        />
      )}
    </>
  );
};

export default ChatHeader;
