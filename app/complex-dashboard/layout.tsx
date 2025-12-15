import React from 'react';

export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Complex Dashboard</h1>
      
      {/* Main content area */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg">
        {children}
      </div>
      
      {/* Parallel routes grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Users Analytics</h2>
          {users}
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Revenue Metrics</h2>
          {revenue}
        </div>
        
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Notifications</h2>
          {notification}
        </div>
      </div>
    </div>
  );
}