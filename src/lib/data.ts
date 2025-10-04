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
    content: 'The paper titled "Epigenomic Regulators Elongator Complex Subunit 2 and Methyltransferase 1 Differentially Condition the Spaceflight Response in Arabidopsis" investigates how DNA methylation and epigenetic regulation influence the physiological adaptation of Arabidopsis plants to the spaceflight environment. The elp2-5 mutant displayed impaired spaceflight adaptation, with roots failing to extend normally and overall poor plant development. The met1-7 mutant showed phenotypes more similar to the wild-type, with morphology changes akin to Col-0. Differentially expressed genes (DEGs) in spaceflight were distinct between the mutants and wild-type, indicating that disruptions in methylation pathways significantly altered spaceflight transcriptomic responses, especially in elp2-5. Spaceflight induced organ-specific DNA methylation changes, predominantly in genes related to cell wall remodeling, pathogen responses, and reactive oxygen species (ROS) signaling. Genome-wide methylation levels increased significantly in the mutants during spaceflight but remained mostly unchanged in wild-type plants. The elp2-5 mutant exhibited higher methylation levels across various DNA methylation contexts (CG, CHG, CHH) in both leaves and roots during spaceflight. The met1-7 mutant showed lower CG methylation but increased CHG and CHH methylation in leaves under spaceflight conditions. These methylation changes corresponded with large transcriptomic reprogramming, implicating epigenetic regulation as a key factor in spaceflight stress response and adaptation. Arabidopsis adaptation to spaceflight involves differential DNA methylation that varies by organ and genotype. While met1-7 disruption does not severely affect morphology or growth, it reprograms gene expression uniquely. Disruption of elp2-5 causes severe developmental defects with a strongly altered transcriptomic response, underlining the role of epigenetic regulators in plant adaptation to the spaceflight environment.',
    imageUrl: findImage('paper-1').url,
    imageHint: findImage('paper-1').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8475764/',
  },
  {
    id: '2',
    title: 'Plants grown in Apollo lunar regolith present stress-associated transcriptomes that inform prospects for lunar exploration',
    authors: ['Dr. Jian Li', 'Dr. Maria Flores'],
    publicationDate: '2023-10-22',
    summary: 'Analysis of gene expression in plants grown in lunar soil returned by Apollo missions. The results show significant stress responses but provide a framework for future lunar agriculture.',
    content: 'The paper "Plants grown in Apollo lunar regolith present stress-associated transcriptomes that inform prospects for lunar exploration" examines the growth of Arabidopsis thaliana in authentic lunar soil samples from Apollo missions 11, 12, and 17. It evaluates both plant developmental outcomes and gene expression changes to understand the adaptability of plants to lunar regolith and the implications for future lunar agriculture. All lunar regoliths supported Arabidopsis germination, indicating that the process of seedling emergence is not hampered by lunar material. Growth and development beyond the early stages were significantly stunted in lunar regolith compared to the control. Plants were slow to grow, smaller in rosette size, and some displayed severe stress morphologies. There was site-to-site variability; plants grown on Apollo 11 regolith (a more mature, weathered soil) showed the worst growth and the highest number of differentially expressed genes (DEGs), followed by Apollo 12 and then Apollo 17. Transcriptome analysis revealed that plants grown in lunar soils differentially expressed many genes associated with stress responses, especially those related to ionic stress, reactive oxygen species (ROS), salt, and metals. Around 71% of DEGs were linked to such stress pathways. Even the best-performing plants in lunar regolith displayed stress-associated gene expression compared to controls, showing that the lunar regolith is not a benign growth medium. Plants that exhibited severe growth defects had more than a thousand unique DEGs, mainly related to ROS, developmental, and physical stress. Those that managed to grow relatively normally still upregulated genes involved in salt and drought stress. Terrestrial plants can germinate and grow in lunar regolith, but growth is consistently associated with substantial stress at both morphological and transcriptomic levels.',
    imageUrl: findImage('paper-2').url,
    imageHint: findImage('paper-2').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9098553/',
  },
  {
    id: '3',
    title: 'Artificial Gravity Partially Protects Space-induced Neurological Deficits in Drosophila melanogaster',
    authors: ['Dr. Alexey Volkov', 'Dr. Hanna Schmidt'],
    publicationDate: '2023-11-15',
    summary: 'Using a fruit fly model, this research demonstrates that intermittent artificial gravity can mitigate some of the negative neurological effects of spaceflight, such as impaired motor control.',
    content: 'The paper "Artificial Gravity Partially Protects Space-induced Neurological Deficits in Drosophila melanogaster" investigates the impact of spaceflight conditions on the central nervous system (CNS) of fruit flies (Drosophila melanogaster) aboard the International Space Station (ISS), focusing on microgravity (μg) effects and evaluating artificial gravity (AG) as a countermeasure. Flies in microgravity (SFμg) on ISS exhibited increased activity inflight but showed significant postflight climbing defects, indicating nervous system impairments. Microgravity flies showed pronounced neuronal loss, glial cell alterations, oxidative damage, and increased apoptosis in brain tissues immediately postflight. Artificial gravity flies (SF1g) displayed milder or absent immediate CNS deficits compared to SFμg, suggesting partial protection by AG. Both SFμg and SF1g flies showed alterations in metabolic, oxidative stress, and synaptic transmission pathways through multi-omics analyses, with SFμg effects being more severe. Spaceflight affected mitochondrial function, oxidative phosphorylation, and metabolic pathways, leading to increased oxidative stress markers and dysregulation in synaptic proteins. Postflight aging under Earth conditions revealed progressive neuronal loss and glial phenotypes in both SF1g and SFμg, more pronounced in SFμg flies. Dopaminergic neuron counts, important for locomotion and associated with Parkinson’s disease in humans, were reduced significantly in SFμg flies. Behavioral impairments, including impaired climbing ability, correlated with these neurodegenerative changes. AG mitigated some immediate oxidative damages and brain morphological changes, but long-term effects of spaceflight stressors like ionizing radiation and elevated CO2 levels remained. Spaceflight induces CNS alterations in Drosophila, reflecting neuronal and behavioral deficits linked to microgravity and associated oxidative stress. Artificial gravity provides partial protection against some neurobehavioral and morphological deficits caused by microgravity.',
    imageUrl: findImage('paper-3').url,
    imageHint: findImage('paper-3').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10503492/',
  },
  {
    id: '4',
    title: 'Spaceflight Activates Autophagy Programs and the Proteasome in Mouse Liver',
    authors: ['Dr. Sarah Jenkins'],
    publicationDate: '2023-12-01',
    summary: 'This paper reveals that spaceflight triggers cellular cleaning processes, autophagy and proteasomal activity, in the livers of mice, likely as a response to microgravity-induced stress.',
    content: 'The paper "Spaceflight Activates Autophagy Programs and the Proteasome in Mouse Liver" studies the effects of spaceflight on liver metabolism and cellular function in mice flown aboard the Space Shuttle Atlantis for 13.5 days. Spaceflight caused significant oxidative stress in mice, evidenced by decreased glutathione levels and increased biomarkers of glutathione depletion, suggesting impaired hepatic oxidative defense. Integrated metabolomic and transcriptomic analyses revealed major changes in osmolyte concentrations and pathways related to lipid metabolism, especially glycerophospholipid and sphingolipid metabolism, likely due in part to dehydration during spaceflight. Increased aminoacyl-tRNA biosynthesis and purine metabolic pathways were found along with upregulation of genes associated with autophagy and the ubiquitin-proteasome system, indicating enhanced degradation and recycling processes. Downregulation of NFE2L2/NRF2-mediated oxidative stress response signaling was observed, suggesting reduced antioxidant defenses during spaceflight. Alterations in peroxisome and mitochondrial function were linked to redox imbalances, lipid membrane metabolism disruptions, and inflammatory signaling, including NF-κB pathway activation. Histological analysis showed early signs of liver steatosis and inflammation, potentially linked to altered choline and betaine metabolism. Evidence indicated activation of senescence programs in hepatocytes associated with mitochondrial dysfunction, oxidative stress, and impaired liver regenerative capacity. The study proposes that autophagy induction and proteasome activation represent cellular attempts to mitigate oxidative damage; however, chronic stress may overwhelm repair mechanisms, leading to liver dysfunction.',
    imageUrl: findImage('paper-4').url,
    imageHint: findImage('paper-4').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5666744/',
  },
  {
    id: '5',
    title: 'Vive la radiorésistance!: converging research in radiobiology and biogerontology to enhance human radioresistance for deep space exploration and colonization',
    authors: ['Dr. Jean-Pierre Monet'],
    publicationDate: '2024-01-20',
    summary: 'A review proposing that insights from the study of aging (biogerontology) can be leveraged to develop countermeasures against the health risks of cosmic radiation for astronauts.',
    content: 'The paper "Vive la radiorésistance!: converging research in radiobiology and biogerontology to enhance human radioresistance for deep space exploration and colonization" outlines the challenges posed by cosmic radiation in deep space missions and explores potential biotechnological strategies to enhance human resistance to radiation for long-duration space travel. Radiation causes clustered DNA damage that is challenging to repair accurately, leading to genomic instability and carcinogenesis. Cellular defense includes DNA repair pathways, antioxidants, apoptosis, and senescence mechanisms. Proposed strategies to enhance radioresistance include: Medical Selection for inherent radioresistance, Small Molecule Radioprotectors like antioxidants and geroprotectors, Gene Therapy to improve DNA repair, and Metabolic and Physiological Interventions like inducing hypostasis. This comprehensive review advocates for a multidisciplinary roadmap combining radiobiology, biogerontology, genomic medicine, and spaceflight sciences to develop effective strategies for improving human radioresistance. These advancements are critical for safe, long-term human exploration and colonization of deep space environments.',
    imageUrl: findImage('paper-5').url,
    imageHint: findImage('paper-5').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5865701/',
  },
  {
    id: '6',
    title: 'Proteomic Analysis of Mouse Brain Subjected to Spaceflight',
    authors: ['Dr. Kenji Tanaka', 'Dr. Lena Petrova'],
    publicationDate: '2024-02-10',
    summary: 'A detailed proteomic map of the mouse brain after spaceflight, identifying changes in proteins related to neuroplasticity, oxidative stress, and blood-brain barrier integrity.',
    content: 'The paper "Proteomic Analysis of Mouse Brain Subjected to Spaceflight" investigates the impact of a 13-day spaceflight on protein expression profiles in mouse brain gray and white matter. 26 proteins were significantly altered after spaceflight: 9 in white matter, 17 in gray matter. No overlap in individual proteins but overlap in functional categories related to synaptic plasticity, vesicle activity, protein/organelle transport, and metabolism. White matter changes suggested downregulation of cellular protrusion formation and cytoskeletal organization; myelin basic protein was significantly downregulated. Gray matter showed alterations in proteins involved in neurite and dendritic spine formation, synaptic vesicle cycle (exocytosis/endocytosis), mitochondrial function, and metabolism. Upregulation of proteins involved in synaptic plasticity, endocytosis, mitochondrial dynamics, and glycolysis enzymes was observed. Indicators of oxidative stress and tissue damage were present, including altered mitochondrial proteins and arginase 1, implicated in microglial activation and neuroinflammation. Spaceflight induces region-specific changes in mouse brain proteome affecting neuronal structure, synaptic plasticity, metabolism, intracellular communication, and oxidative stress mechanisms. These changes suggest potential impacts on brain structural and functional integrity relevant to astronaut health.',
    imageUrl: findImage('paper-6').url,
    imageHint: findImage('paper-6').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6337482/',
  },
  {
    id: '7',
    title: 'Transcriptomic Effects on the Mouse Heart Following 30 Days on the International Space Station',
    authors: ['Dr. Evelyn Reed', 'Dr. Aris Thorne'],
    publicationDate: '2024-03-05',
    summary: 'This study analyzes gene expression changes in the hearts of mice after a month in space, revealing shifts in metabolism and structural gene pathways indicative of cardiac deconditioning.',
    content: 'The paper "Transcriptomic Effects on the Mouse Heart Following 30 Days on the International Space Station" analyzes gene expression changes in the hearts of female C57BL/6J mice after 30 days aboard the ISS to understand cardiovascular adaptation to long-term spaceflight. A total of 1147 transcripts were significantly regulated, with 45% upregulated and 55% downregulated post-spaceflight. Upregulated pathways included MAPK, PI3K-Akt, and GPCR signaling, which promote cell survival, proliferation, cytoskeletal organization, and stress response. Spaceflight induced dysregulation of the actin cytoskeleton with downregulation of transcripts linked to actin stabilization and focal adhesion, but extracellular matrix (ECM) components were largely unaffected. Transcripts related to the cell cycle were upregulated, suggesting enhanced cell proliferation and survival mechanisms in the heart. Contrary to expectations, oxidative stress-related transcripts showed minimal changes, indicating possible acclimatization of the heart to microgravity. Cellular senescence was not significantly activated in cardiac tissue, consistent with active cell cycle and survival signaling. The heart transcriptome in mice adapts to long-duration spaceflight by activating pathways involved in cytoskeletal reorganization, cell cycle progression, and survival signaling, while oxidative stress and cellular senescence markers are minimally affected.',
    imageUrl: findImage('paper-7').url,
    imageHint: findImage('paper-7').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9953463/',
  },
  {
    id: '8',
    title: 'Functional Changes in the Snail Statocyst System Elicited by Microgravity',
    authors: ['Dr. Zara Vance'],
    publicationDate: '2024-04-12',
    summary: 'Investigates how the gravity-sensing organs (statocysts) of snails adapt to a microgravity environment, providing insights into vestibular system adaptation in space.',
    content: 'The paper "Functional Changes in the Snail Statocyst System Elicited by Microgravity" explores how microgravity influences the gravity-sensing system (statocyst) in terrestrial snails. The study focuses on behavioral, electrophysiological, and molecular responses following exposure to spaceflight conditions. Postflight snails exhibited a significantly faster body reorientation in negative gravitaxis tests, indicating enhanced orientation response after spaceflight. The neural response of the statocyst to tilt stimuli showed increased sensitivity in postflight snails. Specifically, the firing rate in response to tilt was larger after spaceflight, and the neural response became independent of tilt direction. There was an upregulation of the pedal peptide gene (HPep) in statocyst receptor neurons after spaceflight, suggesting increased activity or load on these sensory cells. The results support the idea that microgravity causes functional modifications in gravireceptors, potentially involving changes in the biomechanical properties of statoconia or neural signaling pathways. The increased neural sensitivity and altered gene expression imply that gravireceptive mechanisms are adaptable and respond to gravity changes. This research demonstrates that spaceflight enhances the sensitivity of the snail\'s statocyst\'s neural response and alters gene expression related to mechanosensation.',
    imageUrl: findImage('paper-8').url,
    imageHint: findImage('paper-8').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3066201/',
  },
  {
    id: '9',
    title: 'Simulated microgravity impairs human NK cell cytotoxic activity against space radiation-relevant leukemic cells',
    authors: ['Dr. Hanna Schmidt', 'Dr. Ben Carter'],
    publicationDate: '2024-05-18',
    summary: 'This research shows that simulated microgravity reduces the ability of human immune (NK) cells to kill leukemia cells, a risk heightened by space radiation exposure.',
    content: 'The paper "Simulated microgravity impairs human NK cell cytotoxic activity against space radiation-relevant leukemic cells" studies how microgravity (simulated on Earth) affects the function of human natural killer (NK) cells, which are critical immune cells for defending against tumors. NK cells cultured for 48 hours in simulated microgravity (sµG) showed markedly reduced cytotoxicity against both chronic myelogenous leukemia (K-562) and T-cell acute lymphoblastic leukemia (MOLT-4). When NK and target leukemia cells were both maintained continuously in sµG during the entire cytotoxicity assay, the impairment in NK killing was even more pronounced. RNA sequencing of NK cells exposed to sµG revealed significant differential expression of genes critical to NK cell function. Notably, genes that inhibit NK cytotoxicity were upregulated while genes promoting cytotoxic function were downregulated. sµG also induced gene expression changes suggestive of NK cell dedifferentiation to a more immature state. Simulated microgravity significantly impairs the cytotoxic activity of human NK cells against tumor cells, especially when microgravity exposure is maintained continuously during the immune surveillance process. This impairment likely contributes to increased cancer risk in space travelers.',
    imageUrl: findImage('paper-9').url,
    imageHint: findImage('paper-9').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11324864/',
  },
  {
    id: '10',
    title: 'Reviewing the state of biosensors and lab-on-a-chip technologies: opportunities for extreme environments and space exploration',
    authors: ['Dr. Jian Li'],
    publicationDate: '2024-06-25',
    summary: 'A review of current and emerging biosensor and "lab-on-a-chip" technologies and their potential applications for real-time health monitoring and life detection in space.',
    content: 'The paper "Mammalian and Invertebrate Models as Complementary Tools for Gaining Mechanistic Insight on Muscle Responses to Spaceflight" analyzes comparative transcriptomic data from various muscle types in mice that underwent 37 days of spaceflight along with corresponding invertebrate models (C. elegans and D. melanogaster) to better understand conserved and distinct molecular responses to microgravity and unloading. Slow-twitch (soleus) and fast-twitch (extensor digitorum longus, EDL) muscles in mice show distinct transcriptomic responses to spaceflight. EDL showed stronger growth and proliferation signals. Soleus exhibited more stress signaling, reduced immune-related genes, altered circadian rhythm, and metabolic changes indicating atrophy and remodeling. Both muscle types shared differential regulation of proliferation, circadian rhythm, immune, and neuronal signaling pathways. Invertebrate models shared select molecular responses with mammalian muscles. Spaceflight induces complex, muscle-type specific molecular responses involving stress, proliferation, circadian rhythm disruption, immune modulation, and metabolism. Integrating data from invertebrate models helps identify conserved mechanisms underlying muscle adaptation or atrophy in microgravity. This knowledge can guide development of countermeasures to protect astronaut muscle health during long-duration space missions.',
    imageUrl: findImage('paper-10').url,
    imageHint: findImage('paper-10').hint,
    pdfUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8430797/',
  }
];
