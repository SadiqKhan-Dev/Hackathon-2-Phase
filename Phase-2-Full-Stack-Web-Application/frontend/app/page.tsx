"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Layout, Shield, Zap, Star, CheckCircle2 } from 'lucide-react';
import HeroFull from '@/components/layout/HeroFull';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] overflow-x-hidden bg-background">
      {/* Full-screen Landing Hero */}
      <HeroFull />
      {/* Features Grid */}
      <section className="section-horizontal section-vertical bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="h2 mb-4">Revolutionize Your Productivity</h2>
            <p className="body">Next-generation task management powered by intelligent algorithms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Smart Automation"
              description="Automatically prioritize and schedule tasks based on deadlines and importance."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Military-Grade Security"
              description="End-to-end encryption keeps your sensitive projects and data completely protected."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Insightful Analytics"
              description="Gain valuable insights into your productivity patterns and optimize performance."
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="flex -space-x-2 mb-6">
            {[1, 2, 3, 4, 5].map(i => (
            <div className="w-10 h-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-medium">
                U{i}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">+</div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Powering 50,000+ professionals globally</h3>
          <p className="text-sm text-textSecondary font-medium">Trusted by industry leaders</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CheckCircle2 className="w-4 h-4" strokeWidth={3} />
              </div>
              <h3 className="text-lg font-semibold">Task Agent Pro</h3>
            </div>
            <p className="text-sm text-textSecondary max-w-sm">
              The ultimate solution for organizing your projects and tasks. Intelligently designed,
              precision engineered.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-textPrimary">Solutions</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li><Link href="/dashboard" className="hover:text-textPrimary transition-colors">For Teams</Link></li>
              <li><Link href="/dashboard" className="hover:text-textPrimary transition-colors">Enterprise</Link></li>
              <li><Link href="/dashboard" className="hover:text-textPrimary transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-textPrimary">Resources</h4>
            <ul className="space-y-2 text-sm text-textSecondary">
              <li><Link href="/" className="hover:text-textPrimary transition-colors">Documentation</Link></li>
              <li><Link href="/" className="hover:text-textPrimary transition-colors">Support Center</Link></li>
              <li><Link href="/" className="hover:text-textPrimary transition-colors">Community</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border text-center text-xs text-textSecondary">
          &copy; 2026 Task-Agent-Pro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl p-6 border border-border bg-card hover:shadow-md transition-all duration-200 group">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-textSecondary">
        {description}
      </p>
    </div>
  );
}
