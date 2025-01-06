import { useState } from "react";
import {
  FaUserCircle,
  FaSearch,
  FaPalette,
  FaSmile,
  FaEdit,
  FaImages,
  FaFileAlt,
  FaLink,
  FaBell,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { MdBlock } from "react-icons/md";

import styles from "../../pages/Chat/chat.module.css";

const ChatInfo = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className={styles.info_container}>
      {/* Avatar and Name */}
      <div className={styles.info_header}>
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className={styles.info_avatar}
        />
        <h3 className={styles.info_name}>John Doe</h3>
      </div>

      {/* Icons with Labels */}
      <div className={styles.info_icons}>
        <div className={styles.info_icon_wrapper}>
          <div className={styles.info_icon_circle}>
            <FaUserCircle className={styles.info_icon} title="Profile" />
          </div>
          <p className={styles.info_icon_label}>Profile</p>
        </div>
        <div className={styles.info_icon_wrapper}>
          <div className={styles.info_icon_circle}>
            <FaBell className={styles.info_icon} title="Mute" />
          </div>
          <p className={styles.info_icon_label}>Mute</p>
        </div>
        <div className={styles.info_icon_wrapper}>
          <div className={styles.info_icon_circle}>
            <MdBlock className={styles.info_icon} title="Block" />
          </div>
          <p className={styles.info_icon_label}>Block</p>
        </div>
        <div className={styles.info_icon_wrapper}>
          <div className={styles.info_icon_circle}>
            <FaSearch className={styles.info_icon} title="Search" />
          </div>
          <p className={styles.info_icon_label}>Search</p>
        </div>
      </div>

      {/* Dropdowns */}
      <div className={styles.info_dropdowns}>
        {/* Customize Chat */}
        <div className={styles.info_dropdown}>
          <button
            className={styles.info_dropdown_button}
            onClick={() => toggleDropdown("customizeChat")}
          >
            Customize Chat
            {activeDropdown === "customizeChat" ? (
              <FaAngleUp className={styles.info_angleDown} />
            ) : (
              <FaAngleDown className={styles.info_angleDown} />
            )}
          </button>
          {activeDropdown === "customizeChat" && (
            <div className={styles.info_dropdown_content}>
              <div className={styles.info_dropdown_item}>
                <FaPalette className={styles.info_dropdown_icon} />
                Change Theme
              </div>
              <div className={styles.info_dropdown_item}>
                <FaSmile className={styles.info_dropdown_icon} />
                Change Emoji
              </div>
              <div className={styles.info_dropdown_item}>
                <FaEdit className={styles.info_dropdown_icon} />
                Edit Nickname
              </div>
            </div>
          )}
        </div>

        {/* Media, Files, and Links */}
        <div className={styles.info_dropdown}>
          <button
            className={styles.info_dropdown_button}
            onClick={() => toggleDropdown("mediaFilesLinks")}
          >
            Media, Files, and Links
            {activeDropdown === "mediaFilesLinks" ? (
              <FaAngleUp className={styles.info_angleDown} />
            ) : (
              <FaAngleDown className={styles.info_angleDown} />
            )}
          </button>
          {activeDropdown === "mediaFilesLinks" && (
            <div className={styles.info_dropdown_content}>
              <div className={styles.info_dropdown_item}>
                <FaImages className={styles.info_dropdown_icon} />
                Media
              </div>
              <div className={styles.info_dropdown_item}>
                <FaFileAlt className={styles.info_dropdown_icon} />
                File
              </div>
              <div className={styles.info_dropdown_item}>
                <FaLink className={styles.info_dropdown_icon} />
                Link
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInfo;
