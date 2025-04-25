import React from "react";
import styles from "./InsightsCard.module.css";

const InsightsCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Key Insights & Feedback</div>
      <div className={styles.numberBadgeRow}>
        <div className={styles.numberBlock}>
          <span className={styles.number}>10%</span>
          <span className={styles.numberLabel}>Sales Growth</span>
        </div>
        <div className={styles.badgeBlock}>
          <img className={styles.logo} src="/icons/baked-bear.svg" alt="Baked Bear Logo" />
          <div className={styles.topPerformerBadge}>
            <span className={styles.badgeText}>Top Performer</span>
          </div>
        </div>
      </div>
      <div className={styles.feedbackBlock}>
        <div className={styles.feedbackHeader}>Feedback</div>
        <div className={styles.feedbackRow}>
          <span className={styles.feedbackDot}></span>
          <span className={styles.feedbackText}>Franchisees are requesting more detailed training materials.</span>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard;
