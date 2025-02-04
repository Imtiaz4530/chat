/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import styles from "../../pages/Chat/chat.module.css";
import { AuthContext } from "../../context/AuthContext";
import { extractTime } from "../../../utils/extractTime";
import { FaFileDownload } from "react-icons/fa";
import axiosInstance from "../../api/axiosInstance";
import ImageDialog from "./ChatImageDialog";

const Message = ({ message }) => {
  const [openImageDialog, setOpenImageDialog] = useState(false);

  const { user } = useContext(AuthContext);

  const isOutgoing = user?.id === message?.senderId;

  const time = extractTime(message?.createdAt);

  // const handleFileDownload = async (url) => {
  //   const res = await axiosInstance.get(`/${url}`, { responseType: "blob" });

  //   const urlBlob = window.URL.createObjectURL(new Blob([res.data]));
  //   const link = document.createElement("a");
  //   link.href = urlBlob;
  //   link.setAttribute("download", url.split("/").pop());
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  //   window.URL.revokeObjectURL(urlBlob);
  // };

  const handleFileDownload = async (url) => {
    try {
      const res = await axiosInstance.get(url, { responseType: "blob" });
      const urlBlob = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = urlBlob;
      link.setAttribute("download", url.split("/").pop());
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(urlBlob);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const handleImageClick = () => {
    setOpenImageDialog(true);
  };

  const handleImageClose = () => {
    setOpenImageDialog(false);
  };

  const renderContent = () => {
    switch (message.messageType) {
      case "text":
        return (
          <p className={styles.chat_chatMiddle_messageText}>
            {message?.content}
          </p>
        );
      case "file":
        if (message.fileUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
          return (
            <>
              <img
                src={message.fileUrl}
                alt="Sent Image"
                className={styles.chat_chatMiddle_image}
                onClick={handleImageClick}
              />

              {/* <div className="image-dialog-overlay">
                <div className="image-dialog">
                  <div className="image-dialog-icons">
                    <button
                      className="icon-btn"
                      onClick={() => handleFileDownload(message.fileUrl)}
                    >
                      <FaDownload />
                    </button>
                    <button className="icon-btn">
                      <FaTimes />
                    </button>
                  </div>

                  <img
                    src={`http://localhost:5000/${message.fileUrl}`}
                    alt="Enlarged"
                    className="image-dialog-img"
                  />
                </div>
              </div> */}
              <ImageDialog
                message={message}
                handleFileDownload={handleFileDownload}
                open={openImageDialog}
                handleClose={handleImageClose}
              />
            </>
          );
        }

        return (
          <div className={styles.chat_chatMiddle_messageFileContainer}>
            <button className={styles.chat_chatMiddle_fileDownloadBTN}>
              <FaFileDownload />
            </button>
            <p className={styles.chat_chatMiddle_filename}>
              {message.fileUrl.split("/").pop()}
            </p>
          </div>
        );
      default:
        return <h3>Unsupported message type.</h3>;
    }
  };

  return (
    <div
      className={`${styles.chat_chatMiddle_message} ${
        isOutgoing
          ? styles.chat_chatMiddle_outgoing
          : styles.chat_chatMiddle_incoming
      }`}
    >
      {renderContent()}
      <p className={styles.chat_chatMiddle_time}>{time}</p>
    </div>
  );
};

export default Message;
