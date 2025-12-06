import { title } from 'process'
import Link from 'next/link'
import React from 'react'
export const metadata={
  title:"Next.js",
  description:"Coed Evalution"
}
export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <Link href='/'>Home Page</Link>
    </div>
  )
}
