'use client' // ← Add this at the top to enable client-side rendering
import React, { Component } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// react Component by default is serverside Component
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
]



export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() // ← Fixed variable name (was pathName)
   const [input, setInput] = useState('')
  
  return (
    <><input 
  value={input} 
  onChange={(e) => setInput(e.target.value)}
  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-transparent focus:ring-4 focus:ring-gradient-to-r focus:from-blue-500 focus:to-purple-500  shadow-sm focus:shadow-lg transition-all duration-300"
/>
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className=" shadow-md py-4 px-6">
        <div className="container mx-auto flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href // ← Better comparison

            return (
              <Link
                href={link.href}
                key={link.name}
                className={`font-medium transition-colors duration-200 ${isActive
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-500'}`}
              >

                {link.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto  rounded-lg shadow-lg p-8">
          {children}
        </div>
      </main>
    </div></>
  )
}