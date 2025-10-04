import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { ResearchPaper } from '@/lib/types';

type PaperCardProps = {
  paper: ResearchPaper;
};

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <Link href={`/papers/${paper.id}`} className="group block">
      <Card className="h-full flex flex-col transition-all duration-200 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
        <CardHeader>
          <div className="aspect-[3/2] w-full overflow-hidden rounded-md mb-4">
            <Image
              src={paper.imageUrl}
              alt={paper.title}
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={paper.imageHint}
            />
          </div>
          <CardTitle className="font-headline text-xl leading-tight">
            {paper.title}
          </CardTitle>
          <CardDescription>{paper.authors.join(', ')}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">
            {paper.summary}
          </p>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground">{new Date(paper.publicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
