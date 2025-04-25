import React from "react";
import AccountProgressCard from "./AccountProgressCard";
import OnboardingStack from "./OnboardingStack";
import InsightsStack from "./InsightsStack";
import FinancialWellbeingCard from "./FinancialWellbeingCard";
import ProspectLeadsCard from "./ProspectLeadsCard";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container" style={{ padding: '40px 32px' }}>
      {/* Top section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        width: '100%',
        maxWidth: 1128,
        marginBottom: 20,
        alignItems: 'stretch',
        height: 650
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <AccountProgressCard />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <OnboardingStack />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <InsightsStack />
        </div>
      </div>

      {/* Bottom section */}

    </div>
  );
};

export default Dashboard;
