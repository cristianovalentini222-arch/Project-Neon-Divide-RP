"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neon-purple/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className="text-lg font-semibold tracking-wide text-neon-purple text-glow-purple leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              NEON DIVIDE
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
              RolePlay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              Home
            </Link>
            <Link
              href="/candidatura"
              className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
            >
              Candidature
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-neon-purple"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-neon-purple/20 py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/candidatura"
                className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Candidature
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
