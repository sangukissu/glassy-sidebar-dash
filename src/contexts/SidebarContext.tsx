
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type SidebarContextType = {
  expanded: boolean;
  toggleSidebar: () => void;
  setExpanded: (expanded: boolean) => void;
  isMobile: boolean;
  mobileOpen: boolean;
  toggleMobileMenu: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(!isMobile);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setExpanded(!isMobile);
    if (isMobile) {
      setMobileOpen(false);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <SidebarContext.Provider value={{ 
      expanded, 
      toggleSidebar, 
      setExpanded, 
      isMobile,
      mobileOpen,
      toggleMobileMenu
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  
  return context;
}
