import { notFound } from 'next/navigation';
import { papers } from '@/lib/data';
import PaperDetailClient from '@/components/PaperDetailClient';

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

  return <PaperDetailClient paper={paper} />;
}
