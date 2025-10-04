'use client';

import { useState } from 'react';
import { ResearchPaper } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { BotMessageSquare, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import OrbitalSpinner from './OrbitalSpinner';
import { researchSummary } from '@/ai/flows/research-summary';
import { useToast } from '@/hooks/use-toast';

type PaperDetailClientProps = {
  paper: ResearchPaper;
};

export default function PaperDetailClient({ paper }: PaperDetailClientProps) {
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState('');
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsSummarizing(true);
    setSummary('');
    try {
      const result = await researchSummary({ paperContent: paper.content });
      setSummary(result.summary);
    } catch (error) {
      console.error('Error generating summary:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate summary. Please try again.',
      });
    } finally {
      setIsSummarizing(false);
    }
  };

  return (
    <article className="max-w-4xl mx-auto py-24">
      <header className="mb-8">
        <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {paper.title}
        </h1>
        <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
          <span>{paper.authors.join(', ')}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>
            {new Date(paper.publicationDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </header>

      <div className="flex flex-wrap gap-4 mb-8">
        <Button asChild>
          <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            View PDF
          </a>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/chatbot?paperId=${paper.id}`}>
            <BotMessageSquare />
            Ask AI about this paper
          </Link>
        </Button>
        <Button variant="outline" onClick={handleSummarize} disabled={isSummarizing}>
          <Sparkles />
          Summarize using AI
        </Button>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-foreground/90 space-y-4">
        <div>
            <h2 className="font-headline text-2xl font-semibold border-b border-border pb-2">
            Summary
            </h2>
            <p>{paper.summary}</p>
        </div>

        {isSummarizing && (
          <div className="flex items-center gap-4 text-muted-foreground">
            <OrbitalSpinner />
            <p>Generating summary...</p>
          </div>
        )}

        {summary && (
           <div>
            <h2 className="font-headline text-2xl font-semibold border-b border-border pb-2">
                AI Generated Summary
            </h2>
            <p className="whitespace-pre-wrap">{summary}</p>
          </div>
        )}
      </div>
    </article>
  );
}
