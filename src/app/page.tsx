import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1590216797705-d36c243f606e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx2aWV3JTIwb2YlMjBlYXJ0aCUyMGFuZCUyMHNhdGVsbGl0ZXxlbnwwfHx8fDE3NTk4NDQwMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="View of Earth and satellite"
        fill
        className="object-cover -z-10 brightness-50"
      />
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-white mb-4">
          ORG_INSIGHT: The Future of Space Biology Research
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-8">
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
