import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PageHeader: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <Tabs defaultValue="leads">
        <TabsList className="bg-transparent p-0">
          <TabsTrigger
            value="sales"
            className="text-md text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent pb-2 px-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Sales
          </TabsTrigger>
          <TabsTrigger
            value="leads"
            className="text-md text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent pb-2 px-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
          >
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
