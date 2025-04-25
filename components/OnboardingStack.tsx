import React from "react";
import OnboardingCard from "./OnboardingCard";
import FinancialWellbeingCard from "./FinancialWellbeingCard";

const OnboardingStack: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, alignSelf: 'stretch' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}><OnboardingCard /></div>
      <div style={{ display: 'flex', flexDirection: 'column' }}><FinancialWellbeingCard /></div>
    </div>
  );
};

export default OnboardingStack;
