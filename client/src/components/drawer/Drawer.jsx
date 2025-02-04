/* eslint-disable react/prop-types */
import { RiCloseFill } from "react-icons/ri";

import ChatInfo from "../chat/ChatInfo";
import styles from "./drawer.module.css";
import { useEffect, useRef } from "react";

const Drawer = ({
  isOpen,
  handleInfoDrawerOpen,
  setIsOpen,
  selectedConversation,
}) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div>
      <div
        className={`${styles.infoDrawer} ${
          isOpen ? styles.infoDrawer_open : ""
        }`}
      >
        {/* Drawer content */}
        <div ref={drawerRef} className={styles.infoDrawer_drawerContent}>
          <RiCloseFill
            className={styles.infoDrawer_closeIcon}
            onClick={handleInfoDrawerOpen}
          />
          <ChatInfo selectedConversation={selectedConversation} />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
