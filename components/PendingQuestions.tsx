import React from "react";
import styles from "./PendingQuestions.module.css";

// Sample data for pending questions
const questions = [
  {
    id: 1,
    user: {
      name: "Phoenix Baker",
      username: "@phoenix",
      avatar: "/images/avatars/phoenix.png"
    },
    question: "What are the requirements for opening a new store?",
    time: "5min ago",
    status: "online"
  },
  {
    id: 2,
    user: {
      name: "Koray Okumus",
      username: "@koray",
      avatar: "/images/avatars/koray.png"
    },
    question: "How do I manage inventory effectively?",
    time: "4hr ago",
    status: "online"
  }
];

const PendingQuestions: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardHeader}>
        <div className={styles.content}>
          <div className={styles.textAndBadge}>
            <h2 className={styles.title}>Pending Questions</h2>
            <div className={styles.badge}>
              <span className={styles.badgeText}>02</span>
            </div>
          </div>
        </div>
      </div>
      
      {questions.map((item) => (
        <div key={item.id} className={styles.message}>
          <div className={styles.avatarAndTime}>
            <div className={styles.avatarAndDot}>
              <div className={styles.dot}></div>
              <div className={styles.avatarLabelGroup}>
                <div className={styles.avatar}>
                  <img src={item.user.avatar} alt={item.user.name} />
                  <div className={styles.onlineIndicator}></div>
                </div>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.userName}>{item.user.name}</div>
                  <div className={styles.userHandle}>{item.user.username}</div>
                </div>
              </div>
            </div>
            <div className={styles.time}>{item.time}</div>
          </div>
          <div className={styles.messagePreviewWrap}>
            <p className={styles.messagePreview}>{item.question}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendingQuestions; 