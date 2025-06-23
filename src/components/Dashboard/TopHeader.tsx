import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, CalendarDays, ChevronDown } from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 sm:px-6">
      <div className="lg:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <div className="hidden lg:block" />

      <div className="flex items-center gap-4">
        <Button variant="outline" className="h-9">
          <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">last 6 months</span>
          <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-9">
              <span>Create</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Create New</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Lead</DropdownMenuItem>
            <DropdownMenuItem>Proposal</DropdownMenuItem>
            <DropdownMenuItem>Invoice</DropdownMenuItem>
            <DropdownMenuItem>Customer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
