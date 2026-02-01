"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  userName?: string;
  pending?: number;
  onPrimaryAction?: () => void;
}

export default function Hero({ userName = 'User', pending = 0, onPrimaryAction }: HeroProps) {
  return (
    <section className="mb-12 relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-border">
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <span className="text-xs font-medium text-primary uppercase">Task Control</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-3 text-textPrimary">
            Welcome back, <span className="text-primary font-semibold">{userName}</span>
          </h1>

          <p className="text-base text-textSecondary mb-6">
            You have <span className="font-semibold text-textPrimary">{pending}</span> tasks awaiting your attention. Organize your workflow effectively.
          </p>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="lg" onClick={onPrimaryAction} className="rounded-lg h-12 text-base font-medium">
              Add New Task
            </Button>
            <Button variant="secondary" size="md" onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="rounded-lg h-10 text-sm">
              Browse All
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="w-full lg:w-80"
        >
          {/* Decorative animated SVG card */}
          <div className="rounded-xl border bg-card p-4 shadow-sm">
            <svg viewBox="0 0 320 180" className="w-full h-24" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.9" /> {/* Updated to new primary hex */}
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.6" /> {/* Updated to new accent hex */}
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#g1)" rx="8" ry="8" opacity="0.12" />
              <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1">
                <path d="M10 140 Q80 20 160 140 T310 140" strokeOpacity="0.5" />
              </g>
            </svg>

            <div className="mt-2">
              <h4 className="text-base font-medium">Task Overview</h4>
              <p className="text-xs text-textSecondary">Your productivity trends and task completion metrics.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
