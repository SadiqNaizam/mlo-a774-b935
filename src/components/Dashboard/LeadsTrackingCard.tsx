import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface LeadsData {
  month: string;
  'Closed won': number;
  'Closed lost': number;
}

const leadsTrackingData: LeadsData[] = [
  { month: 'March', 'Closed won': 62, 'Closed lost': 68 },
  { month: 'April', 'Closed won': 18, 'Closed lost': 42 },
  { month: 'May', 'Closed won': 68, 'Closed lost': 95 },
  { month: 'June', 'Closed won': 82, 'Closed lost': 8 },
  { month: 'July', 'Closed won': 45, 'Closed lost': 48 },
  { month: 'August', 'Closed won': 92, 'Closed lost': 75 },
];

const LeadsTrackingCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex-wrap gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-lg font-semibold">Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 mt-1">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">680</span>
                <span className="text-sm text-muted-foreground">total closed</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">70</span>
                <span className="text-sm text-muted-foreground">total lost</span>
              </div>
            </div>
          </div>
          <Button variant="outline" className="h-9 self-start sm:self-center">
            <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">last 6 months</span>
            <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
        <ToggleGroup type="single" defaultValue="converted" variant="outline" className="justify-start">
          <ToggleGroupItem value="came">Leads came</ToggleGroupItem>
          <ToggleGroupItem value="converted">Leads Converted</ToggleGroupItem>
          <ToggleGroupItem value="size">Total deals size</ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={leadsTrackingData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '0.5rem', borderColor: 'hsl(var(--border))' }}
                labelStyle={{ fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="Closed won" stroke="#14b8a6" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 5, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }}/>
              <Area type="monotone" dataKey="Closed lost" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 5, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-teal-500 rounded-sm"></span>
                <span>Closed won</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-rose-500 rounded-sm"></span>
                <span>Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingCard;
