 import React from 'react';
 
 export default function Card({children}:{children:React.ReactNode}) {
    const cardStyle='bg-white p-6 rounded-lg shadow-md border border-gray-200';

   return (
     <div className={cardStyle}>
       {children}
     
     </div>
     
   );
 }
 