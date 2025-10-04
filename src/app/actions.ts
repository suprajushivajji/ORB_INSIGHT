'use server';

import { researchPaperQA } from '@/ai/flows/research-paper-qa';

export async function askQuestionAction(question: string, context: string): Promise<{ success: boolean; answer?: string; error?: string }> {
  if (!question) {
    return { success: false, error: 'Question cannot be empty.' };
  }
  
  try {
    const result = await researchPaperQA({
      question: question,
      researchPaperContent: context,
    });
    return { success: true, answer: result.answer };
  } catch (error) {
    console.error('Error in researchPaperQA flow:', error);
    return { success: false, error: 'An error occurred while processing your question. Please try again.' };
  }
}
