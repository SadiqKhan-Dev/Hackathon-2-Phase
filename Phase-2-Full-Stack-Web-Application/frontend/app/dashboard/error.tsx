'use client';

import * as React from 'react';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Button } from '@/components/ui/Button';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4">
      <ErrorMessage
        title="Failed to Load Dashboard"
        description="We're sorry, but there was an issue loading your dashboard. Please try again."
      />
      <Button
        variant="primary"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="mt-6"
      >
        Try again
      </Button>
    </div>
  );
}
