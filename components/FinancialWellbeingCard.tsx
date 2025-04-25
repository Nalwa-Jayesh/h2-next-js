import React from "react";
import styles from "./FinancialWellbeingCard.module.css";

const FinancialWellbeingCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.headerRow}>
        <div className={styles.header}>Financial Wellbeing</div>
        <span className={styles.badgeWrap}>
          <span className={styles.badge}>
            <img src="/icons/trend-up.svg" alt="trend up" className={styles.badgeIcon} />
            <span className={styles.badgeText}>2.1%</span>
          </span>
        </span>
      </div>
      <div className={styles.content}>
        <div className={styles.franchiseeInfo}>
          <span className={styles.value}>20</span>
          <span className={styles.label}>Total Franchisees</span>
        </div>
      </div>
      <div className={styles.statsRow}>
        <div className={styles.statBox}>
          <span className={styles.statLabel}>Target</span>
          <span className={styles.statValue}>$500,000</span>
        </div>
        <div className={styles.statBox}>
          <span className={styles.statLabel}>Current</span>
          <span className={styles.statValue}>$450,000</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialWellbeingCard;
