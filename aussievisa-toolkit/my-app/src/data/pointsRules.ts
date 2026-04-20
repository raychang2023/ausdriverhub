// ============================================================================
// PR Points Calculator Rules - Calibration Version
// Based on Australian skilled migration points system
// Last Calibrated: 2026-04-17
//
// ⚠️  IMPORTANT DISCLAIMER:
// These rules are for reference only. Always verify with official sources:
// https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table
//
// RISK LEVEL LEGEND:
// ✅ CONFIRMED - Verified against official sources
// ⚠️  REVIEW - Minor discrepancies in labeling/terminology
// ❌ MISSING - Rule not implemented
// 🆕 UPDATE - New rule needs to be added
// ============================================================================

// ----------------------------------------------------------------------------
// Type Definitions
// ----------------------------------------------------------------------------

export interface PointsOption {
  label: string;
  value: string;
  points: number;
  /** Risk level for this specific option */
  riskLevel?: 'confirmed' | 'review' | 'missing';
  /** Additional notes for calibration */
  notes?: string;
}

export interface PointsCategory {
  id: string;
  title: string;
  description: string;
  options: PointsOption[];
  /** Overall risk level for this category */
  riskLevel?: 'confirmed' | 'review' | 'missing' | 'partial';
  /** Important limitations or conditions */
  limitations?: string[];
}

export interface PointsRule {
  category: PointsCategory;
  multiSelect?: boolean;
}

/** Official rule comparison structure for calibration tracking */
export interface OfficialRuleComparison {
  categoryId: string;
  categoryName: string;
  itemName: string;
  currentPoints: number;
  officialPoints: number;
  isMatch: boolean;
  riskLevel: 'low' | 'medium' | 'high';
  notes: string;
}

// ----------------------------------------------------------------------------
// 1. AGE - ✅ CONFIRMED
// Official source verified: 2025-04
// ----------------------------------------------------------------------------

export const ageRules: PointsCategory = {
  id: "age",
  title: "Age",
  description: "Your age at the time of invitation",
  riskLevel: "confirmed",
  limitations: [
    "Age 45+ makes you ineligible to apply (not just 0 points)",
    "Must be under 45 at time of invitation"
  ],
  options: [
    { 
      label: "18-24 years", 
      value: "18-24", 
      points: 25,
      riskLevel: "confirmed",
      notes: "Official: at least 18 but less than 25 years"
    },
    { 
      label: "25-32 years", 
      value: "25-32", 
      points: 30,
      riskLevel: "confirmed",
      notes: "Official: at least 25 but less than 33 years"
    },
    { 
      label: "33-39 years", 
      value: "33-39", 
      points: 25,
      riskLevel: "confirmed",
      notes: "Official: at least 33 but less than 40 years"
    },
    { 
      label: "40-44 years", 
      value: "40-44", 
      points: 15,
      riskLevel: "confirmed",
      notes: "Official: at least 40 but less than 45 years"
    },
    { 
      label: "45 years or older", 
      value: "45+", 
      points: 0,
      riskLevel: "confirmed",
      notes: "INELIGIBLE - Cannot apply for skilled migration"
    },
  ],
};

// ----------------------------------------------------------------------------
// 2. ENGLISH LANGUAGE - ✅ CONFIRMED (Scores) / ⚠️ REVIEW (PTE thresholds)
// Updated PTE scores effective August 7, 2025
// ----------------------------------------------------------------------------

export const englishRules: PointsCategory = {
  id: "english",
  title: "English Language",
  description: "Your English test results (IELTS/PTE/TOEFL etc.)",
  riskLevel: "review",
  limitations: [
    "PTE Academic thresholds changed on August 7, 2025",
    "Tests must be taken within 3 years of invitation"
  ],
  options: [
    { 
      label: "Competent English (IELTS 6 each band)", 
      value: "competent", 
      points: 0,
      riskLevel: "confirmed",
      notes: "PTE (post-Aug 2025): L47, R48, W51, S54"
    },
    { 
      label: "Proficient English (IELTS 7 each band)", 
      value: "proficient", 
      points: 10,
      riskLevel: "confirmed",
      notes: "PTE (post-Aug 2025): L58, R59, W69, S76"
    },
    { 
      label: "Superior English (IELTS 8 each band)", 
      value: "superior", 
      points: 20,
      riskLevel: "confirmed",
      notes: "PTE (post-Aug 2025): L69, R70, W85, S88"
    },
  ],
};

