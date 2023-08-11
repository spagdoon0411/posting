let testTitles: string[] = [
  "Hospice of SLO Website",
  "FAR 10k Rocket Manufacturing",
  "CS Student Social Networks",
  "Isomer Enumeration",
  "Hospice of SLO Website",
  "FAR 10k Rocket Manufacturing",
  "CS Student Social Networks",
  "Isomer Enumeration"
]

let testMarkdown: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...",

"Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit...",

"Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...",

"Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit. Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

"Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...",

"Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi \
ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit...",

"Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla \
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit...",

"Excepteur sint occaecat cupidatat non proident, sunt in culpa \
qui officia deserunt ullamco eiusmod mollit. Lorem ipsum dolor sit amet, consectetur adipiscing \
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
]

let testTags: string[][] = [
  [ 
    "Web Development",
    "UI/UX",
    "Volunteering",
    "Databases"
  ],
  [
    "Composites",
    "Aerospace",
    "CAD",
    "Machine Shop",
    "Lathes",
    "..."
  ],
  [
    "Graph Theory",
    "Formal Research",
    "Computer Science",
    "Applied Mathematics",
  ],
  [
    "Data Science",
    "Chemistry",
    "Graph Theory"
  ],
  [ 
    "Web Development",
    "UI/UX",
    "Volunteering",
    "Databases"
  ],
  [
    "Composites",
    "Aerospace",
    "CAD",
    "Machine Shop",
    "Lathes",
    "..."
  ],
  [
    "Graph Theory",
    "Formal Research",
    "Computer Science",
    "Applied Mathematics",
  ],
  [
    "Data Science",
    "Chemistry",
    "Graph Theory"
  ]
];

let testData: [string, string, string[]][] = Array.from(Array(testMarkdown.length).keys()).map(i => [testTitles[i], testMarkdown[i], testTags[i]]);

export { testData };