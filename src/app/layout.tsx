import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import AppHeader from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BotMessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ORB_INSIGHT',
  description: 'AI-powered research assistant for space biology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <AppHeader />
        <main>{children}</main>
        <Button
          asChild
          className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
          size="icon"
        >
          <Link href="/chatbot" aria-label="AI Assistant">
            <BotMessageSquare className="h-8 w-8" />
          </Link>
        </Button>
        <Toaster />
      </body>
    </html>
  );
}
