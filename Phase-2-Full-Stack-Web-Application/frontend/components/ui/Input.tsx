import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * T020-T023: Input Component
 * Flagship UI input with focus glow, inner shadow, and error state
 *
 * Zero third-party libraries - uses only Tailwind CSS utilities and native CSS transitions
 */

/**
 * Input component props
 * Extends standard HTML input attributes with custom props
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Input component
 *
 * @example
 * ```tsx
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="Enter your email"
 *   error={errorMessage}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <Input
 *   label="Password"
 *   type="password"
 *   helperText="Must be at least 8 characters"
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, label, helperText, leftIcon, rightIcon, disabled, ...props }, ref) => {
    const hasError = !!error;

    return (
      <div className="w-full group">
        {/* Label */}
        {label && (
          <label
            className={cn(
              'block text-sm font-medium mb-2',
              hasError
                ? 'text-danger'
                : 'text-textPrimary'
            )}
          >
            {label}
          </label>
        )}

        {/* Input wrapper for icons */}
        <div className="relative">
          {/* Left icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input field */}
          <input
            type={type}
            className={cn(
              /**
               * T020: Base input component with TypeScript interface
               */
              'flex w-full rounded-md border px-3 py-2 text-sm transition-all duration-200',
              'placeholder:text-textSecondary',
              'disabled:cursor-not-allowed disabled:opacity-50',
              // Typography
              'text-textPrimary bg-background',
              // T021: Focus glow - ring-2 ring-indigo-500/20
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              hasError
                ? 'border-danger focus-visible:border-danger focus-visible:ring-danger/30'
                : 'border-input focus-visible:border-primary focus-visible:ring-primary/30',
              leftIcon ? 'pl-9' : '',
              rightIcon ? 'pr-9' : '',
              className
            )}
            ref={ref}
            disabled={disabled}
            aria-invalid={hasError}
            aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
            {...props}
          />

          {/* Right icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-textSecondary pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {/* T023: Error state - rose-500 border and ring with clear messaging */}
        {hasError && (
          <p
            id={`${props.id}-error`}
            className="mt-1 text-sm text-danger"
            role="alert"
          >
            {error}
          </p>
        )}

        {/* Helper text */}
        {helperText && !hasError && (
          <p
            id={`${props.id}-helper`}
            className="mt-1 text-sm text-textSecondary"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
