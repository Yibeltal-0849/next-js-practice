// import Card from '@/app/components/card';
// import React from 'react';

// export default function UserAnalytics () {
//   return (
//     <>
//       <Card>User analytics</Card>
//     </>
//   ); 
// }

import React from 'react';

export default function UserAnalytics() {
  return (
    <div>
      <p className="text-green-600 font-medium">Total Users: 1,234</p>
      <p className="text-sm text-gray-500">↑ 12% from last month</p>
      <div className="mt-2">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 w-3/4"></div>
        </div>
      </div>
    </div>
  );
}