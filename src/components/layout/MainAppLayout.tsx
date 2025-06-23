import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children }) => {
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setMobileSidebarOpen(true);
  };

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[256px_1fr]">
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={handleMobileSidebarClose}
      />
      <div className="flex flex-col">
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 overflow-y-auto bg-background p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
