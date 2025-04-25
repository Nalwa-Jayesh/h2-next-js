import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  progress?: number; // percent (0-100)
  progressColor?: string;
  circleSize?: number;
} 

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
  title,
  progress,
  progressColor = "#279DD4",
  circleSize = 148,
}) => {
  // Responsive sizing (optional: can be customized further)
  const radius = (circleSize - 14.8) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = Math.max(0, Math.min(progress ?? 0, 100));
  const offset = circumference - (progressValue / 100) * circumference;

  return (
    <div
      className={`dashboard-card ${className}`}
      style={{
        background: "#fff",
        border: "1px solid #EAECF0",
        boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        borderRadius: 12,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 24,
        gap: 24,
        ...style,
      }}
    >
      {title && (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <div style={{ fontWeight: 600, fontSize: 16, lineHeight: "24px", textAlign: "center", color: "#000", fontFamily: 'Inter, sans-serif' }}>{title}</div>
          {typeof progress === "number" && (
            <div style={{ position: "relative", width: circleSize, height: circleSize }}>
              <svg width={circleSize} height={circleSize}>
                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  stroke="#EAECF0"
                  strokeWidth={14.8}
                  fill="none"
                />
                <circle
                  cx={circleSize / 2}
                  cy={circleSize / 2}
                  r={radius}
                  stroke={progressColor}
                  strokeWidth={14.8}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.5s", transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
              </svg>
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  fontSize: 22.2,
                  color: "#101828",
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                {progress}%
              </div>
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
