import Chatbot from '@/components/Chatbot';
import { papers } from '@/lib/data';

type ChatbotPageProps = {
  searchParams: {
    paperId?: string;
  };
};

export default function ChatbotPage({ searchParams }: ChatbotPageProps) {
  const { paperId } = searchParams;
  let context = '';
  let initialMessage = "Hello! I'm AstroResearchAI. You can ask me questions about space biology and the research papers in our archive.";
  let paperTitle: string | undefined = undefined;

  if (paperId) {
    const paper = papers.find((p) => p.id === paperId);
    if (paper) {
      context = paper.content;
      paperTitle = paper.title;
      initialMessage = `You can ask me anything about the paper: "${paper.title}".`;
    } else {
        initialMessage = `I couldn't find the paper you selected. You can still ask me general questions.`
        context = papers.map(p => `Title: ${p.title}\nContent:\n${p.content}`).join('\n\n---\n\n');
    }
  } else {
    // If no specific paper is selected, use all papers as context
    context = papers.map(p => `Title: ${p.title}\nContent:\n${p.content}`).join('\n\n---\n\n');
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
        <header className="mb-4">
            <h1 className="text-3xl font-headline font-bold text-foreground sm:text-4xl">
              AI Research Assistant
            </h1>
            {paperTitle ? (
              <p className="mt-2 text-lg text-muted-foreground">
                Asking about: <span className="font-semibold text-foreground">{paperTitle}</span>
              </p>
            ) : (
                <p className="mt-2 text-lg text-muted-foreground">Ask about any paper in the archive.</p>
            )}
        </header>
        <Chatbot paperContext={context} initialMessage={initialMessage} />
    </div>
  );
}
