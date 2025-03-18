
import React from 'react';
import Sidebar from './Sidebar';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { expanded } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className={cn(
        'main-content p-8 w-full', 
        expanded && 'main-content-expanded'
      )}>
        {children}
      </main>
      
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
    </div>
  );
}
