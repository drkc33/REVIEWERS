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
];
