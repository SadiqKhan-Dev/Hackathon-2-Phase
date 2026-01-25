'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { signIn } from '@/lib/api';
import { validateEmail } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Lock, Mail, Sparkles } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      await signIn(email, password);
      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
        <div className="border bg-card p-8 rounded-xl shadow-sm">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
            <p className="text-sm text-muted-foreground">Sign in to access your productivity workspace.</p>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-md bg-destructive/10 text-destructive text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={loading}
              fullWidth
              className="h-10 rounded-md text-sm font-medium mt-2"
            >
              Sign In
              {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link
                href="/auth/sign-up"
                className="text-primary hover:underline underline-offset-4 font-medium"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
