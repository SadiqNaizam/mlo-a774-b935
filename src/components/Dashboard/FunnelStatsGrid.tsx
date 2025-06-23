import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

interface FunnelStage {
  name: string;
  count: number;
  value: number;
  duration: string;
  color: string;
  tooltip?: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-rose-500' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-amber-400' },
  { name: 'In conversation', count: 50, value: 100, duration: '2 days', color: 'bg-slate-800', tooltip: 'average time on this stage' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-teal-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  fill: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, fill: '#F472B6' }, // rose-400
  { name: 'Behance', value: 1000, percentage: 40, fill: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, fill: '#2DD4BF' }, // teal-400
  { name: 'Dribbble', value: 1000, percentage: 10, fill: '#818CF8' }, // indigo-400
];

const FunnelStatsGrid: React.FC = () => {
  const totalFunnelCount = 600;

  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <Card className="xl:col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Funnel count</CardTitle>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{totalFunnelCount}</span>
              <span className="text-muted-foreground">active leads</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="w-full h-3 rounded-full flex overflow-hidden mb-6">
              {funnelData.map((stage) => (
                <div key={stage.name} className={stage.color} style={{ width: `${(stage.count / totalFunnelCount) * 100}%` }} />
              ))}
            </div>
            <div className="space-y-4 text-sm">
              {funnelData.map((stage) => (
                <div key={stage.name} className="grid grid-cols-4 gap-4 items-center">
                  <div className="flex items-center col-span-2">
                    <span className={`w-3 h-3 rounded-sm mr-3 ${stage.color}`}></span>
                    <span>{stage.name}</span>
                  </div>
                  <span className="text-muted-foreground justify-self-end">{stage.count}</span>
                  <div className="flex items-center justify-self-end gap-2">
                    <span className="text-muted-foreground">$ {stage.value}</span>
                    {stage.tooltip ? (
                       <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <span className="text-muted-foreground cursor-pointer">{stage.duration}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{stage.tooltip}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <span className="text-muted-foreground">{stage.duration}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-48 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={sourcesData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2}>
                    {sourcesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke={entry.fill} />
                    ))}
                  </Pie>
                   <RechartsTooltip formatter={(value: number) => [`$${value}`, 'Value']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 text-sm">
               {sourcesData.map((source) => (
                <div key={source.name} className="grid grid-cols-3 gap-4 items-center">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-sm mr-3" style={{ backgroundColor: source.fill }}></span>
                    <span>{source.name}</span>
                  </div>
                  <span className="text-muted-foreground justify-self-end">$ {source.value}</span>
                   <span className="text-muted-foreground justify-self-end">{source.percentage}%</span>
                </div>
              ))}
            </div>
             <div className='flex justify-end mt-2'>
               <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-muted-foreground h-auto p-1 text-xs">from leads total</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage from total leads</p>
                  </TooltipContent>
                </Tooltip>
             </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default FunnelStatsGrid;
