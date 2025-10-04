'use client';

import { useState, useMemo } from 'react';
import { papers } from '@/lib/data';
import type { ResearchPaper } from '@/lib/types';
import PaperCard from '@/components/PaperCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function PapersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPapers = useMemo(() => {
    if (!searchQuery) {
      return papers;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return papers.filter((paper) => {
      return (
        paper.title.toLowerCase().includes(lowercasedQuery) ||
        paper.summary.toLowerCase().includes(lowercasedQuery) ||
        paper.authors.some((author) =>
          author.toLowerCase().includes(lowercasedQuery)
        )
      );
    });
  }, [searchQuery]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground sm:text-4xl md:text-5xl">
          Research Archive
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore the frontiers of space biology.
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by keyword, topic, or author..."
          className="pl-10 w-full max-w-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {filteredPapers.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPapers.map((paper: ResearchPaper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg font-medium">No papers found</p>
          <p className="text-muted-foreground">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  );
}
