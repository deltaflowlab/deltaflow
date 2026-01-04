"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigation, siteConfig } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter">
            <span className="text-[--brand-green] text-2xl">▲</span>
            <span className="text-white">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.main.map((item) => {
            const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-xs font-mono font-medium tracking-widest uppercase transition-all duration-200",
                  isActive
                    ? "text-[--brand-green] shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                    : "text-gray-400 hover:text-white"
                )}
              >
                {item.name}
                {isActive && (
                    <motion.div 
                        layoutId="nav-pill"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[--brand-green]"
                    />
                )}
              </Link>
            )
          })}
          <div className="pl-4 border-l border-white/10">
              <Link 
                  href="/contact" 
                  className="text-xs font-mono tracking-widest uppercase text-white hover:text-[--brand-green] transition-colors"
              >
                  [ Start Project ]
              </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-black md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navigation.main.map((item) => {
                const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-mono font-medium transition-colors flex items-center justify-between group",
                      isActive
                        ? "text-[--brand-green]"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.name}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[--brand-green]" />}
                  </Link>
                )
              })}
              <Button className="w-full" asChild>
                <Link href="/contact">Start Project</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
