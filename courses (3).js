// Add courses here. answer = 0-based index of the correct option.
// hy:true marks a question as high-yield (used by Cram mode). hint is optional.
const COURSES = [
  {
    id: "orgchem", name: "Organic Chemistry", tag: "Unit IX", emoji: "⚗️", color: ["#d9efec", "#b9dfe0"],
    // files: [{ name: "Unit IX slides", url: "files/unit9.pdf" }],  // optional: PDFs you upload to the repo
    topics: [
      { id: "t1", title: "Intro to Organic Chemistry", sections: [
        { id: "s1", title: "1-1 Carbon bonding",
          questions: [
            { q: "How many valence electrons does a carbon atom have?", options: ["2", "4", "6", "8"], answer: 1, hint: "Carbon is in group 14.", explain: "Carbon has 4 valence electrons, so it typically forms 4 bonds.", hy: true },
            { q: "What is the hybridization of each carbon in ethene (C2H4)?", options: ["sp", "sp2", "sp3", "sp3d"], answer: 1, hint: "Count sigma bonds plus lone pairs on one carbon.", explain: "Three sigma bonds and one pi bond means sp2, trigonal planar, about 120°.", hy: true },
            { q: "What is the approximate H-C-H bond angle in methane?", options: ["90°", "104.5°", "109.5°", "120°"], answer: 2, explain: "Methane is sp3 and tetrahedral, giving about 109.5°." }
          ],
          notes: [{ h: "Hybridization", body: "sp3: 4 sigma bonds, tetrahedral, 109.5°. sp2: 3 sigma + 1 pi, trigonal planar, 120°. sp: 2 sigma + 2 pi, linear, 180°." }]
        },
        { id: "s2", title: "1-2 Functional groups",
          questions: [
            { q: "Which functional group has a carbonyl carbon bonded to two carbon atoms?", options: ["Aldehyde", "Ketone", "Carboxylic acid", "Ester"], answer: 1, hint: "An aldehyde has at least one H on the carbonyl carbon.", explain: "A ketone is R-CO-R'.", hy: true },
            { q: "CH3CH2OH is the condensed formula of which compound?", options: ["Methanol", "Ethanol", "Acetaldehyde", "Dimethyl ether"], answer: 1, explain: "Two carbons plus an -OH group gives ethanol, an alcohol." }
          ],
          notes: [{ h: "Drawing structures", body: "Expanded shows every bond. Condensed groups atoms, e.g. CH3CH2OH. Skeletal puts a carbon at each vertex and end, with C-H bonds implied." }],
          matching: [["Alcohol", "R-OH"], ["Aldehyde", "R-CHO"], ["Ketone", "R-CO-R'"], ["Carboxylic acid", "R-COOH"], ["Ester", "R-COO-R'"], ["Amine", "R-NH2"]]
        }
      ]}
    ]
  }
  ,{
    id: "pharma", name: "Pharmacology (APMed-1)", tag: "Midterm", emoji: "💊", color: ["#e6e0fa", "#cfc4f3"],
    topics: [
      { id: "t-tox", title: "Drug Toxicity and Poisoning", sections: [
        { id: "tox1", title: "1-1 Therapeutic index and toxicity types",
          questions: [
            { q: "A drug has an ED50 of 2 mg and a TD50 of 6 mg. What is its therapeutic index?", options: ["0.33", "3", "4", "12"], answer: 1, hint: "TI = TD50 / ED50.", explain: "TI = TD50/ED50 = 6/2 = 3. A larger TI means a wider gap between effective and toxic doses.", hy: true },
            { q: "Which ratio defines the margin of safety?", options: ["LD50/ED50", "TD50/ED99", "LD1/ED99", "LD99/ED1"], answer: 2, explain: "Margin of safety = LD1/ED99. It fixes the weakness of the TI, since dose-response curves are not always parallel.", hy: true },
            { q: "Drug A has LD1/ED99 = 1 and Drug B has LD1/ED99 = 0.0002. What does this show?", options: ["Drug B is much safer than Drug A", "Both are equally safe", "Drug B is much less safe than Drug A", "Drug A has the lower ED99"], answer: 2, explain: "A tiny margin of safety means the dose that kills 1% overlaps the dose needed for 99% effect, so Drug B is far less safe." },
            { q: "Which is NOT one of the four types of therapeutic drug toxicity in the lecture?", options: ["Dose-dependent reactions", "Idiosyncratic reactions", "Drug-drug interactions", "Withdrawal reactions"], answer: 3, explain: "The four types are dose-dependent, allergic, idiosyncratic and drug-drug interactions." },
            { q: "Tardive dyskinesia from antipsychotics is an example of toxicity that depends mainly on:", options: ["A single large dose", "Duration of exposure", "IgE sensitization", "A drug-drug interaction"], answer: 1, hint: "It appears after months to years.", explain: "Dose-dependent toxicity tracks drug concentration and duration of exposure. Tardive dyskinesia is duration-dependent.", hy: true },
            { q: "Which sequence shows rising barbiturate dose effect?", options: ["Hypnosis, sedation, anesthesia, coma, death", "Sedation, hypnosis, anesthesia, coma, death", "Sedation, anesthesia, hypnosis, coma, death", "Anesthesia, sedation, hypnosis, death, coma"], answer: 1, explain: "CNS depression by barbiturates is dose-dependent: sedation, hypnosis (sleep), anesthesia, coma, death." },
            { q: "After two years on an antipsychotic, a patient shows lip-smacking and worm-like tongue movements. This is:", options: ["Acute dystonia", "Akathisia", "Pseudoparkinsonism", "Tardive dyskinesia"], answer: 3, hint: "Think of onset time.", explain: "Tardive dyskinesia has onset of months to years. Acute dystonia: hours to 5 days. Parkinsonism: 5-30 days. Akathisia: 5-60 days.", hy: true },
            { q: "In acetaminophen overdose, which metabolite causes hepatocyte necrosis?", options: ["Glucuronide conjugate", "NAPQI", "Mercapturic acid", "Sulfate conjugate"], answer: 1, hint: "Formed by CYP2E1 from about 5-9% of the dose.", explain: "About 90% is glucuronidated or sulfated. A small fraction becomes NAPQI via CYP2E1. When glutathione runs out, NAPQI causes necrosis.", hy: true }
          ],
          notes: [
            { h: "Extrapyramidal symptoms by onset", body: "Acute dystonia: hours to 5 days (spasm of tongue, neck, face, back). Parkinsonism: 5-30 days. Akathisia: 5-60 days (restlessness). Tardive dyskinesia: months to years (lip-smacking, worm-like tongue). Drug-induced dystonia is treated with benztropine or diphenhydramine." },
            { h: "Pharmacological toxicity examples", body: "CNS depression by barbiturates (dose-dependent). Tardive dyskinesia from antipsychotics (duration-dependent). Phototoxicity from tetracyclines. Genotoxic effects come from ionizing radiation, environmental chemicals and chemotherapeutic agents, and may be mutagenic or carcinogenic." }
          ]
        },
        { id: "tox2", title: "1-2 Allergic, idiosyncratic and interactions",
          questions: [
            { q: "Anaphylaxis within an hour of a drug is mediated by which antibody?", options: ["IgG or IgM", "IgE", "T cells", "Immune complexes"], answer: 1, explain: "Type I hypersensitivity is IgE-mediated and occurs within 1 hour.", hy: true },
            { q: "A patient develops serum sickness 10 days after starting a drug. Which hypersensitivity type is this?", options: ["Type I", "Type II", "Type III", "Type IV"], answer: 2, explain: "Type III is immune complex-mediated with onset of 1-3 weeks (serum sickness, SLE)." },
            { q: "Which hypersensitivity type is T-cell mediated with onset of days to weeks (rash, SJS)?", options: ["Type I", "Type IV", "Type II", "Type III"], answer: 1, explain: "Type IV is delayed, T-cell mediated, and acts through cytokines." },
            { q: "Primaquine causing hemolytic anemia in certain individuals is an example of:", options: ["Dose-dependent toxicity", "An idiosyncratic reaction", "Type I hypersensitivity", "Pharmacological toxicity"], answer: 1, explain: "Idiosyncrasy is abnormal reactivity to a chemical that is peculiar to a given individual." },
            { q: "Ranitidine can increase absorption of basic drugs such as triazolam mainly by:", options: ["Inducing CYP3A4", "Raising GI pH", "Displacing them from albumin", "Blocking P-glycoprotein"], answer: 1, explain: "H2 blockers raise GI pH, which can increase absorption of basic drugs (an absorption interaction)." },
            { q: "A second drug with higher plasma protein affinity displaces warfarin from albumin. The result is:", options: ["Less free warfarin", "More free warfarin and greater effect or toxicity", "No change in free drug", "Slower elimination only"], answer: 1, explain: "Displacement raises the free fraction of the first drug. Aspirin, barbiturates, phenytoin, sulfonamides, valproic acid and warfarin are highly protein bound.", hy: true },
            { q: "Chronic ethanol use raises acetaminophen hepatotoxicity risk mainly because ethanol:", options: ["Inhibits glucuronidation", "Induces CYP2E1, increasing NAPQI formation", "Lowers albumin", "Blocks renal excretion"], answer: 1, explain: "Ethanol is a potent inducer of CYP2E1, so more acetaminophen is converted to toxic NAPQI.", hy: true },
            { q: "Buprenorphine, used in opioid addiction, acts as a:", options: ["Pure full agonist", "High-affinity partial agonist/antagonist that blocks euphoria", "Pure antagonist", "Reuptake inhibitor"], answer: 1, explain: "It has partial agonist and antagonist activity, with very high affinity for opioid receptors, and prevents euphoria from other narcotics." },
            { q: "EDTA binding lead is which type of antagonism?", options: ["Functional", "Chemical", "Dispositional", "Receptor"], answer: 1, explain: "A chelating agent forms stable, water-soluble complexes with metal ions: chemical antagonism." },
            { q: "Activated charcoal reducing absorption of a toxicant from the gut is which type of antagonism?", options: ["Functional", "Chemical", "Dispositional", "Receptor"], answer: 2, explain: "It changes the disposition (absorption) of the toxicant, so it is dispositional antagonism." }
          ],
          matching: [["Type I", "IgE, within 1 hour, anaphylaxis"], ["Type II", "IgG or IgM cytotoxic, hours to days, hemolytic anemia"], ["Type III", "Immune complex, 1-3 weeks, serum sickness or SLE"], ["Type IV", "T-cell mediated, days to weeks, rash or SJS"]],
          notes: [{ h: "Drug-drug interaction levels", body: "Absorption, protein binding, metabolism, receptor binding, and therapeutic action (additive, synergistic, antagonistic). Antagonism can be functional/physiological, chemical, dispositional, or receptor." }]
        },
        { id: "tox3", title: "1-3 Prevention and treatment of poisoning",
          questions: [
            { q: "Medication errors are about how much more common than adverse drug reactions?", options: ["2-5x", "10-20x", "50-100x", "About equal"], answer: 2, explain: "The lecture states medication errors are 50-100x more common than adverse drug reactions." },
            { q: "Which is NOT one of the five rights of safe medication?", options: ["Right drug", "Right route", "Right time", "Right diagnosis"], answer: 3, explain: "Right drug, right patient, right dose, right route, right time." },
            { q: "Child-resistant packaging is which kind of prevention strategy?", options: ["Active, needing sustained adaptation", "Passive, needing no behavior change", "Decontamination", "Antidote therapy"], answer: 1, explain: "Passive strategies need no behavior change from the individual. Active ones require sustained adaptation.", hy: true },
            { q: "In the ABCDE approach to a poisoned patient, D stands for:", options: ["Decontamination", "Disability (assess CNS dysfunction)", "Drug level", "Dialysis"], answer: 1, explain: "Airway, Breathing, Circulation, Disability, Exposure (assess the toxidrome)." },
            { q: "For neurological disability in a poisoned adult, which are considered?", options: ["O2, dextrose, naloxone, thiamine", "Atropine, glucagon, dantrolene", "Flumazenil only", "Activated charcoal and ipecac"], answer: 0, hint: "Check pulse oximetry and blood glucose.", explain: "Consider oxygen, dextrose (check glucose), naloxone (empiric trial) and thiamine for adults receiving dextrose.", hy: true },
            { q: "What is the first step of decontamination?", options: ["Gastric lavage", "Activated charcoal", "Stop the ongoing exposure", "Cathartics"], answer: 2, explain: "Stop the exposure first, wash eyes and skin copiously, then consider GI decontamination if the poison is dangerous and still unabsorbed." },
            { q: "Which pair is the antidote set for organophosphate poisoning?", options: ["Naloxone and flumazenil", "Fomepizole and ethanol", "Atropine and pralidoxime", "Deferoxamine and glucagon"], answer: 2, explain: "Atropine blocks muscarinic effects. Pralidoxime (2-PAM) regenerates cholinesterase.", hy: true },
            { q: "Which antidote treats methanol or ethylene glycol poisoning?", options: ["Acetylcysteine", "Digoxin immune Fab", "Leucovorin", "Fomepizole or ethanol"], answer: 3, explain: "Fomepizole and ethanol both treat methanol and ethylene glycol poisoning." },
            { q: "Coumarin (warfarin-type) overdose is treated with:", options: ["Vitamin K1 (phytonadione)", "Protamine", "Dantrolene", "Pyridoxine"], answer: 0, explain: "Vitamin K1 (phytonadione) is the antidote for coumarin and indanedione." }
          ],
          matching: [["Acetylcysteine", "Acetaminophen"], ["Naloxone", "Opioids"], ["Flumazenil", "Benzodiazepines"], ["Deferoxamine", "Iron"], ["Leucovorin", "Methotrexate"], ["Glucagon", "Beta-blockers"], ["Hydroxocobalamin", "Cyanide"], ["Methylene blue", "Methemoglobinemia"], ["Pyridoxine", "Isoniazid seizures"], ["Physostigmine", "Anticholinergic syndrome"]]
        }
      ]},
      { id: "t-met", title: "Drug Metabolism", sections: [
        { id: "met1", title: "2-1 Phases, enzymes and CYPs",
          questions: [
            { q: "Which statement about phase 1 reactions is correct?", options: ["They add large polar conjugates and greatly raise solubility", "They introduce or expose functional groups, may inactivate the drug, and do little to raise water solubility", "They always make active metabolites", "They occur only in the kidney"], answer: 1, explain: "Phase 1 (oxidation, reduction, hydrolysis) adds groups such as -OH, -COOH, -SH, -O- or NH2. Phase 2 is what greatly improves water solubility.", hy: true },
            { q: "In phenytoin metabolism, which step makes the metabolite very water soluble?", options: ["CYP hydroxylation", "UGT glucuronidation", "FMO oxidation", "Epoxide hydrolysis"], answer: 1, explain: "Phenytoin (lipophilic) to 4-hydroxyphenytoin by CYP (phase 1), then to the glucuronide by UGT with UDP-GA (phase 2), which is very water soluble." },
            { q: "Which is NOT a phase 2 transferase?", options: ["SULT", "UGT", "GST", "CYP"], answer: 3, explain: "CYPs are phase 1. Phase 2 transferases include SULT, UGT, GST, NAT and methyltransferases.", hy: true },
            { q: "Which phase 1 enzyme family performs N, S and P oxidation?", options: ["CYPs", "FMOs", "Epoxide hydrolases", "NATs"], answer: 1, explain: "FMOs oxidize N, S and P. CYPs do C and O oxidation and dealkylation. EHs hydrolyze epoxides." },
            { q: "The name CYP3A4 means:", options: ["Family 3, subfamily A, gene 4", "Family A, subfamily 3, gene 4", "Gene 3, family A, subfamily 4", "Subfamily 3, family 4, gene A"], answer: 0, explain: "CYP + family number + subfamily letter + individual gene number." },
            { q: "Which single CYP metabolizes over 50% of drugs?", options: ["CYP2D6", "CYP2E1", "CYP3A4", "CYP1A2"], answer: 2, explain: "CYP3A4 handles more than half of drugs. The most active families are CYP2C, 2D and 3A.", hy: true },
            { q: "St. John's wort induces CYP3A4. What happens to a CYP3A4 substrate such as ketoconazole?", options: ["Slower metabolism, higher levels", "Faster metabolism, lower levels", "No change", "Only prodrugs are affected"], answer: 1, explain: "Induction speeds metabolism of CYP3A4 substrates, lowering their levels.", hy: true },
            { q: "Which drug is a CYP inhibitor?", options: ["Rifampin", "Phenobarbital", "Carbamazepine", "Cimetidine"], answer: 3, explain: "Inhibitors (SICKFACES.COM) include valproate, isoniazid, cimetidine, ketoconazole, fluconazole, acute alcohol, chloramphenicol, erythromycin, sulfonamides, ciprofloxacin, omeprazole, metronidazole, grapefruit juice, amiodarone, quinidine." },
            { q: "Which drug is a CYP inducer?", options: ["Ketoconazole", "Rifampin", "Erythromycin", "Omeprazole"], answer: 1, explain: "Inducers (BULLSHIT CRAP GP'S) include barbiturates, St. John's wort, carbamazepine, rifampin, chronic alcohol, phenytoin, griseofulvin, phenobarbital, sulfonylureas." },
            { q: "Anastrozole works by inhibiting which CYP?", options: ["CYP19 (aromatase)", "CYP2E1", "CYP2D6", "CYP3A4"], answer: 0, explain: "CYP19 (aromatase) converts androgens to estrogens. Anastrozole inhibits it." },
            { q: "Which statement about FMOs is correct?", options: ["Major contributors with many drug interactions", "Minor contributors with benign products and fewer interactions; FMO3 is the most abundant", "They only act on steroids", "They are phase 2 enzymes"], answer: 1, explain: "FMOs metabolize nicotine, cimetidine, ranitidine, clozapine and itopride." },
            { q: "Phase III of hepatic drug handling refers to:", options: ["Oxidation", "Conjugation", "Transport out of the cell by ABC transporters", "Receptor binding"], answer: 2, explain: "Phase I oxidation, phase II conjugation, phase III transport (ABC transporters) into urine or bile." }
          ],
          notes: [
            { h: "CYP reactions", body: "N-dealkylation, O-dealkylation, aromatic hydroxylation, N-oxidation, S-oxidation, deamination, dehalogenation. CYPs are heme proteins (heme bound noncovalently to a polypeptide) and also catalyze steroid and bile acid synthesis." }
          ]
        },
        { id: "met2", title: "2-2 Phase 2 conjugation",
          questions: [
            { q: "UGT1A1 glucuronidates which endogenous compound?", options: ["Cholesterol", "Bilirubin", "DHEA", "Dopamine"], answer: 1, explain: "UGT1A1 conjugates bilirubin. Defects cause Gilbert and Crigler-Najjar syndromes.", hy: true },
            { q: "Which donor is correctly matched to its reaction?", options: ["Glucuronidation: UDP-glucuronic acid", "Sulfation: S-adenosylmethionine", "Methylation: PAPS", "Acetylation: glutathione"], answer: 0, explain: "Sulfation uses PAPS, methylation uses S-adenosylmethionine, acetylation uses acetyl-CoA." },
            { q: "Fetal adrenal SULT2A1 produces DHEAS, which is needed for:", options: ["Placental estrogen biosynthesis in the second half of pregnancy", "Keratinocyte differentiation", "Bilirubin clearance", "Hepatic gluconeogenesis"], answer: 0, explain: "SULT2B1b in skin makes cholesterol sulfate for keratinocyte differentiation." },
            { q: "Glutathione is a tripeptide of:", options: ["Glutamate, cysteine, glycine", "Glutamate, serine, alanine", "Aspartate, cysteine, glycine", "Glycine, lysine, cysteine"], answer: 0, explain: "Gamma-glutamate, cysteine and glycine." },
            { q: "N-acetylcysteine helps in acetaminophen overdose because it:", options: ["Induces CYP2E1", "Replenishes glutathione so NAPQI is conjugated", "Blocks glucuronidation", "Chelates NAPQI in the gut"], answer: 1, explain: "NAC supplies cysteine for glutathione, which conjugates NAPQI into nontoxic metabolites.", hy: true },
            { q: "NATs metabolize drugs containing:", options: ["An aromatic amine or hydrazine group", "A carboxylic acid", "A phenol only", "An epoxide"], answer: 0, explain: "Isoniazid shows the acetylator phenotype. Its adverse effects include peripheral neuritis and hepatotoxicity.", hy: true },
            { q: "Which methyl donor is used in phase 2 methylation?", options: ["UDP-glucuronic acid", "PAPS", "S-adenosylmethionine", "Acetyl-CoA"], answer: 2, explain: "O-, N- and S-methylation use S-adenosylmethionine.", hy: true },
            { q: "COMT methylation inactivates which group of compounds?", options: ["Catecholamines", "Bilirubin", "Sulfonamides", "Steroids"], answer: 0, explain: "COMT methylates dopamine, norepinephrine and epinephrine." },
            { q: "TPMT methylates which drug (an azathioprine metabolite)?", options: ["6-Mercaptopurine", "Isoniazid", "Morphine", "Acetaminophen"], answer: 0, explain: "TPMT converts 6-mercaptopurine to 6-methylmercaptopurine." }
          ],
          matching: [["SULT", "Addition of sulfate"], ["UGT", "Addition of glucuronic acid"], ["GST", "Addition of glutathione"], ["NAT", "Addition of acetyl group"], ["Methyltransferase", "Addition of methyl group"], ["Epoxide hydrolase", "Hydrolysis of epoxides"]]
        }
      ]},
      { id: "t-aut1", title: "Autonomics Part 1: Cholinergic Pharmacology", sections: [
        { id: "aut1a", title: "3-1 ANS and acetylcholine",
          questions: [
            { q: "Which is NOT expected in anticholinergic toxicity?", options: ["Hyperthermia", "Dry skin and mucosa", "Flushed skin", "Pupillary constriction (miosis)"], answer: 3, explain: "Hot as a hare, dry as a bone, red as a beet, blind as a bat (cycloplegia), mad as a hatter (CNS)." },
            { q: "ACh is the primary transmitter at all EXCEPT:", options: ["Autonomic ganglia", "Parasympathetic postganglionic fibers", "Skeletal muscle NMJ", "Most sympathetic postganglionic fibers"], answer: 3, explain: "Most sympathetic postganglionic fibers use norepinephrine (eccrine sweat glands use ACh)." },
            { q: "Hemicholinium inhibits which step?", options: ["Choline uptake (CHT)", "Vesicular storage (VAT)", "ACh release", "ACh breakdown"], answer: 0, explain: "Hemicholinium blocks the Na+/choline symporter (CHT)." },
            { q: "Vesamicol inhibits:", options: ["ChAT", "VAT (vesicular storage)", "AChE", "SNARE proteins"], answer: 1, explain: "Vesamicol blocks the vesicle-associated transporter that loads ACh into vesicles." },
            { q: "Botulinum toxin blocks ACh release by acting on:", options: ["Choline transporter", "SNARE/VAMP proteins", "AChE", "Muscarinic receptors"], answer: 1, explain: "Ca2+ entry normally drives VAMP/SNARE-mediated release. Botulinum toxin disrupts this.", hy: true },
            { q: "AChE breaks ACh into:", options: ["Choline and acetate", "Choline and acetyl-CoA", "Tyrosine and acetate", "Glutamate and glycine"], answer: 0, explain: "Indirect-acting cholinomimetics (carbamates and organophosphates) inhibit AChE." }
          ],
          matching: [["Choline uptake", "Hemicholinium"], ["Vesicular storage", "Vesamicol"], ["Release", "Botulinum toxin"], ["Termination (AChE)", "Carbamates and organophosphates"]]
        },
        { id: "aut1b", title: "3-2 Cholinergic agonists",
          questions: [
            { q: "Methacholine is used to:", options: ["Treat urinary retention", "Trigger bronchoconstriction to diagnose asthma", "Treat Sjogren syndrome", "Reverse atropine overdose"], answer: 1, explain: "A nonselective choline ester muscarinic agonist used as an asthma challenge test." },
            { q: "A postoperative patient cannot void. Which direct muscarinic agonist helps?", options: ["Pilocarpine", "Bethanechol", "Atropine", "Edrophonium"], answer: 1, explain: "Bethanechol is used for bladder and bowel retention.", hy: true },
            { q: "Pilocarpine, selective for M3, is used for Sjogren syndrome. Its most common side effect is:", options: ["Sweating", "Bradycardia", "Constipation", "Hypertension"], answer: 0, explain: "M3 stimulation increases lacrimal and salivary secretion; sweating is the most common side effect." },
            { q: "Which agent is a bedside diagnostic for myasthenia gravis?", options: ["Edrophonium", "Neostigmine", "Pilocarpine", "Physostigmine"], answer: 0, explain: "Edrophonium is short-acting and reversible.", hy: true },
            { q: "Which AChE inhibitor enters the CNS and fixes atropine overdose?", options: ["Neostigmine", "Pyridostigmine", "Physostigmine", "Edrophonium"], answer: 2, explain: "Physostigmine crosses the blood-brain barrier. Neostigmine and pyridostigmine are used for myasthenia gravis.", hy: true },
            { q: "Parathion and malathion are:", options: ["Reversible short-acting AChE inhibitors", "Irreversible AChE inhibitors used as pesticides", "Muscarinic antagonists", "Nicotinic agonists"], answer: 1, explain: "Organophosphates (-thion) are very long-acting, irreversible inhibitors. Tabun, sarin and soman are war nerve gases." },
            { q: "Which set is the AChE inhibitors for Alzheimer dementia?", options: ["Neostigmine, edrophonium, atropine", "Rivastigmine, donepezil, galantamine", "Varenicline, nicotine", "Pilocarpine, bethanechol"], answer: 1, explain: "Alzheimer patients show a deficiency of cholinergic neurons.", hy: true },
            { q: "Succinylcholine blocks transmission by:", options: ["Competitive Nm blockade", "Depolarizing block at the NMJ (Nm agonist)", "Inhibiting AChE", "Blocking Ca2+ entry"], answer: 1, explain: "It is a depolarizing neuromuscular blocker." },
            { q: "Varenicline is a ___ agonist at nicotinic receptors used for smoking cessation.", options: ["Full", "Partial", "Inverse", "Irreversible"], answer: 1, explain: "Nicotine is a full agonist, varenicline is partial." },
            { q: "Muscarinic toxicity from cholinergic excess is treated with:", options: ["Atropine", "Physostigmine", "Neostigmine", "Bethanechol"], answer: 0, explain: "Atropine blocks muscarinic receptors." }
          ],
          matching: [["Bethanechol", "Urinary and bowel retention"], ["Methacholine", "Diagnose asthma"], ["Pilocarpine", "Sjogren syndrome"], ["Edrophonium", "Diagnose myasthenia gravis"], ["Neostigmine", "Treat myasthenia gravis"], ["Physostigmine", "Atropine overdose"], ["Donepezil", "Alzheimer dementia"], ["Varenicline", "Smoking cessation"]]
        }
      ]},
      { id: "t-aut2", title: "Autonomics Part 2: Antimuscarinics and Adrenergics", sections: [
        { id: "aut2a", title: "4-1 Parasympatholytics",
          questions: [
            { q: "First-choice drug for organophosphate poisoning is:", options: ["Atropine", "Physostigmine", "Scopolamine", "Pilocarpine"], answer: 0, explain: "Atropine blocks all muscarinic receptors.", hy: true },
            { q: "Which inhaled antimuscarinic has the longest half-life?", options: ["Ipratropium", "Tiotropium", "Glycopyrronium", "Umeclidinium"], answer: 1, explain: "Used in acute asthma and COPD." },
            { q: "Scopolamine causes more CNS effects than atropine because it has:", options: ["Better blood-brain barrier permeability", "Higher M3 selectivity", "Nicotinic blockade", "A longer half-life"], answer: 0, explain: "It is a stereoisomer of atropine used for motion sickness." },
            { q: "Oxybutynin is used for:", options: ["Urge incontinence", "Peptic ulcer", "Asthma", "Motion sickness"], answer: 0, explain: "Oxybutynin and dicyclomine are M3 blockers (dicyclomine for diarrhea)." },
            { q: "Pirenzepine (M1-selective) is used for:", options: ["Asthma", "Diarrhea", "Peptic ulcer disease", "Bradycardia"], answer: 2, explain: "It inhibits gastric acid secretion." },
            { q: "Atropine is given with anesthesia to treat:", options: ["Bradycardia, hypersalivation, excess airway secretions", "Hypertension and tachycardia", "Urinary retention", "Miosis"], answer: 0, explain: "It is also used for symptomatic bradycardia and as a mydriatic." },
            { q: "Vecuronium and pancuronium are used for:", options: ["Skeletal muscle relaxation before surgery", "Asthma", "Hypertension", "Myasthenia gravis"], answer: 0, explain: "They are Nm blockers (curares). Hexamethonium is an Nn ganglion blocker, obsolete for hypertension." }
          ],
          matching: [["Atropine", "Prototype non-selective blocker"], ["Tiotropium", "Longest-acting inhaled blocker, COPD"], ["Scopolamine", "Motion sickness"], ["Oxybutynin", "Urge incontinence"], ["Pirenzepine", "M1 blocker for peptic ulcer"], ["Hexamethonium", "Ganglionic (Nn) blocker"], ["Vecuronium", "Neuromuscular (Nm) blocker"]]
        },
        { id: "aut2b", title: "4-2 Catecholamine synthesis",
          questions: [
            { q: "Which is the exception where sympathetic fibers use ACh?", options: ["Eccrine sweat glands", "Cardiac muscle", "Blood vessels", "Salivary glands"], answer: 0, explain: "NE is the main transmitter of sympathetic postganglionic fibers except eccrine sweat glands.", hy: true },
            { q: "The rate-limiting step of catecholamine synthesis is:", options: ["Tyrosine to L-DOPA by tyrosine hydroxylase", "DOPA to dopamine", "Dopamine to norepinephrine", "Norepinephrine to epinephrine"], answer: 0, explain: "Metyrosine inhibits tyrosine hydroxylase." },
            { q: "Reserpine depletes catecholamines by inhibiting:", options: ["VMAT", "NET", "Tyrosine hydroxylase", "COMT"], answer: 0, explain: "VMAT loads catecholamines into vesicles.", hy: true },
            { q: "Cocaine and TCAs raise synaptic catecholamines by inhibiting:", options: ["Reuptake (NET and DAT)", "Synthesis", "Vesicle storage", "Release"], answer: 0, explain: "Termination of catecholamines is mainly by reuptake." },
            { q: "Amphetamines, ephedrine and tyramine act by:", options: ["Triggering catecholamine release", "Blocking VMAT", "Inhibiting tyrosine hydroxylase", "Blocking alpha-2 receptors"], answer: 0, explain: "They are release activators. Guanethidine inhibits release." }
          ],
          matching: [["Synthesis", "Metyrosine"], ["Storage (VMAT)", "Reserpine"], ["Release", "Guanethidine"], ["Reuptake", "Cocaine and TCAs"]]
        },
        { id: "aut2c", title: "4-3 Sympathomimetics and sympatholytics",
          questions: [
            { q: "First-line vasopressor for septic shock is:", options: ["Norepinephrine", "Dobutamine", "Isoproterenol", "Phenylephrine"], answer: 0, explain: "NE (alpha1 > beta1) increases total peripheral resistance." },
            { q: "Epinephrine has which profile and use?", options: ["Beta1 = beta2 > alpha; anaphylaxis", "Alpha only; hypertension", "Beta2 only; asthma only", "D1 only; renal failure"], answer: 0, explain: "Epinephrine is used for anaphylaxis and shock.", hy: true },
            { q: "Low-dose dopamine acts on D1 receptors to cause:", options: ["Renal vasodilation", "Tachycardia", "Vasoconstriction", "Bronchodilation"], answer: 0, explain: "Mid dose: beta1 (tachycardia). High dose: alpha1 (vasoconstriction)." },
            { q: "Which is used as a nasal decongestant?", options: ["Oxymetazoline", "Clonidine", "Terbutaline", "Dobutamine"], answer: 0, explain: "Alpha-1 agonists vasoconstrict nasal vessels." },
            { q: "Methyldopa is used for:", options: ["Gestational hypertension and preeclampsia", "BPH", "Asthma", "Septic shock"], answer: 0, explain: "Methyldopa is an alpha-2 agonist. Clonidine is also an alpha-2 agonist for hypertension." },
            { q: "A beta-2 agonist used for tocolysis has which expected side effects?", options: ["Tachycardia and tremor", "Bradycardia and sedation", "Hypotension and miosis", "Constipation"], answer: 0, explain: "Salbutamol, terbutaline and isoxsuprine." },
            { q: "Which is an irreversible alpha blocker used before pheochromocytoma surgery?", options: ["Phenoxybenzamine", "Phentolamine", "Prazosin", "Yohimbine"], answer: 0, explain: "Phentolamine is the reversible alpha blocker." },
            { q: "Which alpha-1 blocker is most selective for the prostate?", options: ["Prazosin", "Doxazosin", "Tamsulosin", "Phentolamine"], answer: 2, explain: "-zosins treat BPH and may cause orthostatic hypotension.", hy: true },
            { q: "Which is the shortest-acting IV beta-1 selective blocker?", options: ["Atenolol", "Metoprolol", "Bisoprolol", "Esmolol"], answer: 3, explain: "Esmolol. Propranolol is nonselective and also used for hyperthyroidism and migraine prophylaxis." },
            { q: "Dobutamine (beta-1 agonist) is used for:", options: ["Cardiogenic shock and cardiac stress testing", "Asthma", "Hypertension", "Anaphylaxis"], answer: 0, explain: "Isoproterenol is the nonselective beta agonist." }
          ],
          matching: [["Phenylephrine", "Alpha-1 agonist"], ["Clonidine", "Alpha-2 agonist"], ["Dobutamine", "Beta-1 agonist"], ["Salbutamol", "Beta-2 agonist"], ["Prazosin", "Alpha-1 blocker"], ["Yohimbine", "Alpha-2 blocker"], ["Propranolol", "Nonselective beta blocker"], ["Metoprolol", "Beta-1 selective blocker"]]
        }
      ]},
      { id: "t-hor", title: "Hormones and Diabetes Mellitus", sections: [
        { id: "hor1", title: "5-1 Pancreas, insulin and diabetes",
          questions: [
            { q: "Which islet cells secrete insulin and make up about 70% of the islet?", options: ["Alpha", "Beta", "Delta", "F cells"], answer: 1, explain: "Alpha 17% (glucagon), beta 70% (insulin), delta 7% (somatostatin), F cells (pancreatic polypeptide)." },
            { q: "Which structure is part of proinsulin?", options: ["C-peptide", "Glucagon", "Somatostatin", "GLP-1"], answer: 0, explain: "Insulin has A and B chains linked by disulfide bridges. Proinsulin includes C-peptide." },
            { q: "Which best describes type 1 DM?", options: ["Tissue resistance with relative deficiency", "Autoimmune beta-cell destruction with absolute insulin deficiency", "Occurs only in pregnancy", "Always controlled by diet"], answer: 1, explain: "Usually under 30 years old at diagnosis and insulin-dependent.", hy: true },
            { q: "Type 2 DM is characterized by:", options: ["Insulin resistance with relative insulin deficiency", "Absolute deficiency from autoimmunity", "Glucagon deficiency", "Excess insulin"], answer: 0, explain: "It may initially be controlled with diet, exercise and oral agents." },
            { q: "HbA1c reflects glucose control over about the past:", options: ["1 week", "2-3 months", "1 year", "24 hours"], answer: 1, explain: "HbA1c reflects average glycemia over about 2-3 months." },
            { q: "What are the HbA1c targets for most patients and for frail elderly?", options: ["Below 7% and below 8%", "Below 5% and below 6%", "Below 9% and below 10%", "Below 6% and below 7%"], answer: 0, explain: "Also: pre-meal glucose 90-130 mg/dL and BP below 140/90.", hy: true },
            { q: "What are the 1-hour and 2-hour postprandial glucose targets?", options: ["Below 180 and below 150 mg/dL", "Below 150 and below 180 mg/dL", "Below 200 and below 200 mg/dL", "Below 130 and below 110 mg/dL"], answer: 0, explain: "1-hr postprandial below 180 mg/dL (10 mmol/L). 2-hr below 150 mg/dL (8.3 mmol/L)." },
            { q: "Using weight in kg x 0.55, a 60 kg type 1 DM patient needs about how many insulin units per day?", options: ["33 units", "27 units", "60 units", "110 units"], answer: 0, explain: "60 x 0.55 = 33 units.", hy: true },
            { q: "Which regimen fits type 1 DM?", options: ["At least 3-4 injections daily, rapid plus long-acting analogs", "Metformin alone", "Diet only", "A weekly GLP-1 agonist only"], answer: 0, explain: "This physiologically replaces insulin." }
          ],
          matching: [["Alpha cells", "Glucagon"], ["Beta cells", "Insulin"], ["Delta cells", "Somatostatin"], ["F cells", "Pancreatic polypeptide"]],
          notes: [{ h: "DM complications", body: "Retinopathy, nephropathy and neuropathy. Diet: balanced, limited carbohydrate, monounsaturated fats such as olive oil (Mediterranean style)." }]
        },
        { id: "hor2", title: "5-2 Antidiabetic drugs",
          questions: [
            { q: "Which is the long-acting insulin?", options: ["Insulin glargine", "Insulin lispro", "Regular insulin", "NPH insulin"], answer: 0, explain: "Also detemir and degludec. Regular insulin is short-acting (IV in emergencies). Most common insulin side effect: hypoglycemia." },
            { q: "Sulfonylureas raise insulin release by:", options: ["Inhibiting K+ efflux in beta cells", "Activating AMPK", "Blocking SGLT2", "Binding PPAR-gamma"], answer: 0, explain: "Second-generation: glyburide, glipizide, glimepiride, gliclazide.", hy: true },
            { q: "The major side effect of gliclazide is:", options: ["Hypoglycemia", "Lactic acidosis", "Genital infection", "Pancreatitis"], answer: 0, explain: "Octreotide is the antidote for sulfonylurea-induced hypoglycemia." },
            { q: "Repaglinide differs from sulfonylureas by having:", options: ["Faster onset, shorter duration, taken before meals", "Longer duration", "PPAR-gamma activity", "DPP-4 inhibition"], answer: 0, explain: "Meglitinides control postprandial glucose." },
            { q: "Metformin's primary mechanism is:", options: ["Activating AMPK to reduce hepatic glucose production", "Stimulating insulin release", "Inhibiting SGLT2", "Delaying carbohydrate digestion"], answer: 0, explain: "First-line in type 2 DM and used in PCOS.", hy: true },
            { q: "Which are metformin's adverse effects?", options: ["B12 deficiency and lactic acidosis", "Heart failure and fractures", "Genital infections", "Pancreatitis"], answer: 0, explain: "Most common: GI upset." },
            { q: "Pioglitazone and rosiglitazone cause:", options: ["Fluid retention, bone loss, weight gain", "Hypoglycemia and tremor", "GI upset only", "Genital mycotic infections"], answer: 0, explain: "They are PPAR-gamma ligands." },
            { q: "GLP-1 agonists cause weight loss. A serious side effect is:", options: ["Acute pancreatitis", "Lactic acidosis", "Fractures", "Flatulence"], answer: 0, explain: "Exenatide, semaglutide, liraglutide, dulaglutide." },
            { q: "Which agent lacks effect on fasting glucose and causes flatulence?", options: ["Acarbose", "Metformin", "Glipizide", "Pioglitazone"], answer: 0, explain: "Alpha-glucosidase inhibitors reduce post-meal glucose.", hy: true },
            { q: "SGLT2 inhibitors lower glucose by:", options: ["Causing glycosuria", "Delaying starch digestion", "Closing K-ATP channels", "Activating PPAR-gamma"], answer: 0, explain: "Side effects: genital and urinary tract infections." },
            { q: "Which pairing is correct?", options: ["Sitagliptin is a DPP-4 inhibitor; semaglutide is a GLP-1 agonist", "Sitagliptin is a GLP-1 agonist; semaglutide is a DPP-4 inhibitor", "Empagliflozin is a GLP-1 agonist", "Acarbose is an SGLT2 inhibitor"], answer: 0, explain: "DPP-4 inhibitors end in -gliptin." }
          ],
          matching: [["Sulfonylurea", "Glipizide"], ["Meglitinide", "Repaglinide"], ["Biguanide", "Metformin"], ["Thiazolidinedione", "Pioglitazone"], ["GLP-1 agonist", "Semaglutide"], ["DPP-4 inhibitor", "Sitagliptin"], ["Alpha-glucosidase inhibitor", "Acarbose"], ["SGLT2 inhibitor", "Empagliflozin"]]
        }
      ]}
    ]
  }
];
