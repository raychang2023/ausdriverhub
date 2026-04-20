export const visas = [
  {
    code: "189",
    name: "Skilled Independent Visa (Subclass 189)",
    shortName: "189 Independent",
    description: "Permanent skilled migration visa without state sponsorship. Suitable for high-scoring applicants.",
    path: "/visa-189",
    features: ["Independent Application", "No Sponsorship Required", "Direct PR", "Live Anywhere"],
    suitableFor: "Applicants with high EOI scores who do not require state sponsorship",
  },
  {
    code: "190",
    name: "Skilled Nominated Visa (Subclass 190)",
    shortName: "190 State Nominated",
    description: "State-sponsored skilled migration visa with 5 additional bonus points.",
    path: "/visa-190",
    features: ["State Nomination Bonus", "Direct PR", "State Sponsorship Required", "Residency Requirement"],
    suitableFor: "Applicants who need state sponsorship points to reach EOI threshold",
  },
  {
    code: "491",
    name: "Skilled Work Regional Visa (Subclass 491)",
    shortName: "491 Regional",
    description: "Provisional visa with regional state or family sponsorship. Convertible to PR after 3 years.",
    path: "/visa-491",
    features: ["Regional Pathway", "15 Points Bonus", "Provisional to PR", "Family Sponsorship"],
    suitableFor: "Applicants willing to live and work in regional areas",
  },
];
