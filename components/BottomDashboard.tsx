import React from "react";
import PendingQuestions from "./PendingQuestions";
import AIChatAssistant from "./AIChatAssistant";
import styles from "./BottomDashboard.module.css";

const BottomDashboard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <PendingQuestions />
      </div>
      <div className={styles.rightColumn}>
        <AIChatAssistant />
      </div>
    </div>
  );
};

export default BottomDashboard;
