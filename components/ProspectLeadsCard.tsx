import React from "react";
import styles from "./ProspectLeadsCard.module.css";

const leads = [
  {
    name: "Wade Warren",
    stage: "Initial Inquiry",
    avatar: "/images/avatars/wade.png",
  },
  {
    name: "Ava Wright",
    stage: "Initial Inquiry",
    avatar: "/images/avatars/ava.png",
  },
  {
    name: "Cody Fisher",
    stage: "Initial Inquiry",
    avatar: "/images/avatars/cody.png",
  },
];

const ProspectLeadsCard: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>Prospect Leads</div>
      <div className={styles.leadsList}>
        {leads.map((lead, idx) => (
          <div className={styles.leadRow} key={idx}>
            <div className={styles.leadInfo}>
              <img className={styles.avatar} src={lead.avatar} alt={lead.name} />
              <span className={styles.leadName}>{lead.name}</span>
            </div>
            <span className={styles.leadStage}>Stage: {lead.stage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProspectLeadsCard;
