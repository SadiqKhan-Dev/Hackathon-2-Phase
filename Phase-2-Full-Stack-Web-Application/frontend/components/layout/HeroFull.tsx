"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroFull() {
  return (
    <header className="min-h-[calc(100vh-80px)] relative flex items-center justify-center text-center overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-3xl animate-blob" />
        <div className="absolute right-[-8rem] bottom-0 w-96 h-96 rounded-full bg-gradient-to-br from-secondary to-primary opacity-15 blur-3xl animate-blob" style={{ animationDelay: '1.2s' }} />
      </div>

      <motion.div
        className="z-10 max-w-4xl px-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-accent text-primary text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Next-Gen Productivity Platform
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-textPrimary mb-6">
          Transform Your
          <br />
          Workflow Forever.
        </h1>

        <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10">
          Experience unprecedented productivity with our revolutionary task management system:
          intelligent automation, intuitive design, and powerful analytics—all in one platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/auth/sign-up">
            <Button variant="primary" size="lg" className="rounded-lg px-8 py-6 text-base">
              Start Free Trial
            </Button>
          </Link>

          <Link href="/dashboard">
            <Button variant="secondary" size="lg" className="rounded-lg px-8 py-6 text-base">
              Live Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
