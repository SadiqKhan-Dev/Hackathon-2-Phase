import React from 'react';
import { SkeletonCard } from '@/components/ui/SkeletonCard';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';

export default function DashboardLoading() {
  return (
    <div className="section-horizontal section-vertical max-w-7xl mx-auto">
      {/* Hero Skeleton */}
      <div className="rounded-xl p-6 border border-border bg-background shadow-sm h-36 mb-16 flex items-center justify-center">
        <LoadingSpinner size="lg" className="text-primary" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
        <div className="lg:col-span-3 rounded-2xl p-6 border border-border bg-background shadow-sm h-48" />
        <div className="rounded-2xl p-6 border border-border bg-background shadow-sm h-48" />
      </div>

      {/* Tasks Section Header Skeleton */}
      <div className="flex items-center justify-between mb-10">
        <div className="h-8 w-48 rounded-md bg-secondary" />
        <div className="h-6 w-24 rounded-full bg-secondary" />
      </div>

      {/* Todo List Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}