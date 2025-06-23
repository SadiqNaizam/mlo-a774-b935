import React from 'react';
import FunnelStatsGrid from '../components/Dashboard/FunnelStatsGrid';
import LeadsTrackingCard from '../components/Dashboard/LeadsTrackingCard';
import PageHeader from '../components/Dashboard/PageHeader';
import ReasonsStatsGrid from '../components/Dashboard/ReasonsStatsGrid';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * The main dashboard page for tracking leads.
 * This component composes the main layout and dashboard widgets.
 */
const DashboardPage: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-6">
        <PageHeader />
        <FunnelStatsGrid />
        <LeadsTrackingCard />
        <ReasonsStatsGrid />
      </div>
    </MainAppLayout>
  );
};

export default DashboardPage;
