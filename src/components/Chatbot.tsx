'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { askQuestionAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import OrbitalSpinner from './OrbitalSpinner';

const chatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty'),
});
type ChatInput = z.infer<typeof chatSchema>;

type Message = {
  id: number;
  role: 'user' | 'bot';
  text: string;
};

type ChatbotProps = {
  paperContext: string;
  initialMessage: string;
};

export default function Chatbot({ paperContext, initialMessage }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: initialMessage },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ChatInput>({
    resolver: zodResolver(chatSchema),
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onSubmit: SubmitHandler<ChatInput> = async (data) => {
    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      text: data.message,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    reset();

    const result = await askQuestionAction(data.message, paperContext);

    setIsLoading(false);

    if (result.success && result.answer) {
      const botMessage: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: result.answer,
      };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Something went wrong.',
      });
      // Optionally remove the user message if the call fails
      setMessages((prev) => prev.filter(m => m.id !== userMessage.id));
    }
  };
  
  return (
    <div className="flex flex-col h-full bg-card border rounded-lg overflow-hidden">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'bot' && (
                <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                  <AvatarFallback>
                    <Bot className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-md rounded-lg px-4 py-2',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                )}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
              {message.role === 'user' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback>
                    <User className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start">
              <Avatar className="w-8 h-8 bg-primary text-primary-foreground">
                <AvatarFallback>
                  <Bot className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div className="max-w-md rounded-lg px-4 py-2 bg-secondary flex items-center justify-center h-12">
                <OrbitalSpinner />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-4 border-t bg-background">
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2">
          <Input
            {...register('message')}
            placeholder="Ask a question..."
            autoComplete="off"
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="w-5 h-5" />
          </Button>
        </form>
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
      </div>
    </div>
  );
}
