import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import {
  LayoutGrid,
  Users,
  User,
  FileText,
  Receipt,
  ShoppingBasket,
  Mail,
  Archive,
  Calendar,
  HelpCircle,
  Settings,
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
}

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

const mainNavItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutGrid, href: '#' },
  { name: 'Leads', icon: Users, href: '#' },
  { name: 'Customers', icon: User, href: '#' },
  { name: 'Proposals', icon: FileText, href: '#' },
  { name: 'Invoices', icon: Receipt, href: '#' },
  { name: 'Items', icon: ShoppingBasket, href: '#' },
  { name: 'Mail', icon: Mail, href: '#' },
  { name: 'Shoebox', icon: Archive, href: '#' },
  { name: 'Calendar', icon: Calendar, href: '#' },
];

const secondaryNavItems: NavItem[] = [
  { name: 'Help', icon: HelpCircle, href: '#' },
  { name: 'Settings', icon: Settings, href: '#' },
];

const NavigationContent: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('Dashboard');

  const NavLink: React.FC<{ item: NavItem }> = ({ item }) => {
    const isActive = activeItem === item.name;
    return (
      <a href={item.href} onClick={() => setActiveItem(item.name)}>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-base font-normal',
            isActive
              ? 'bg-white text-primary shadow-sm dark:bg-primary/10 dark:text-primary'
              : 'text-gray-600 hover:bg-white/80 dark:text-gray-400 dark:hover:bg-primary/5'
          )}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.name}
        </Button>
      </a>
    );
  };

  return (
    <div className="flex h-full flex-col p-4 space-y-4">
      <div className="flex h-16 items-center pl-2">
         <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center dark:bg-white">
            <span className="font-bold text-white text-sm dark:text-black">BO</span>
         </div>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <nav className="space-y-1">
          {mainNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>
        <nav className="space-y-1">
          {secondaryNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, onMobileClose }) => {
  return (
    <>
      <aside className="hidden w-64 flex-col bg-sidebar dark:bg-card lg:flex">
        <NavigationContent />
      </aside>
      <Sheet open={isMobileOpen} onOpenChange={onMobileClose}>
        <SheetContent side="left" className="w-64 bg-sidebar p-0 dark:bg-card">
          <NavigationContent />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
