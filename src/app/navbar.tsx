"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavbarProps {
  logoSrc: string;
  logoAlt: string;
  siteName: string;
  items: NavItem[];
}

export function Navbar({ logoSrc, logoAlt, siteName, items }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={logoSrc} alt={logoAlt} width={40} height={80} className="h-10 w-auto" />
          <span className="font-heading text-lg font-bold text-gray-900 dark:text-white">
            {siteName}
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-200 hover:text-brand transition-colors"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <span aria-hidden="true">▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <ul className="absolute left-0 top-full pt-2 min-w-48">
                      <li className="bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden">
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-brand/10 hover:text-brand transition-colors"
                        >
                          {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-brand/10 hover:text-brand transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-200"
          aria-label="Menü öffnen"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <ul className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 space-y-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block py-2 font-medium text-gray-800 dark:text-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-gray-600 dark:text-gray-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
