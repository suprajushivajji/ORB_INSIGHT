'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AppHeader() {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-colors duration-300", isLandingPage ? "bg-transparent" : "bg-background/80 backdrop-blur-sm border-b border-border")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <span className="font-headline text-xl font-semibold text-white">ORG_INSIGHT</span>
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/papers" className={cn("text-sm font-medium transition-colors text-white hover:text-primary", { "text-primary": pathname.startsWith('/papers') })}>
                Research Archive
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
