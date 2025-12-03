import React from 'react'
// this is route group layout or to give layout for some route ,not all grouped route

export default function AuthLayout({children,}:{children:React.ReactNode}) {
  return (
    <div>
      <h2>Inner layout</h2>
      {children }
    </div>
  )
}
