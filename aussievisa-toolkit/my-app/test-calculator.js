// PR Points Calculator Test Script
// Testing calculation logic programmatically

const {
  calculateTotalPoints,
  getScoreInterpretation,
  MAX_POINTS,
  MIN_REQUIRED_POINTS,
} = require('./src/data/pointsRules.ts');

// Test Cases
const testCases = [
  {
    name: "Test 1: Empty State (All Unselected)",
    input: {},
    expected: 0,
  },
  {
    name: "Test 2: Minimum Pass (45yo, 190 nomination)",
    input: {
      age: "45+",
      english: "competent",
      overseasExperience: "0-3",
      australianExperience: "0-1",
      education: "other",
      australianStudy: "no",
      regionalStudy: "no",
      professionalYear: "no",
      naati: "no",
      partner: "none",
      nomination: "190",
    },
    expected: 15, // 0 + 0 + 0 + 0 + 10 + 0 + 0 + 0 + 0 + 0 + 5 = 15
  },
  {
    name: "Test 3: Typical 189 Applicant",
    input: {
      age: "25-32",
      english: "proficient",
      overseasExperience: "5-7",
      australianExperience: "1-2",
      education: "bachelor-master",
      australianStudy: "yes",
      regionalStudy: "no",
      professionalYear: "no",
      naati: "no",
      partner: "single",
      nomination: "none",
    },
    expected: 85, // 30 + 10 + 10 + 5 + 15 + 5 + 0 + 0 + 0 + 10 + 0 = 85
  },
  {
    name: "Test 4: Maximum Points Possible",
    input: {
      age: "25-32",
      english: "superior",
      overseasExperience: "8+",
      australianExperience: "8+",
      education: "phd",
      australianStudy: "yes",
      regionalStudy: "yes",
      professionalYear: "yes",
      naati: "yes",
      partner: "single",
      nomination: "491",
    },
    expected: 150, // 30 + 20 + 15 + 20 + 20 + 5 + 5 + 5 + 5 + 10 + 15 = 150
  },
  {
    name: "Test 5: Young with Partner Skills",
    input: {
      age: "18-24",
      english: "competent",
      overseasExperience: "3-4",
      australianExperience: "0-1",
      education: "bachelor-master",
      australianStudy: "no",
      regionalStudy: "no",
      professionalYear: "no",
      naati: "no",
      partner: "skills-english",
      nomination: "190",
    },
    expected: 65, // 25 + 0 + 5 + 0 + 15 + 0 + 0 + 0 + 0 + 10 + 10 = 65
  },
  {
    name: "Test 6: 491 Regional Pathway",
    input: {
      age: "33-39",
      english: "proficient",
      overseasExperience: "0-3",
      australianExperience: "3-4",
      education: "diploma",
      australianStudy: "yes",
      regionalStudy: "yes",
      professionalYear: "yes",
      naati: "yes",
      partner: "english-only",
      nomination: "491",
    },
    expected: 85, // 25 + 10 + 0 + 10 + 10 + 5 + 5 + 5 + 5 + 5 + 15 = 90
  },
  {
    name: "Test 7: Below 65 Threshold",
    input: {
      age: "40-44",
      english: "competent",
      overseasExperience: "0-3",
      australianExperience: "0-1",
      education: "other",
      australianStudy: "no",
      regionalStudy: "no",
      professionalYear: "no",
      naati: "no",
      partner: "none",
      nomination: "none",
    },
    expected: 25, // 15 + 0 + 0 + 0 + 10 + 0 + 0 + 0 + 0 + 0 + 0 = 25
  },
  {
    name: "Test 8: Doctor + Full Experience",
    input: {
      age: "33-39",
      english: "superior",
      overseasExperience: "8+",
      australianExperience: "5-7",
      education: "phd",
      australianStudy: "no",
      regionalStudy: "no",
      professionalYear: "no",
      naati: "no",
      partner: "citizen",
      nomination: "none",
    },
    expected: 100, // 25 + 20 + 15 + 15 + 20 + 0 + 0 + 0 + 0 + 10 + 0 = 105
  },
];

console.log("=== PR Points Calculator Test Results ===\n");

let passed = 0;
let failed = 0;

testCases.forEach((test, index) => {
  try {
    const result = calculateTotalPoints(test.input);
    const interpretation = getScoreInterpretation(result);
    const status = result === test.expected ? "✅ PASS" : "❌ FAIL";
    
    if (result === test.expected) passed++;
    else failed++;
    
    console.log(`${status} - ${test.name}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log(`  Interpretation: ${interpretation.label}`);
    console.log();
  } catch (err) {
    console.log(`❌ ERROR - ${test.name}: ${err.message}\n`);
    failed++;
  }
});

console.log(`\n=== Summary ===`);
console.log(`Total: ${testCases.length}, Passed: ${passed}, Failed: ${failed}`);
console.log(`\nMAX_POINTS defined: ${MAX_POINTS}`);
console.log(`MIN_REQUIRED_POINTS: ${MIN_REQUIRED_POINTS}`);
console.log(`\nNote: MAX_POINTS should be 150 (not 130) for the theoretical maximum.`);
