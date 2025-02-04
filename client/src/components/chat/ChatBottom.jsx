import { useRef, useState } from "react";
import { FaPlus, FaImage, FaRegThumbsUp } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

import styles from "../../pages/Chat/chat.module.css";
import useSendMessage from "../../hooks/chat/useSendMessage";
import axiosInstance from "../../api/axiosInstance";

const ChatBottom = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage, loadingAttachment, sendAttachment } =
    useSendMessage();

  const fileInputRef = useRef();

  const handleMessageSend = async () => {
    if (message.trim()) {
      await sendMessage(message);
      setMessage("");
    }
  };

  const handleLikeSend = async () => {
    await sendMessage("👍");
  };

  const handleAttachmentClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await axiosInstance.post(
          `/api/chats/upload-file`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.status === 200 && res.data) {
          await sendAttachment(res.data.filePath);
          fileInputRef.current.value = "";
        }
      } catch (e) {
        console.error("File upload failed:", e);
        alert("File upload failed. Please try again.");
      }
    } else {
      alert("please select the file properly.");
    }
  };

  return (
    <div className={styles.chat_chatBottom_container}>
      <div className={styles.chat_chatBottom_left}>
        <FaPlus className={styles.chat_chatBottom_icon} />
        <FaImage
          className={styles.chat_chatBottom_icon}
          onClick={handleAttachmentClick}
        />
        <input
          type="file"
          ref={fileInputRef}
          className={styles.chat_chatBottom_fileInput}
          onChange={handleFileChange}
        />
      </div>

      <input
        type="text"
        className={styles.chat_chatBottom_input}
        placeholder="Aa"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleMessageSend();
          }
        }}
      />
      {message
        ? !loading && (
            <RiSendPlane2Fill
              className={styles.chat_chatBottom_like}
              onClick={handleMessageSend}
            />
          )
        : !loading && (
            <FaRegThumbsUp
              className={styles.chat_chatBottom_like}
              onClick={handleLikeSend}
            />
          )}
    </div>
  );
};

export default ChatBottom;
