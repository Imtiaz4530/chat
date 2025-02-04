/* eslint-disable react/prop-types */
import { FaDownload, FaTimes } from "react-icons/fa";

import styles from "../../pages/Chat/chat.module.css";

const ImageDialog = ({ open, handleClose, handleFileDownload, message }) => {
  if (!open) return null;

  return (
    <div className={styles.chat_chatMiddle_imageDialogOverlay}>
      <div className={styles.chat_chatMiddle_imageDialog}>
        {/* Overlay icons */}
        <div className={styles.chat_chatMiddle_imageDialogIcons}>
          <button
            className={styles.chat_chatMiddle_iconBtn}
            onClick={() => handleFileDownload(message.fileUrl)}
          >
            <FaDownload />
          </button>
          <button
            className={styles.chat_chatMiddle_iconBtn}
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>

        {/* Enlarged Image */}
        <img
          src={message.fileUrl}
          alt="Enlarged"
          className={styles.chat_chatMiddle_imageDialogImg}
        />
      </div>
    </div>
  );
};

export default ImageDialog;
