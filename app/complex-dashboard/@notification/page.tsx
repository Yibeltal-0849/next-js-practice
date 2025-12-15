// import Card from '@/app/components/card';
// import React from 'react';

// export default function Notification() {
//   return (
//     <div>
//       <Card>Notification</Card>
//     </div>
//   );
// }

import React from 'react';

export default function Notification() {
  return (
    <div>
      <div className="flex items-center mb-2">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
        <p className="text-sm">3 new notifications</p>
      </div>
      <ul className="text-sm space-y-1">
        <li className="text-gray-600">• New user registered</li>
        <li className="text-gray-600">• Order completed</li>
        <li className="text-gray-600">• System update</li>
      </ul>
    </div>
  );
}