
import React from 'react';
import Sidebar from './Sidebar';
import { useSidebar } from '@/contexts/SidebarContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { expanded, isMobile, mobileOpen, toggleMobileMenu } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className={cn(
        'flex flex-col flex-grow transition-all duration-300 ease-out',
        !isMobile && expanded ? 'ml-[var(--sidebar-width)]' : !isMobile ? 'ml-[var(--sidebar-collapsed-width)]' : 'ml-0'
      )}>
        {/* Header with mobile menu toggle */}
        <header className="h-16 backdrop-blur-xl bg-black/40 border-b border-white/5 flex items-center px-4 sticky top-0 z-40">
          {isMobile && (
            <button 
              onClick={toggleMobileMenu}
              className="mr-4 p-2 hover:bg-white/5 rounded-md transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          )}
          <h1 className="text-xl font-bold text-gradient">AI Image Editor</h1>
        </header>
        
        <main className="p-6 flex-grow">
          {children}
        </main>
      </div>
      
      {/* Mobile overlay when sidebar is open */}
      {isMobile && mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}
      
      {/* Noise overlay */}
      <div className="noise-overlay"></div>
    </div>
  );
}
