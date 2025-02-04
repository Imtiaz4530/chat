/* eslint-disable react/prop-types */

import { useStoreActions } from "easy-peasy";
import styles from "../../pages/Chat/chat.module.css";

const ChatList = ({
  conversation,
  time,
  message,
  setIsChatClicked,
  onlineUsers,
}) => {
  const handleChatClick = () => {
    setIsChatClicked(true);
    setSelectedConversation(conversation);
  };

  const { setSelectedConversation } = useStoreActions((action) => action.chat);

  const isActive = onlineUsers.includes(conversation?._id);

  return (
    <div className={styles.chatItem} onClick={handleChatClick}>
      {/* Avatar with online status */}
      <div className={styles.avatarContainer}>
        <img
          src={conversation?.profilePicture}
          alt={`${conversation?.name}'s avatar`}
          className={styles.avatar}
        />
        {isActive && <span className={styles.statusDot} />}
      </div>

      {/* Name, message, and time */}
      <div className={styles.details}>
        <div className={styles.header}>
          <p className={styles.name}>
            {conversation?.name.length > 14
              ? conversation?.name.substring(0, 14) + "..."
              : conversation?.name}
          </p>
          <p className={styles.time}>{time}</p>
        </div>
        <p className={styles.message}>
          {message.length > 55 ? message.substring(0, 55) + "..." : message}
        </p>
      </div>
    </div>
  );
};

export default ChatList;

// /* eslint-disable react/prop-types */

// import styles from "../../pages/Chat/chat.module.css";

// const ChatList = ({ chats, setIsChatClicked }) => {
//   const handleChatClick = () => {
//     setIsChatClicked(true);
//   };

//   return (
//     <div className={styles.chatListContainer}>
//       {chats.map((chat) => (
//         <div
//           key={chat.id}
//           className={styles.chatItem}
//           onClick={handleChatClick}
//         >
//           {/* Avatar with online status */}
//           <div className={styles.avatarContainer}>
//             <img
//               src={chat.avatar}
//               alt={`${chat.name}'s avatar`}
//               className={styles.avatar}
//             />
//             {chat.isActive && <span className={styles.statusDot} />}
//           </div>

//           {/* Name, message, and time */}
//           <div className={styles.details}>
//             <div className={styles.header}>
//               <p className={styles.name}>
//                 {chat.name.length > 25
//                   ? chat.name.substring(0, 25) + "..."
//                   : chat.name}
//               </p>
//               <p className={styles.time}>{chat?.time}</p>
//             </div>
//             <p className={styles.message}>
//               {chat.message.length > 55
//                 ? chat.message.substring(0, 55) + "..."
//                 : chat.message}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ChatList;
