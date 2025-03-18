
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';

const Downloads = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Downloads</h1>
        <p className="text-gray-400">Access your downloaded images here. Coming soon!</p>
        <span className="inline-block mt-2 bg-neon-blue text-white text-xs px-2 py-0.5 rounded-full font-medium">New Feature!</span>
      </div>
    </DashboardLayout>
  );
};

export default Downloads;
