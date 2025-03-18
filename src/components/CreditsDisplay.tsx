
import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CreditsDisplay() {
  return (
    <div className="flex items-center bg-white/5 rounded-md px-3 py-1.5 border border-white/10">
      <CreditCard size={16} className="text-neon-green mr-2" />
      <span className="text-sm font-semibold mr-3">Credits: 125</span>
      <Button variant="ghost" size="sm" className="p-1 h-auto hover:bg-white/10">
        <Plus size={14} />
      </Button>
    </div>
  );
}
