import * as React from 'react';
import { cn } from '@/lib/utils';
import { XCircle } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  description?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'Something went wrong!',
  description = 'An unexpected error occurred. Please try again later.',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-6 text-center',
        'rounded-lg border border-danger bg-danger/10 text-danger',
        className
      )}
    >
      <XCircle className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export { ErrorMessage };
