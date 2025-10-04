import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2672&auto=format&fit=crop"
        alt="View of Earth from space"
        fill
        className="object-cover -z-10 brightness-50"
      />
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-white mb-4">
          ORB_INSIGHT: The Future of Space Biology Research
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
          Explore the frontiers of how life adapts beyond Earth. Our platform provides AI-powered access to cutting-edge research on how spaceflight affects living organisms.
        </p>
        <Button asChild size="lg">
          <Link href="/papers">
            Explore the Archive
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}
