"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Menu, X, User, Settings, LogOut, BarChart3, BookOpen, Target } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would come from your auth context
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: null },
    { name: "Dashboard", href: "/dashboard", icon: BarChart3, protected: true },
    { name: "Assessment", href: "/assessment", icon: Target, protected: true },
    { name: "Roadmap", href: "/roadmap", icon: BookOpen, protected: true },
    { name: "About", href: "/about", icon: null },
    { name: "Contact", href: "/contact", icon: null },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 backdrop-blur-sm" style={{ backgroundColor: "#301B3F" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#3C415C" }}
            >
              <Brain className="w-6 h-6" style={{ color: "#B4A5A5" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#B4A5A5" }}>
                CareerSync AI
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              if (item.protected && !isLoggedIn) return null
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                  style={isActive(item.href) ? { backgroundColor: "#3C415C" } : {}}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="border-green-500 text-green-300">
                  <User className="w-3 h-3 mr-1" />
                  Student
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="text-white" style={{ backgroundColor: "#3C415C" }}>
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="space-y-2">
              {navItems.map((item) => {
                if (item.protected && !isLoggedIn) return null
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                    style={isActive(item.href) ? { backgroundColor: "#3C415C" } : {}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
              {isLoggedIn ? (
                <>
                  <div className="px-3 py-2">
                    <Badge variant="outline" className="border-green-500 text-green-300">
                      <User className="w-3 h-3 mr-1" />
                      Student Account
                    </Badge>
                  </div>
                  <Button variant="ghost" className="w-full justify-start text-gray-300 hover:text-white">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white"
                    onClick={() => {
                      setIsLoggedIn(false)
                      setIsMenuOpen(false)
                    }}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/signin">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: "#3C415C" }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
