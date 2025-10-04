import type { ResearchPaper } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    return { url: 'https://placehold.co/600x400', hint: '' };
  }
  return { url: image.imageUrl, hint: image.imageHint };
};

export const papers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Epigenomic Regulators Elongator Complex Subunit 2 and Methyltransferase 1 Differentially Condition the Spaceflight Response in Arabidopsis',
    authors: ['Dr. Eva Rostova', 'Dr. Ben Carter'],
    publicationDate: '2023-09-10',
    summary: 'Investigates how spaceflight affects the epigenome of Arabidopsis thaliana, revealing that specific gene regulators are key to adapting to the unique environment of space.',
    content: 'This study delves into the molecular mechanisms of plant adaptation to spaceflight, focusing on the epigenetic regulators ELP2 and MTE1 in Arabidopsis thaliana. By analyzing genome-wide methylation patterns and transcriptomic data from plants grown on the ISS, we show that these regulators play differential roles in orchestrating the plant\'s response to microgravity and space radiation, impacting stress pathways and developmental processes.',
    imageUrl: findImage('paper-1').url,
    imageHint: findImage('paper-1').hint,
    pdfUrl: '#',
  },
  {
    id: '2',
    title: 'Plants grown in Apollo lunar regolith present stress-associated transcriptomes that inform prospects for lunar exploration',
    authors: ['Dr. Jian Li', 'Dr. Maria Flores'],
    publicationDate: '2023-10-22',
    summary: 'Analysis of gene expression in plants grown in lunar soil returned by Apollo missions. The results show significant stress responses but provide a framework for future lunar agriculture.',
    content: 'For the first time, we have successfully germinated and grown plants in lunar regolith. Transcriptomic analysis of Arabidopsis thaliana grown in this extraterrestrial soil reveals massive upregulation of genes associated with salt, metal, and oxidative stress. While the plants showed stunted growth, their ability to survive and establish metabolic activity offers critical insights for developing strategies to support agriculture in future lunar habitats.',
    imageUrl: findImage('paper-2').url,
    imageHint: findImage('paper-2').hint,
    pdfUrl: '#',
  },
  {
    id: '3',
    title: 'Artificial Gravity Partially Protects Space-induced Neurological Deficits in Drosophila melanogaster',
    authors: ['Dr. Alexey Volkov', 'Dr. Hanna Schmidt'],
    publicationDate: '2023-11-15',
    summary: 'Using a fruit fly model, this research demonstrates that intermittent artificial gravity can mitigate some of the negative neurological effects of spaceflight, such as impaired motor control.',
    content: 'Drosophila melanogaster subjected to microgravity on the ISS exhibit significant deficits in climbing behavior and circadian rhythm. This study utilized a centrifuge to provide variable artificial gravity. Our findings indicate that even partial gravity exposure (0.5g) for short durations can partially rescue these neurological impairments, suggesting it as a viable countermeasure for long-duration space missions.',
    imageUrl: findImage('paper-3').url,
    imageHint: findImage('paper-3').hint,
    pdfUrl: '#',
  },
  {
    id: '4',
    title: 'Spaceflight Activates Autophagy Programs and the Proteasome in Mouse Liver',
    authors: ['Dr. Sarah Jenkins'],
    publicationDate: '2023-12-01',
    summary: 'This paper reveals that spaceflight triggers cellular cleaning processes, autophagy and proteasomal activity, in the livers of mice, likely as a response to microgravity-induced stress.',
    content: 'Proteomic and transcriptomic analysis of liver tissue from mice flown on the International Space Station shows a significant upregulation of pathways related to autophagy and the ubiquitin-proteasome system. This suggests a cellular-level response to manage damaged proteins and organelles resulting from spaceflight-induced stress, providing new targets for countermeasures against liver damage during long missions.',
    imageUrl: findImage('paper-4').url,
    imageHint: findImage('paper-4').hint,
    pdfUrl: '#',
  },
  {
    id: '5',
    title: 'Vive la radiorésistance!: converging research in radiobiology and biogerontology to enhance human radioresistance for deep space exploration and colonization',
    authors: ['Dr. Jean-Pierre Monet'],
    publicationDate: '2024-01-20',
    summary: 'A review proposing that insights from the study of aging (biogerontology) can be leveraged to develop countermeasures against the health risks of cosmic radiation for astronauts.',
    content: 'Deep space exploration is limited by the health risks of galactic cosmic radiation. This review connects the molecular hallmarks of aging with the mechanisms of radiation damage. We propose that therapies targeting aging, such as senolytics and NAD+ boosters, could enhance cellular repair and stress resistance, thereby increasing human radioresistance for missions to Mars and beyond.',
    imageUrl: findImage('paper-5').url,
    imageHint: findImage('paper-5').hint,
    pdfUrl: '#',
  },
  {
    id: '6',
    title: 'Proteomic Analysis of Mouse Brain Subjected to Spaceflight',
    authors: ['Dr. Kenji Tanaka', 'Dr. Lena Petrova'],
    publicationDate: '2024-02-10',
    summary: 'A detailed proteomic map of the mouse brain after spaceflight, identifying changes in proteins related to neuroplasticity, oxidative stress, and blood-brain barrier integrity.',
    content: 'Using mass spectrometry-based proteomics, we analyzed brain tissue from mice after a 30-day mission on the ISS. We identified significant alterations in protein expression in the hippocampus and cortex, particularly proteins involved in synaptic function and mitochondrial metabolism. These changes correlate with observed cognitive and behavioral deficits and point to potential risks for astronauts.',
    imageUrl: findImage('paper-6').url,
    imageHint: findImage('paper-6').hint,
    pdfUrl: '#',
  },
  {
    id: '7',
    title: 'Transcriptomic Effects on the Mouse Heart Following 30 Days on the International Space Station',
    authors: ['Dr. Evelyn Reed', 'Dr. Aris Thorne'],
    publicationDate: '2024-03-05',
    summary: 'This study analyzes gene expression changes in the hearts of mice after a month in space, revealing shifts in metabolism and structural gene pathways indicative of cardiac deconditioning.',
    content: 'RNA-sequencing of cardiac tissue from space-flown mice revealed significant downregulation of genes related to mitochondrial energy production and upregulation of genes associated with cardiac fibrosis and muscle atrophy. These findings provide a molecular basis for the cardiac deconditioning observed in astronauts and highlight the need for effective exercise countermeasures.',
    imageUrl: findImage('paper-7').url,
    imageHint: findImage('paper-7').hint,
    pdfUrl: '#',
  },
  {
    id: '8',
    title: 'Functional Changes in the Snail Statocyst System Elicited by Microgravity',
    authors: ['Dr. Zara Vance'],
    publicationDate: '2024-04-12',
    summary: 'Investigates how the gravity-sensing organs (statocysts) of snails adapt to a microgravity environment, providing insights into vestibular system adaptation in space.',
    content: 'By recording neural activity from the statocysts of snails during parabolic flight, we observed rapid adaptation of the gravity-sensing neurons. The system recalibrates its baseline firing rate, demonstrating remarkable plasticity. This simple model helps us understand how more complex vestibular systems, like those in humans, might adapt to the absence of gravity.',
    imageUrl: findImage('paper-8').url,
    imageHint: findImage('paper-8').hint,
    pdfUrl: '#',
  },
  {
    id: '9',
    title: 'Simulated microgravity impairs human NK cell cytotoxic activity against space radiation-relevant leukemic cells',
    authors: ['Dr. Hanna Schmidt', 'Dr. Ben Carter'],
    publicationDate: '2024-05-18',
    summary: 'This research shows that simulated microgravity reduces the ability of human immune (NK) cells to kill leukemia cells, a risk heightened by space radiation exposure.',
    content: 'Human Natural Killer (NK) cells were cultured in a random positioning machine to simulate microgravity. We found that their cytotoxic function against K562 leukemia cells was significantly impaired. This immune dysfunction, coupled with the known carcinogenic risks of space radiation, highlights a critical health concern for astronauts on long-duration missions.',
    imageUrl: findImage('paper-9').url,
    imageHint: findImage('paper-9').hint,
    pdfUrl: '#',
  },
  {
    id: '10',
    title: 'Reviewing the state of biosensors and lab-on-a-chip technologies: opportunities for extreme environments and space exploration',
    authors: ['Dr. Jian Li'],
    publicationDate: '2024-06-25',
    summary: 'A review of current and emerging biosensor and "lab-on-a-chip" technologies and their potential applications for real-time health monitoring and life detection in space.',
    content: 'Miniaturized analytical devices, including electrochemical biosensors and microfluidic lab-on-a-chip systems, are critical for the future of space exploration. This review covers their application in monitoring astronaut health, analyzing water and air quality, and searching for molecular biosignatures in extraterrestrial samples. We discuss the challenges of adapting these technologies for the harsh environment of space.',
    imageUrl: findImage('paper-10').url,
    imageHint: findImage('paper-10').hint,
    pdfUrl: '#',
  }
];
