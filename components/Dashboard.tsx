import React from "react";
import AccountProgressCard from "./AccountProgressCard";
import OnboardingCard from "./OnboardingCard";
import InsightsCard from "./InsightsCard";
import FinancialWellbeingCard from "./FinancialWellbeingCard";
import ProspectLeadsCard from "./ProspectLeadsCard";
import BottomDashboard from "./BottomDashboard";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container w-full px-2 sm:px-4 py-8 flex flex-col gap-8 bg-white text-black min-h-screen">
      {/* Top section */}
      <div className="dashboard-main-row grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-5 items-stretch">
        {/* Left Column: Account Progress */}
        <div className="w-full h-full"><AccountProgressCard /></div>
        {/* Middle Column: Onboarding + Financial Wellbeing stacked, constrained height */}
        <div className="w-full h-full flex flex-col" style={{height: '100%'}}>
          <OnboardingCard />
          <div style={{paddingTop: '16px'}}>
            <FinancialWellbeingCard />
          </div>
        </div>
        {/* Right Column: Insights + Prospect Leads stacked with padding */}
        <div className="w-full h-full flex flex-col" style={{height: '100%'}}>
          <InsightsCard />
          <div style={{paddingTop: '16px'}}>
            <ProspectLeadsCard />
          </div>
        </div>
        {/* Empty cells for grid symmetry */}
        <div></div>
        <div></div>
      </div>
      {/* Bottom section */}
      <BottomDashboard />
    </div>
  );
};

export default Dashboard;
