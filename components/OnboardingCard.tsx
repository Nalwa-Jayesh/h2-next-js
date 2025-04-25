import React from "react";
import styles from "./OnboardingCard.module.css";

const avatars = [
  { name: "Olivia Rhye", img: "/images/avatars/olivia.png" },
  { name: "Phoenix Baker", img: "/images/avatars/phoenix.png" },
  { name: "Lana Steiner", img: "/images/avatars/lana.png" },
  { name: "Demi Wilkinson", img: "/images/avatars/demi.png" },
  { name: "Candice Wu", img: "/images/avatars/candice.png" },
];

const OnboardingCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Total Franchisees Onboard</div>
      <div className={styles.topRow}>
        <div className={styles.valueAndBadge}>
          <span className={styles.value}>14</span>
          <span className={styles.badgeWrap}>
            <span className={styles.badge}>
              <img src="/icons/trend-up.svg" alt="trend up" className={styles.badgeIcon} />
              <span className={styles.badgeText}>7.4%</span>
            </span>
          </span>
        </div>
        <div className={styles.avatars}>
          {avatars.map((user, i) => (
            <img
              key={user.name}
              className={styles.avatar}
              src={user.img}
              alt={user.name}
              style={{ zIndex: i + 1 }}
            />
          ))}
          <img
            src="/icons/seven.svg"
            alt="plus seven badge"
            className={styles.avatar}
            style={{ zIndex: avatars.length + 2 }}
          />
        </div>
      </div>
      <div className={styles.progressBars}>
        <div className={`${styles.bar} ${styles.bar1}`}></div>
        <div className={`${styles.bar} ${styles.bar2}`}></div>
        <div className={`${styles.bar} ${styles.bar3}`}></div>
      </div>
      <div className={styles.stages}>
        <div className={styles.stageRow}>
          <div className={styles.stageDesc}>
            <span className={styles.stageDot1}></span>
            <span className={styles.stageLabel}>Stage 1 (Initial Inquiry)</span>
          </div>
          <span className={styles.stageCount}>02</span>
        </div>
        <div className={styles.stageRow}>
          <div className={styles.stageDesc}>
            <span className={styles.stageDot2}></span>
            <span className={styles.stageLabel}>Stage 2 (Document Submission)</span>
          </div>
          <span className={styles.stageCount}>07</span>
        </div>
        <div className={styles.stageRow}>
          <div className={styles.stageDesc}>
            <span className={styles.stageDot3}></span>
            <span className={styles.stageLabel}>Stage 3 (Training)</span>
          </div>
          <span className={styles.stageCount}>05</span>
        </div>
      </div>
    </div>
  );
};

export default OnboardingCard;
