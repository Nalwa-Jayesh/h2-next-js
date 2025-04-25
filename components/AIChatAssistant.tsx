import React from "react";
import styles from "./AIChatAssistant.module.css";

const AIChatAssistant: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <img src="/icons/logo.svg" alt="Chat Logo" className={styles.logo} />
        </div>
        
        <h2 className={styles.title}>Welcome to the AI Chat Assistant</h2>
        
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Ask your question here.." 
          />
          <button className={styles.sendButton}>
            <img src="/icons/send.svg" alt="Send" width="20" height="20" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatAssistant; 