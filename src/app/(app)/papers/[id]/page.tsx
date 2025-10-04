import { notFound } from 'next/navigation';
import { papers } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Eye, BotMessageSquare } from 'lucide-react';
import Link from 'next/link';

type PaperDetailPageProps = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return papers.map((paper) => ({
    id: paper.id,
  }));
}

export default function PaperDetailPage({ params }: PaperDetailPageProps) {
  const paper = papers.find((p) => p.id === params.id);

  if (!paper) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {paper.title}
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <span>{paper.authors.join(', ')}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>{new Date(paper.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-8">
        <Button onClick={() => window.print()}>
          <Eye />
          View PDF
        </Button>
        <Button asChild variant="outline">
          <Link href={`/chatbot?paperId=${paper.id}`}>
            <BotMessageSquare />
            Ask AI about this paper
          </Link>
        </Button>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-foreground/90">
        <h2 className="font-headline text-2xl font-semibold border-b border-border pb-2">Summary</h2>
        <p>{paper.summary}</p>
        <h2 className="font-headline text-2xl font-semibold border-b border-border pb-2 mt-8">Full Paper</h2>
        <div className="whitespace-pre-wrap">{paper.content}</div>
      </div>
    </article>
  );
}
