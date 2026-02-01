import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme'
import { ToastProvider } from '@/components/ui/Toast'
import Header from '@/components/layout/Header'
import PageTransition from '@/components/layout/PageTransition'

/**
 * T009: Configure Outfit font (Premium, Geometric)
 * All weights from 300-900 for modern typography
 */
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Task Agent Pro - Advanced Todo Management',
  description: 'An intelligent, professional-grade task management solution',
}

/**
 * T014: Root layout wrapping children with ThemeProvider
 * ThemeProvider manages theme detection, persistence, and class toggling
 * T077: ToastProvider for toast notifications
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} bg-background text-textPrimary flex flex-col min-h-screen`}>
        <ThemeProvider>
          <ToastProvider>
            <Header />
              <main className="flex flex-col flex-1 min-h-screen">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
