import React from "react";
import InsightsCard from "./InsightsCard";
import ProspectLeadsCard from "./ProspectLeadsCard";

const InsightsStack: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, alignSelf: 'stretch' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}><InsightsCard /></div>
      <div style={{ display: 'flex', flexDirection: 'column' }}><ProspectLeadsCard /></div>
    </div>
  );
};

export default InsightsStack;
