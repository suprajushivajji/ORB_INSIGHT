'use server';

/**
 * @fileOverview Summarizes research papers using Genkit.
 *
 * - researchSummary - A function that summarizes a given research paper.
 * - ResearchSummaryInput - The input type for the researchSummary function.
 * - ResearchSummaryOutput - The return type for the researchSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResearchSummaryInputSchema = z.object({
  paperContent: z.string().describe('The content of the research paper to summarize.'),
});
export type ResearchSummaryInput = z.infer<typeof ResearchSummaryInputSchema>;

const ResearchSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the research paper.'),
});
export type ResearchSummaryOutput = z.infer<typeof ResearchSummaryOutputSchema>;

export async function researchSummary(input: ResearchSummaryInput): Promise<ResearchSummaryOutput> {
  return researchSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'researchSummaryPrompt',
  input: {schema: ResearchSummaryInputSchema},
  output: {schema: ResearchSummaryOutputSchema},
  prompt: `You are an expert research assistant. Summarize the following research paper, focusing on the key findings and conclusions.\n\nResearch Paper Content:\n{{{paperContent}}}`, 
});

const researchSummaryFlow = ai.defineFlow(
  {
    name: 'researchSummaryFlow',
    inputSchema: ResearchSummaryInputSchema,
    outputSchema: ResearchSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
