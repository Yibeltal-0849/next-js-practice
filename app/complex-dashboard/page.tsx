import React from 'react';

export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <p className="text-gray-600">
        Welcome to your dashboard. Here&apos;s an overview of your application&apos;s performance.
      </p>
      <div className="mt-4 p-4 bg-blue-50 rounded">
        <p>This is the main dashboard content area.</p>
        <p className="text-sm text-gray-500 mt-2">
          The parallel routes (users, revenue, notification) are rendered below automatically.
        </p>
      </div>
    </div>
  );
}