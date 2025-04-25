import React from "react";
import Card from "./Card";
import styles from "./AccountProgressCard.module.css";

const completedSteps = [
  "Profile Setup",
  "Initial Training",
  "Legal Documents",
];
const remainingSteps = [
  "Financial Integration",
  "Final Review",
];

const AccountProgressCard: React.FC = () => {
  return (
    <Card
      className={styles.card}
      title="Account Progress"
      progress={85}
      progressColor="#279DD4"
      circleSize={148}
      style={{ display: 'flex', flexDirection: 'column', minHeight: 590 }}
    >
      <div className={styles.progressSection} style={{ flex: '0 0 auto' }}>
        {/* Progress circle and heading here */}
      </div>
      
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '16px'
      }}>
        {/* Steps Completed */}
        <div style={{ 
          width: '100%', 
          padding: '12px 16px', 
          background: '#F6F7FB', 
          borderRadius: '8px',
          boxSizing: 'border-box',
          marginBottom: '10px'
        }}>
          <div style={{ 
            fontWeight: 600, 
            fontSize: '16px', 
            lineHeight: '24px', 
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Steps Completed
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {completedSteps.map((step) => (
              <div 
                key={step} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: '100%',
                  gap: '12px',
                  overflow: 'hidden'
                }}
              >
                <span style={{ 
                  width: '10px', 
                  height: '10px', 
                  background: '#D9D9D9', 
                  borderRadius: '50%', 
                  flexShrink: 0 
                }} />
                <span style={{ 
                  flex: '1', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#455468',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {step}
                </span>
                <span style={{ 
                  width: '16px', 
                  height: '16px', 
                  background: 'rgba(10, 153, 82, 0.15)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#0A9952" fillOpacity="0.15" />
                    <path d="M8.5 12.5L11 15L16 10" stroke="#0A9952" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Steps Remaining */}
        <div style={{ 
          width: '100%', 
          padding: '12px 16px', 
          background: '#F6F7FB', 
          borderRadius: '8px',
          boxSizing: 'border-box'
        }}>
          <div style={{ 
            fontWeight: 600, 
            fontSize: '16px', 
            lineHeight: '24px', 
            marginBottom: '12px',
            fontFamily: "'Inter', sans-serif"
          }}>
            Steps Remaining
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {remainingSteps.map((step) => (
              <div 
                key={step} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  width: '100%',
                  gap: '12px',
                  overflow: 'hidden'
                }}
              >
                <span style={{ 
                  width: '10px', 
                  height: '10px', 
                  background: '#D9D9D9', 
                  borderRadius: '50%', 
                  flexShrink: 0 
                }} />
                <span style={{ 
                  flex: '1', 
                  whiteSpace: 'nowrap', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#455468',
                  fontFamily: "'Inter', sans-serif"
                }}>
                  {step}
                </span>
                <span style={{ 
                  width: '16px', 
                  height: '16px', 
                  background: 'rgba(10, 153, 82, 0.25)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#0A9952" fillOpacity="0.25" />
                    <path d="M5.5 8.5L7.5 10.5L11 7" stroke="#0A9952" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AccountProgressCard;
