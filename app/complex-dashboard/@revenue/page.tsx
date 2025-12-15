// import Card from '@/app/components/card';
// import React from 'react';

// export default function RevenueMetrics () {
//   return (
//     <>
//       <Card>Revenue Metrics</Card> 
//     </>
//   );
// }


import React from 'react';

export default function RevenueMetrics() {
  return (
    <div>
      <p className="text-blue-600 font-medium">Revenue: $45,678</p>
      <p className="text-sm text-gray-500">↑ 8% from last month</p>
      <div className="mt-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-2/3"></div>
        </div>
      </div>
    </div>
  );
}