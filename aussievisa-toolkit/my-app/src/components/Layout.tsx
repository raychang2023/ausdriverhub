"use client";

import { useState } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/visas", label: "Visa Types" },
    { href: "/tools/pr-points-calculator", label: "Points Calculator" },
    { href: "/articles", label: "Articles" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-blue-700">
              <span className="text-2xl">🇦🇺</span>
              <span className="hidden sm:inline">AussieVisa Toolkit</span>
              <span className="sm:hidden">AVT</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <nav className="md:hidden pb-4 border-t border-gray-100 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm text-gray-600 hover:text-blue-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Visa Types</h3>
              <div className="flex flex-col gap-2">
                <Link href="/articles/189-visa-requirements-australia" className="text-sm text-gray-500 hover:text-blue-700">189 Visa</Link>
                <Link href="/articles/190-visa-requirements-australia" className="text-sm text-gray-500 hover:text-blue-700">190 Visa</Link>
                <Link href="/articles/491-visa-requirements-australia" className="text-sm text-gray-500 hover:text-blue-700">491 Visa</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tools</h3>
              <div className="flex flex-col gap-2">
                <Link href="/tools/pr-points-calculator" className="text-sm text-gray-500 hover:text-blue-700">PR Points Calculator</Link>
                <Link href="/articles" className="text-sm text-gray-500 hover:text-blue-700">Articles & Guides</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Information</h3>
              <div className="flex flex-col gap-2">
                <Link href="/resources" className="text-sm text-gray-500 hover:text-blue-700">Resources</Link>
                <Link href="/disclaimer" className="text-sm text-gray-500 hover:text-blue-700">Disclaimer</Link>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-blue-700">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">About</h3>
              <p className="text-sm text-gray-500">
                AussieVisa Toolkit provides information and tools for Australian skilled migration. We are not a registered migration agent.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} AussieVisa Toolkit. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              This website does not provide immigration advice. For professional advice, consult a registered migration agent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
