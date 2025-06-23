import React from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ReasonData {
  percentage: string;
  reason: string;
}

interface OtherStat {
  value: string;
  label: string;
  hasInfo?: boolean;
}

const reasonsData: ReasonData[] = [
  { percentage: '40%', reason: 'The proposal is unclear' },
  { percentage: '20%', reason: 'However venture pursuit' },
  { percentage: '10%', reason: 'Other' },
  { percentage: '30%', reason: 'The proposal is unclear' },
];

const otherData: OtherStat[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true },
];

const ReasonsStatsGrid: React.FC = () => {
  return (
    <TooltipProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <section>
          <h3 className="text-lg font-semibold mb-6">Reasons of leads lost</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {reasonsData.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold">{item.percentage}</p>
                <p className="text-muted-foreground mt-1">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-6">Other data</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherData.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold">{item.value}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <p className="text-muted-foreground">{item.label}</p>
                  {item.hasInfo && (
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                         <Info className="h-4 w-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Information about inactive leads.</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
};

export default ReasonsStatsGrid;