// ----------------------------------------------------------------------------
// 3. OVERSEAS WORK EXPERIENCE - ⚠️ REVIEW (Range labels)
// Max combined with Australian experience: 20 points
// ----------------------------------------------------------------------------

export const overseasExperienceRules: PointsCategory = {
  id: "overseasExperience",
  title: "Overseas Work Experience",
  description: "Skilled employment outside Australia in your nominated occupation (within last 10 years)",
  riskLevel: "review",
  limitations: [
    "Must be at least 20 hours per week for remuneration",
    "Maximum 20 points combined with Australian experience",
    "Must be in nominated or closely related occupation"
  ],
  options: [
    { 
      label: "Less than 3 years", 
      value: "0-3", 
      points: 0,
      riskLevel: "confirmed"
    },
    { 
      label: "3-4 years (At least 3 but less than 5)", 
      value: "3-4", 
      points: 5,
      riskLevel: "review",
      notes: "Label updated to match official wording"
    },
    { 
      label: "5-7 years (At least 5 but less than 8)", 
      value: "5-7", 
      points: 10,
      riskLevel: "review",
      notes: "Label updated to match official wording"
    },
    { 
      label: "8 years or more (At least 8 years)", 
      value: "8+", 
      points: 15,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 4. AUSTRALIAN WORK EXPERIENCE - ⚠️ REVIEW (Range labels)
// Max combined with Overseas experience: 20 points
// ----------------------------------------------------------------------------

export const australianExperienceRules: PointsCategory = {
  id: "australianExperience",
  title: "Australian Work Experience",
  description: "Skilled employment in Australia in your nominated occupation (within last 10 years)",
  riskLevel: "review",
  limitations: [
    "Must be at least 20 hours per week for remuneration",
    "Maximum 20 points combined with Overseas experience",
    "Must have held substantive visa or Bridging A/B visa",
    "Must be in nominated or closely related occupation"
  ],
  options: [
    { 
      label: "Less than 1 year", 
      value: "0-1", 
      points: 0,
      riskLevel: "confirmed"
    },
    { 
      label: "1-2 years (At least 1 but less than 3)", 
      value: "1-2", 
      points: 5,
      riskLevel: "review",
      notes: "Label updated to match official wording"
    },
    { 
      label: "3-4 years (At least 3 but less than 5)", 
      value: "3-4", 
      points: 10,
      riskLevel: "review",
      notes: "Label updated to match official wording"
    },
    { 
      label: "5-7 years (At least 5 but less than 8)", 
      value: "5-7", 
      points: 15,
      riskLevel: "review",
      notes: "Label updated to match official wording"
    },
    { 
      label: "8 years or more (At least 8 years)", 
      value: "8+", 
      points: 20,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 5. EDUCATIONAL QUALIFICATIONS - ✅ CONFIRMED
// ----------------------------------------------------------------------------

export const educationRules: PointsCategory = {
  id: "education",
  title: "Educational Qualifications",
  description: "Your highest completed qualification",
  riskLevel: "confirmed",
  limitations: [
    "Points awarded for highest qualification only",
    "Qualification must be recognized by assessing authority"
  ],
  options: [
    { 
      label: "Doctorate (PhD)", 
      value: "phd", 
      points: 20,
      riskLevel: "confirmed",
      notes: "Must be Doctor of Philosophy, not professional doctorates"
    },
    { 
      label: "Bachelor's or Master's degree", 
      value: "bachelor-master", 
      points: 15,
      riskLevel: "confirmed"
    },
    { 
      label: "Australian Diploma or Trade Qualification", 
      value: "diploma", 
      points: 10,
      riskLevel: "confirmed"
    },
    { 
      label: "Other recognised qualification (assessing authority approved)", 
      value: "other", 
      points: 10,
      riskLevel: "confirmed",
      notes: "Qualification recognized by relevant assessing authority"
    },
  ],
};

// ----------------------------------------------------------------------------
// 6. SPECIALIST EDUCATION QUALIFICATION - 🆕 MISSING - NEEDS TO BE ADDED
// 10 points for STEM research degrees from Australian institutions
// ----------------------------------------------------------------------------

export const specialistEducationRules: PointsCategory = {
  id: "specialistEducation",
  title: "Specialist Education Qualification",
  description: "Masters by research or Doctorate in STEM/ICT from Australian institution",
  riskLevel: "missing",
  limitations: [
    "Must include at least 2 academic years of study",
    "Degree must be from Australian educational institution",
    "Fields: Natural & Physical Sciences, IT, Engineering"
  ],
  options: [
    { 
      label: "Yes - Masters/Doctorate by research in STEM/ICT (Australia)", 
      value: "yes", 
      points: 10,
      riskLevel: "confirmed",
      notes: "🆕 NEW RULE - Not in original implementation"
    },
    { 
      label: "No", 
      value: "no", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 7. AUSTRALIAN STUDY REQUIREMENT - ✅ CONFIRMED
// ----------------------------------------------------------------------------

export const australianStudyRules: PointsCategory = {
  id: "australianStudy",
  title: "Australian Study Requirement",
  description: "Met the 2-year study requirement in Australia (92 weeks of registered study)",
  riskLevel: "confirmed",
  limitations: [
    "Must be at least 2 academic years (92 weeks) of registered study",
    "Course must be taught in English"
  ],
  options: [
    { 
      label: "Yes - Completed 2+ years of study in Australia", 
      value: "yes", 
      points: 5,
      riskLevel: "confirmed"
    },
    { 
      label: "No", 
      value: "no", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 8. REGIONAL STUDY - ✅ CONFIRMED
// ----------------------------------------------------------------------------

export const regionalStudyRules: PointsCategory = {
  id: "regionalStudy",
  title: "Regional Study",
  description: "Studied in designated regional Australia",
  riskLevel: "confirmed",
  limitations: [
    "Must meet Australian study requirement",
    "Must have lived in designated regional area",
    "Cannot include distance education"
  ],
  options: [
    { 
      label: "Yes - Studied in regional Australia", 
      value: "yes", 
      points: 5,
      riskLevel: "confirmed"
    },
    { 
      label: "No", 
      value: "no", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 9. PROFESSIONAL YEAR - ✅ CONFIRMED
// Only for Accounting, ICT/Computing, or Engineering
// ----------------------------------------------------------------------------

export const professionalYearRules: PointsCategory = {
  id: "professionalYear",
  title: "Professional Year in Australia",
  description: "Completed professional year program in your nominated occupation",
  riskLevel: "confirmed",
  limitations: [
    "Only available for: Accounting, ICT/Computing, Engineering",
    "Must be completed in the 48 months before invitation",
    "Must be at least 12 months duration",
    "Must be in nominated or closely related occupation"
  ],
  options: [
    { 
      label: "Yes - Completed professional year", 
      value: "yes", 
      points: 5,
      riskLevel: "confirmed",
      notes: "Providers: ACS, CPA, CA ANZ, IPA, Engineers Australia"
    },
    { 
      label: "No", 
      value: "no", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 10. NAATI / CREDENTIALLED COMMUNITY LANGUAGE - ✅ CONFIRMED
// ----------------------------------------------------------------------------

export const naatiRules: PointsCategory = {
  id: "naati",
  title: "Credentialled Community Language",
  description: "Hold NAATI accreditation or community language credential",
  riskLevel: "confirmed",
  limitations: [
    "Accreditation at paraprofessional level or above, OR",
    "Certification at certified provisional level or above, OR",
    "Community language credential for interpreting/translating"
  ],
  options: [
    { 
      label: "Yes - NAATI accredited / Community language credential", 
      value: "yes", 
      points: 5,
      riskLevel: "confirmed",
      notes: "Name changed from 'NAATI' to 'Credentialled Community Language'"
    },
    { 
      label: "No", 
      value: "no", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 11. PARTNER SKILLS - ✅ CONFIRMED (Updated Dec 2022)
// Significant changes made in December 2022
// ----------------------------------------------------------------------------

export const partnerRules: PointsCategory = {
  id: "partner",
  title: "Partner Skills",
  description: "Your partner's qualifications and English skills",
  riskLevel: "confirmed",
  limitations: [
    "Partner must be under 45 for skills assessment points",
    "Partner skills assessment must be for same occupation list",
    "Changes effective from December 8, 2022"
  ],
  options: [
    { 
      label: "Partner has positive skills assessment AND competent English", 
      value: "skills-english", 
      points: 10,
      riskLevel: "confirmed",
      notes: "Partner must be under 45 and on same occupation list"
    },
    { 
      label: "Partner has competent English only (no skills assessment)", 
      value: "english-only", 
      points: 5,
      riskLevel: "confirmed"
    },
    { 
      label: "Single (no partner)", 
      value: "single", 
      points: 10,
      riskLevel: "confirmed",
      notes: "Updated Dec 2022: Single applicants now get 10 points"
    },
    { 
      label: "Partner is Australian citizen or PR", 
      value: "citizen", 
      points: 10,
      riskLevel: "confirmed",
      notes: "Updated Dec 2022: Citizen/PR partner = 10 points"
    },
    { 
      label: "Partner does not meet any above criteria", 
      value: "none", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// 12. NOMINATION / SPONSORSHIP - ✅ CONFIRMED
// ----------------------------------------------------------------------------

export const nominationRules: PointsCategory = {
  id: "nomination",
  title: "Nomination / Sponsorship",
  description: "State/territory nomination or family sponsorship",
  riskLevel: "confirmed",
  limitations: [
    "190 requires state/territory government nomination",
    "491 can be state nomination OR family sponsorship",
    "189 does not require nomination"
  ],
  options: [
    { 
      label: "190 State/Territory Nomination", 
      value: "190", 
      points: 5,
      riskLevel: "confirmed"
    },
    { 
      label: "491 Regional Nomination or Family Sponsorship", 
      value: "491", 
      points: 15,
      riskLevel: "confirmed"
    },
    { 
      label: "None (applying for 189)", 
      value: "none", 
      points: 0,
      riskLevel: "confirmed"
    },
  ],
};

// ----------------------------------------------------------------------------
// ALL RULES COLLECTION
// Note: specialistEducationRules is marked as NEW and should be reviewed
// ----------------------------------------------------------------------------

export const allPointsRules: PointsCategory[] = [
  ageRules,
  englishRules,
  overseasExperienceRules,
  australianExperienceRules,
  educationRules,
  specialistEducationRules, // 🆕 NEW - Needs review before production
  australianStudyRules,
  regionalStudyRules,
  professionalYearRules,
  naatiRules,
  partnerRules,
  nominationRules,
];

// ----------------------------------------------------------------------------
// Score Interpretation
// ----------------------------------------------------------------------------

export interface ScoreInterpretation {
  minScore: number;
  maxScore: number;
  label: string;
  description: string;
  color: string;
}

export const scoreInterpretations: ScoreInterpretation[] = [
  {
    minScore: 0,
    maxScore: 64,
    label: "Below Minimum",
    description: "You need at least 65 points to submit an EOI. Consider improving your English score or gaining more experience.",
    color: "text-red-600",
  },
  {
    minScore: 65,
    maxScore: 74,
    label: "Minimum Met",
    description: "You meet the minimum requirement but may face strong competition. Consider options to increase your score.",
    color: "text-yellow-600",
  },
  {
    minScore: 75,
    maxScore: 84,
    label: "Competitive",
    description: "Good score range. You should receive invitations for many occupations, though some may require higher.",
    color: "text-blue-600",
  },
  {
    minScore: 85,
    maxScore: 94,
    label: "Very Competitive",
    description: "Strong score. You are likely to receive invitations for most occupations.",
    color: "text-green-600",
  },
  {
    minScore: 95,
    maxScore: 130,
    label: "Highly Competitive",
    description: "Excellent score. You should receive invitations quickly for most occupations.",
    color: "text-green-700",
  },
];

// ----------------------------------------------------------------------------
// Calculation Functions
// ----------------------------------------------------------------------------

export interface PointsSelection {
  [categoryId: string]: string;
}

export interface CalculationResult {
  total: number;
  breakdown: { categoryId: string; categoryName: string; points: number }[];
  warnings: string[];
}

/**
 * Calculate total points from selections
 * Includes validation warnings for important limitations
 */
export function calculateTotalPoints(selections: PointsSelection): CalculationResult {
  let total = 0;
  const breakdown: { categoryId: string; categoryName: string; points: number }[] = [];
  const warnings: string[] = [];

  // Calculate individual category points
  for (const rule of allPointsRules) {
    const selectedValue = selections[rule.id];
    if (selectedValue) {
      const option = rule.options.find((opt) => opt.value === selectedValue);
      if (option) {
        total += option.points;
        breakdown.push({
          categoryId: rule.id,
          categoryName: rule.title,
          points: option.points
        });
      }
    }
  }

  // Validate work experience combined limit (max 20)
  const overseasPoints = breakdown.find(b => b.categoryId === 'overseasExperience')?.points || 0;
  const australianPoints = breakdown.find(b => b.categoryId === 'australianExperience')?.points || 0;
  const combinedWorkExp = overseasPoints + australianPoints;
  if (combinedWorkExp > 20) {
    warnings.push(`Work experience points capped at 20. Combined: ${combinedWorkExp} points`);
    total = total - combinedWorkExp + 20;
  }

  // Validate age ineligibility
  if (selections['age'] === '45+') {
    warnings.push("Age 45+: Ineligible for skilled migration visas (not just 0 points)");
  }

  return { total, breakdown, warnings };
}

/**
 * Get interpretation based on score
 */
export function getScoreInterpretation(score: number): ScoreInterpretation {
  return scoreInterpretations.find(
    (interp) => score >= interp.minScore && score <= interp.maxScore
  ) || scoreInterpretations[0];
}

// ----------------------------------------------------------------------------
// Constants
// ----------------------------------------------------------------------------

/** Theoretical maximum points */
export const MAX_POINTS = 150;

/** Maximum points for combined work experience */
export const MAX_WORK_EXPERIENCE_POINTS = 20;

/** Minimum required points for EOI submission */
export const MIN_REQUIRED_POINTS = 65;

/** Age cutoff for eligibility */
export const AGE_CUTOFF = 45;

// ----------------------------------------------------------------------------
// Official Rule Comparison Table (for calibration tracking)
// This can be used to generate audit reports
// ----------------------------------------------------------------------------

export const officialRuleComparison: OfficialRuleComparison[] = [
  // Age
  { categoryId: "age", categoryName: "Age", itemName: "18-24 years", currentPoints: 25, officialPoints: 25, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "age", categoryName: "Age", itemName: "25-32 years", currentPoints: 30, officialPoints: 30, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "age", categoryName: "Age", itemName: "33-39 years", currentPoints: 25, officialPoints: 25, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "age", categoryName: "Age", itemName: "40-44 years", currentPoints: 15, officialPoints: 15, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "age", categoryName: "Age", itemName: "45+ years", currentPoints: 0, officialPoints: 0, isMatch: true, riskLevel: "medium", notes: "Score correct, but 45+ is ineligible not just 0 points" },

  // English
  { categoryId: "english", categoryName: "English", itemName: "Competent", currentPoints: 0, officialPoints: 0, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "english", categoryName: "English", itemName: "Proficient", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "english", categoryName: "English", itemName: "Superior", currentPoints: 20, officialPoints: 20, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },

  // Work Experience
  { categoryId: "overseasExperience", categoryName: "Overseas Work", itemName: "Less than 3 years", currentPoints: 0, officialPoints: 0, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "overseasExperience", categoryName: "Overseas Work", itemName: "3-4 years", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Label should be 'At least 3 but less than 5 years'" },
  { categoryId: "overseasExperience", categoryName: "Overseas Work", itemName: "5-7 years", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Label should be 'At least 5 but less than 8 years'" },
  { categoryId: "overseasExperience", categoryName: "Overseas Work", itemName: "8+ years", currentPoints: 15, officialPoints: 15, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },

  { categoryId: "australianExperience", categoryName: "Australian Work", itemName: "Less than 1 year", currentPoints: 0, officialPoints: 0, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "australianExperience", categoryName: "Australian Work", itemName: "1-2 years", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Label should be 'At least 1 but less than 3 years'" },
  { categoryId: "australianExperience", categoryName: "Australian Work", itemName: "3-4 years", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Label should be 'At least 3 but less than 5 years'" },
  { categoryId: "australianExperience", categoryName: "Australian Work", itemName: "5-7 years", currentPoints: 15, officialPoints: 15, isMatch: true, riskLevel: "low", notes: "Label should be 'At least 5 but less than 8 years'" },
  { categoryId: "australianExperience", categoryName: "Australian Work", itemName: "8+ years", currentPoints: 20, officialPoints: 20, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },

  // Education
  { categoryId: "education", categoryName: "Education", itemName: "Doctorate (PhD)", currentPoints: 20, officialPoints: 20, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "education", categoryName: "Education", itemName: "Bachelor/Master", currentPoints: 15, officialPoints: 15, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "education", categoryName: "Education", itemName: "Diploma/Trade", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "education", categoryName: "Education", itemName: "Other recognised", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },

  // 🆕 Specialist Education (NEW - not in original)
  { categoryId: "specialistEducation", categoryName: "Specialist Education", itemName: "STEM Research Degree (Australia)", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "high", notes: "🆕 NEW RULE - Was missing from original implementation" },

  // Other categories
  { categoryId: "australianStudy", categoryName: "Australian Study", itemName: "Yes", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "regionalStudy", categoryName: "Regional Study", itemName: "Yes", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "professionalYear", categoryName: "Professional Year", itemName: "Yes", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "naati", categoryName: "Community Language", itemName: "Yes", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },

  // Partner
  { categoryId: "partner", categoryName: "Partner Skills", itemName: "Skills + English", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "partner", categoryName: "Partner Skills", itemName: "English only", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "partner", categoryName: "Partner Skills", itemName: "Single", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Updated Dec 2022 - Confirmed" },
  { categoryId: "partner", categoryName: "Partner Skills", itemName: "Citizen/PR partner", currentPoints: 10, officialPoints: 10, isMatch: true, riskLevel: "low", notes: "Updated Dec 2022 - Confirmed" },

  // Nomination
  { categoryId: "nomination", categoryName: "Nomination", itemName: "190", currentPoints: 5, officialPoints: 5, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
  { categoryId: "nomination", categoryName: "Nomination", itemName: "491", currentPoints: 15, officialPoints: 15, isMatch: true, riskLevel: "low", notes: "Confirmed accurate" },
];

// ----------------------------------------------------------------------------
// Utility Functions for Rule Management
// ----------------------------------------------------------------------------

/**
 * Get all rules that need review
 */
export function getRulesNeedingReview(): PointsCategory[] {
  return allPointsRules.filter(rule => 
    rule.riskLevel === 'review' || 
    rule.riskLevel === 'missing' ||
    rule.riskLevel === 'partial' ||
    rule.options.some(opt => opt.riskLevel === 'missing')
  );
}

/**
 * Get calibration report summary
 */
export function getCalibrationSummary(): { confirmed: number; review: number; missing: number; total: number } {
  const comparison = officialRuleComparison;
  return {
    confirmed: comparison.filter(c => c.riskLevel === 'low').length,
    review: comparison.filter(c => c.riskLevel === 'medium').length,
    missing: comparison.filter(c => c.riskLevel === 'high').length,
    total: comparison.length
  };
}
