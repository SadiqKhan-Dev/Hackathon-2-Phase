"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { UserMenu } from '@/components/ui/UserMenu';
import { cn } from '@/lib/utils';
import { Layout, CheckCircle2 } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith('/auth');

  // Hide header on auth pages for a cleaner focus on the forms
  if (isAuthPage) return null;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full',
        'border-b border-border',
        'transition-all duration-200',
        'bg-background'
      )}
    >
      <div className="section-horizontal py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 transition-all duration-200 hover:opacity-80">
              <h1 className="text-xl font-bold text-textPrimary leading-none">
                Task <span className="text-primary">Agent</span> Pro
              </h1>
            </Link>

            {/* Main Nav */}
            <nav className="hidden md:flex items-center gap-1">
              <Link
                href="/"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === '/' ? "bg-accent text-textPrimary" : "text-textPrimary/70 hover:text-textPrimary hover:bg-accent/50"
                )}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === '/dashboard' ? "bg-accent text-textPrimary" : "text-textPrimary/70 hover:text-textPrimary hover:bg-accent/50"
                )}
              >
                Dashboard
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle position="header" />
            <UserMenu />

            {!pathname?.includes('/dashboard') && (
              <Link href="/dashboard" className="hidden sm:block">
                <button className="px-4 py-2 bg-primary text-background text-sm font-medium rounded-md hover:opacity-90 transition-opacity ml-2">
                  Open Dashboard
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
