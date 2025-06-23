import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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

const SidebarNav: React.FC = () => {
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
              ? 'bg-white text-primary shadow-sm'
              : 'text-gray-600 hover:bg-white/80'
          )}
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.name}
        </Button>
      </a>
    );
  };

  return (
    <aside className="w-64 flex-col bg-sidebar p-4 space-y-4 hidden lg:flex">
      <div className="flex items-center h-16 pl-2">
         <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="font-bold text-white text-sm">BO</span>
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
    </aside>
  );
};

export default SidebarNav;
