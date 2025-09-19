'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#3b82f6]">
              Personal
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-[#f59e0b] px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#f59e0b] px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-[#f59e0b] px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-[#f59e0b] px-3 py-2 text-sm font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#f59e0b] px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-600 hover:text-[#f59e0b] block px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-[#f59e0b] block px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-[#f59e0b] block px-3 py-2 text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#f59e0b] block px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="/portfolio" className="text-gray-600 hover:text-[#f59e0b] block px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}