import React from 'react'

export default function ProductDetailLayout({children,}:{children:React.ReactNode}) {
  return (
    <>
      {children}
      {/* below is nested layout that is displayed for each product in addition to header and footer*/}
      <h2>Features Products </h2>
    </>
  )
}
