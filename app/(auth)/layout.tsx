'use client' // ← Add this at the top to enable client-side rendering
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" }
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() // ← Fixed variable name (was pathName)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href // ← Better comparison
            
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          {children}
        </div>
      </main>
    </div>
  )

}