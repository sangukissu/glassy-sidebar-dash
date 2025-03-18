
import React, { useState } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { ChevronLeft, ChevronRight, LayoutDashboard, Image, Wand2, Settings, Download, Layers, Plus, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isNew?: boolean;
  expanded: boolean;
  onClick?: () => void;
  to?: string;
};

const NavItem = ({ icon, label, active, isNew, expanded, onClick, to = '#' }: NavItemProps) => {
  return (
    <Link 
      to={to}
      className={cn(
        'nav-item group', 
        active && 'active',
        'flex items-center px-4 py-3 cursor-pointer'
      )}
      onClick={onClick}
    >
      <div className="w-6 h-6 flex items-center justify-center relative">
        {icon}
      </div>
      
      {/* Always show label on mobile when menu is open, or on desktop when expanded */}
      {(expanded) && (
        <span className={cn('nav-label whitespace-nowrap', active ? 'text-white' : 'text-gray-400')}>
          {label}
        </span>
      )}
      
      {isNew && expanded && (
        <span className="badge-new">New!</span>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const { expanded, toggleSidebar, isMobile, mobileOpen } = useSidebar();
  const [activeItem, setActiveItem] = useState('dashboard');
  
  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
    if (isMobile) {
      // Optionally close the sidebar on mobile after clicking an item
      // toggleMobileMenu();
    }
  };
  
  if (isMobile && !mobileOpen) {
    return null;
  }
  
  return (
    <aside className={cn(
      'sidebar',
      expanded ? 'sidebar-expanded' : 'sidebar-collapsed',
      isMobile ? 'mobile-sidebar' : '',
      isMobile && 'z-50 fixed'
    )}>
      <div className="flex flex-col h-full">
        {/* Logo and toggle */}
        <div className="p-4 flex items-center justify-between">
          {expanded ? (
            <h1 className="text-xl font-bold text-gradient">AI Image Editor</h1>
          ) : (
            <div className="w-6 h-6 mx-auto">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-blue to-neon-green"></div>
            </div>
          )}
          
          {!isMobile && (
            <button 
              onClick={toggleSidebar}
              className="sidebar-trigger"
              aria-label={expanded ? 'Collapse Sidebar' : 'Expand Sidebar'}
            >
              {expanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto scrollbar-none">
          <NavItem 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={activeItem === 'dashboard'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('dashboard')}
            to="/"
          />
          <NavItem 
            icon={<Image size={20} />} 
            label="My Gallery" 
            active={activeItem === 'gallery'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('gallery')}
            to="/gallery"
          />
          <NavItem 
            icon={<Wand2 size={20} />} 
            label="AI Tools" 
            active={activeItem === 'ai-tools'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('ai-tools')}
            to="/ai-tools"
          />
          <NavItem 
            icon={<Layers size={20} />} 
            label="Templates" 
            active={activeItem === 'templates'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('templates')}
            to="/templates"
          />
          <NavItem 
            icon={<Plus size={20} />} 
            label="Create New" 
            active={activeItem === 'create'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('create')}
            to="/create"
          />
          
          {/* Separator */}
          <div className="mx-4 my-4 h-px bg-white/10" />
          
          <NavItem 
            icon={<Package size={20} />} 
            label="Extensions" 
            active={activeItem === 'extensions'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('extensions')}
            to="/extensions"
          />
          <NavItem 
            icon={<Download size={20} />} 
            label="Downloads" 
            active={activeItem === 'downloads'} 
            expanded={expanded || (isMobile && mobileOpen)}
            isNew={true}
            onClick={() => handleNavItemClick('downloads')}
            to="/downloads"
          />
          <NavItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            active={activeItem === 'settings'} 
            expanded={expanded || (isMobile && mobileOpen)}
            onClick={() => handleNavItemClick('settings')}
            to="/settings"
          />
        </nav>
        
        {/* User Profile */}
        <div className={cn(
          'border-t border-white/10 p-4', 
          expanded || (isMobile && mobileOpen) ? 'flex items-center' : 'flex flex-col items-center'
        )}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-green flex items-center justify-center">
            <span className="text-xs font-bold">JD</span>
          </div>
          
          {(expanded || (isMobile && mobileOpen)) && (
            <div className="ml-3">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Pro Account</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
