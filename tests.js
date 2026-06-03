/**
 * OlympiStar — Pure-Function Test Suite
 * Tests Properties 3, 4, 5, 6, 7, 8 (≥ 100 iterations each for property tests)
 *
 * Run with: node tests.js
 * No external dependencies required.
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

// ── Load app code into a shared sandbox ──────────────────────────────────────
// questions.js and app.js use top-level `const`, which in a vm context is
// lexically scoped and NOT attached to the sandbox object.
// Solution: wrap each file so its declarations are assigned to `globalThis`,
// then read them back from the sandbox.

function wrapConsts(code) {
  // Replace `const FOO = ` at the start of a statement with `globalThis.FOO = `
  // This handles the top-level const declarations we need.
  return code.replace(/\bconst\s+(\w+)\s*=/g, 'globalThis.$1 =');
}

const questionsCode = wrapConsts(fs.readFileSync(path.join(__dirname, 'questions.js'), 'utf8'));
const appCode       = wrapConsts(fs.readFileSync(path.join(__dirname, 'app.js'),       'utf8'));

// Build a minimal browser-like sandbox (localStorage not needed for pure fns)
const sandbox = {
  console,
  Math,
  Date,
  Object,
  Array,
  Number,
  JSON,
  parseInt,
  parseFloat,
  isNaN,
  isFinite,
  // Stub localStorage so Storage service doesn't throw during module eval
  localStorage: {
    getItem:    () => null,
    setItem:    () => {},
    removeItem: () => {},
    keys:       [],
  },
  // Stub document so app.js DOMContentLoaded listener doesn't throw
  document: {
    addEventListener: () => {},
    querySelectorAll: () => [],
    getElementById:   () => null,
  },
  // Stub window / confirm for resetProgress
  window: {},
  confirm: () => false,
  // Stub setInterval / clearInterval for mock timer
  setInterval:  () => 0,
  clearInterval: () => {},
  setTimeout:   () => 0,
};
vm.createContext(sandbox);

// Evaluate questions.js first (defines QUESTION_BANK), then app.js
vm.runInContext(questionsCode, sandbox);
vm.runInContext(appCode,       sandbox);

// Pull the pure functions and data out of the sandbox
const QUESTION_BANK         = sandbox.QUESTION_BANK;
const CONFIG                = sandbox.CONFIG;
const state                 = sandbox.state;
const getBadgeForStars      = sandbox.getBadgeForStars;
const badgeRank             = sandbox.badgeRank;
const calculateNewStreak    = sandbox.calculateNewStreak;
const getProgressPercentage = sandbox.getProgressPercentage;
const selectMockQuestions   = sandbox.selectMockQuestions;
const getEncouragementMessage = sandbox.getEncouragementMessage;

// ── Tiny test harness ─────────────────────────────────────────────────────────
let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, label) {
  if (condition) {
    passed++;
    process.stdout.write('  ✓ ' + label + '\n');
  } else {
    failed++;
    failures.push(label);
    process.stdout.write('  ✗ FAIL: ' + label + '\n');
  }
}

function section(title) {
  console.log('\n── ' + title + ' ──');
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Returns a random integer in [min, max] inclusive */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/** Adds `days` calendar days to a YYYY-MM-DD string */
function addDays(dateStr, days) {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

// ── UNIT TESTS ────────────────────────────────────────────────────────────────

section('Unit Tests — getBadgeForStars');
assert(getBadgeForStars(0) === 'none',    'stars=0 → none');
assert(getBadgeForStars(1) === 'Bronze',  'stars=1 → Bronze');
assert(getBadgeForStars(2) === 'Bronze',  'stars=2 → Bronze');
assert(getBadgeForStars(3) === 'Silver',  'stars=3 → Silver');
assert(getBadgeForStars(4) === 'Gold',    'stars=4 → Gold');
assert(getBadgeForStars(5) === 'Diamond', 'stars=5 → Diamond');

section('Unit Tests — badgeRank');
assert(badgeRank('none')    === 0, 'none → 0');
assert(badgeRank('Bronze')  === 1, 'Bronze → 1');
assert(badgeRank('Silver')  === 2, 'Silver → 2');
assert(badgeRank('Gold')    === 3, 'Gold → 3');
assert(badgeRank('Diamond') === 4, 'Diamond → 4');

section('Unit Tests — calculateNewStreak');
assert(calculateNewStreak(null, 0, '2025-07-15') === 1,
  'null lastDate → 1 (first session)');
assert(calculateNewStreak('2025-07-15', 5, '2025-07-15') === 5,
  'same day → unchanged (5)');
assert(calculateNewStreak('2025-07-14', 5, '2025-07-15') === 6,
  'consecutive day → streak+1 (5→6)');
assert(calculateNewStreak('2025-07-10', 5, '2025-07-15') === 1,
  'gap > 1 day → reset to 1');
assert(calculateNewStreak('2025-07-14', 1, '2025-07-15') === 2,
  'consecutive day from streak=1 → 2');

section('Unit Tests — getProgressPercentage');
// Set up state.starRatings for a known subject
const mathTopics = Object.keys(QUESTION_BANK.Math);
// All zeros → 0%
mathTopics.forEach(t => { state.starRatings['Math/' + t] = 0; });
assert(getProgressPercentage('Math') === 0, 'all zeros → 0%');

// All fives → 100%
mathTopics.forEach(t => { state.starRatings['Math/' + t] = 5; });
assert(getProgressPercentage('Math') === 100, 'all fives → 100%');

// Reset
mathTopics.forEach(t => { state.starRatings['Math/' + t] = 0; });

section('Unit Tests — selectMockQuestions');
const mockQs = selectMockQuestions('Reasoning');
assert(mockQs.length === 35, 'Reasoning mock → exactly 35 questions');
assert(mockQs.every(q => typeof q.topic === 'string' && q.topic.length > 0),
  'every question has a non-empty topic field');

section('Unit Tests — getEncouragementMessage');
const topBand = CONFIG.encouragement.top;
const midBand = CONFIG.encouragement.mid;
const lowBand = CONFIG.encouragement.low;
assert(topBand.includes(getEncouragementMessage(5)), 'score=5 → top band');
assert(midBand.includes(getEncouragementMessage(4)), 'score=4 → mid band');
assert(midBand.includes(getEncouragementMessage(3)), 'score=3 → mid band');
assert(lowBand.includes(getEncouragementMessage(2)), 'score=2 → low band');
assert(lowBand.includes(getEncouragementMessage(1)), 'score=1 → low band');
assert(lowBand.includes(getEncouragementMessage(0)), 'score=0 → low band');

// ── PROPERTY TESTS ────────────────────────────────────────────────────────────
// Each property runs ITERATIONS random trials.
const ITERATIONS = 100;

// ── Property 3: Badge Derived Exactly from Star Rating and CONFIG Thresholds ──
// Feature: olympistar, Property 3: Badge Derived Exactly from Star Rating and CONFIG Thresholds
// Validates: Requirements 10.1, 10.7
section('Property 3 — Badge Derived Exactly from Star Rating (100 iterations)');
{
  const expectedBadge = {
    0: 'none',
    1: 'Bronze',
    2: 'Bronze',
    3: 'Silver',
    4: 'Gold',
    5: 'Diamond',
  };
  let allPassed = true;
  let counterExample = null;
  for (let i = 0; i < ITERATIONS; i++) {
    const stars = randInt(0, 5);
    const result = getBadgeForStars(stars);
    if (result !== expectedBadge[stars]) {
      allPassed = false;
      counterExample = { stars, result, expected: expectedBadge[stars] };
      break;
    }
  }
  if (allPassed) {
    assert(true, `P3: getBadgeForStars matches exact mapping for all ${ITERATIONS} random stars in [0,5]`);
  } else {
    assert(false, `P3 FAILED — counterexample: stars=${counterExample.stars}, got="${counterExample.result}", expected="${counterExample.expected}"`);
  }
}

// ── Property 4: Streak Calculation Covers All Four Cases ─────────────────────
// Feature: olympistar, Property 4: Streak Calculation Covers All Four Cases
// Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5
section('Property 4 — Streak Calculation (100 iterations)');
{
  let allPassed = true;
  let counterExample = null;

  for (let i = 0; i < ITERATIONS; i++) {
    const streak = randInt(1, 30);
    const caseType = randInt(0, 3);
    const baseDate = '2025-01-15';

    if (caseType === 0) {
      // Case 1: null lastDate → always 1
      const result = calculateNewStreak(null, streak, baseDate);
      if (result !== 1) {
        allPassed = false;
        counterExample = { caseType, streak, result, expected: 1 };
        break;
      }
    } else if (caseType === 1) {
      // Case 2: same day → unchanged
      const result = calculateNewStreak(baseDate, streak, baseDate);
      if (result !== streak) {
        allPassed = false;
        counterExample = { caseType, streak, result, expected: streak };
        break;
      }
    } else if (caseType === 2) {
      // Case 3: exactly +1 day → streak+1
      const today = addDays(baseDate, 1);
      const result = calculateNewStreak(baseDate, streak, today);
      if (result !== streak + 1) {
        allPassed = false;
        counterExample = { caseType, streak, result, expected: streak + 1 };
        break;
      }
    } else {
      // Case 4: gap > 1 day → reset to 1
      const gap = randInt(2, 365);
      const today = addDays(baseDate, gap);
      const result = calculateNewStreak(baseDate, streak, today);
      if (result !== 1) {
        allPassed = false;
        counterExample = { caseType, streak, gap, result, expected: 1 };
        break;
      }
    }
  }

  if (allPassed) {
    assert(true, `P4: calculateNewStreak satisfies all four cases for ${ITERATIONS} random inputs`);
  } else {
    assert(false, `P4 FAILED — counterexample: ${JSON.stringify(counterExample)}`);
  }
}

// ── Property 5: Progress Percentage in [0,100] and Correctly Computed ─────────
// Feature: olympistar, Property 5: Progress Percentage is Always in [0, 100] and Correctly Computed
// Validates: Requirements 3.3, 3.4, 7.5
section('Property 5 — Progress Percentage Bounds and Formula (100 iterations)');
{
  const subjects = Object.keys(QUESTION_BANK);
  let allPassed = true;
  let counterExample = null;

  for (let i = 0; i < ITERATIONS; i++) {
    const subject = subjects[randInt(0, subjects.length - 1)];
    const topics  = Object.keys(QUESTION_BANK[subject]);

    // Assign random star ratings [0,5] to each topic
    const ratings = {};
    topics.forEach(t => {
      const r = randInt(0, 5);
      ratings['Math/' + t] = r; // won't be used
      state.starRatings[subject + '/' + t] = r;
    });

    const result = getProgressPercentage(subject);

    // Verify it's an integer in [0, 100]
    if (!Number.isInteger(result) || result < 0 || result > 100) {
      allPassed = false;
      counterExample = { subject, result, reason: 'not integer in [0,100]' };
      break;
    }

    // Verify it matches the formula: round(sum / (topicCount * 5) * 100)
    const maxStars = topics.length * CONFIG.quizQuestionCount;
    const earned   = topics.reduce((sum, t) => sum + (state.starRatings[subject + '/' + t] || 0), 0);
    const expected = Math.round((earned / maxStars) * 100);
    if (result !== expected) {
      allPassed = false;
      counterExample = { subject, result, expected, earned, maxStars };
      break;
    }
  }

  // Reset star ratings
  Object.keys(QUESTION_BANK).forEach(subj => {
    Object.keys(QUESTION_BANK[subj]).forEach(t => {
      state.starRatings[subj + '/' + t] = 0;
    });
  });

  if (allPassed) {
    assert(true, `P5: getProgressPercentage is integer in [0,100] and matches formula for ${ITERATIONS} random inputs`);
  } else {
    assert(false, `P5 FAILED — counterexample: ${JSON.stringify(counterExample)}`);
  }
}

// ── Property 6: Mock Test Question Count and Per-Topic Distribution ────────────
// Feature: olympistar, Property 6: Mock Test Question Count and Per-Topic Distribution
// Validates: Requirements 9.2
section('Property 6 — Mock Question Count and Distribution (100 iterations)');
{
  const subjects = Object.keys(QUESTION_BANK);
  let allPassed = true;
  let counterExample = null;

  for (let i = 0; i < ITERATIONS; i++) {
    const subject  = subjects[randInt(0, subjects.length - 1)];
    const topics   = Object.keys(QUESTION_BANK[subject]);
    const n        = CONFIG.mockQuestionCount; // 35
    const base     = Math.floor(n / topics.length);
    const ceil     = base + 1;

    const questions = selectMockQuestions(subject);

    // Check total count
    if (questions.length !== n) {
      allPassed = false;
      counterExample = { subject, length: questions.length, expected: n, reason: 'wrong total count' };
      break;
    }

    // Check per-topic distribution
    const topicCounts = {};
    topics.forEach(t => { topicCounts[t] = 0; });
    questions.forEach(q => { topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1; });

    let distributionOk = true;
    for (const t of topics) {
      const count = topicCounts[t] || 0;
      if (count !== base && count !== ceil) {
        distributionOk = false;
        counterExample = { subject, topic: t, count, base, ceil, reason: 'topic count out of floor/ceil range' };
        break;
      }
    }
    if (!distributionOk) {
      allPassed = false;
      break;
    }
  }

  if (allPassed) {
    assert(true, `P6: selectMockQuestions returns exactly 35 with floor/ceil distribution for ${ITERATIONS} random calls`);
  } else {
    assert(false, `P6 FAILED — counterexample: ${JSON.stringify(counterExample)}`);
  }
}

// ── Property 7: Encouragement Message Comes from the Correct Score Band ────────
// Feature: olympistar, Property 7: Encouragement Message Comes from the Correct Score Band
// Validates: Requirements 7.2
section('Property 7 — Encouragement Message Band Selection (100 iterations)');
{
  let allPassed = true;
  let counterExample = null;

  for (let i = 0; i < ITERATIONS; i++) {
    const score   = randInt(0, 5);
    const message = getEncouragementMessage(score);

    let expectedBand;
    if (score === 5)     expectedBand = CONFIG.encouragement.top;
    else if (score >= 3) expectedBand = CONFIG.encouragement.mid;
    else                 expectedBand = CONFIG.encouragement.low;

    if (!expectedBand.includes(message)) {
      allPassed = false;
      counterExample = { score, message, expectedBand };
      break;
    }
  }

  if (allPassed) {
    assert(true, `P7: getEncouragementMessage returns message from correct band for ${ITERATIONS} random scores`);
  } else {
    assert(false, `P7 FAILED — counterexample: ${JSON.stringify(counterExample)}`);
  }
}

// ── Property 8: Question Bank Structural Integrity ────────────────────────────
// Feature: olympistar, Property 8: Question Bank Structural Integrity
// Validates: Requirements 5.4, 5.6, 5.8
section('Property 8 — Question Bank Structural Integrity (all questions)');
{
  let allPassed = true;
  const issues = [];

  for (const subject of Object.keys(QUESTION_BANK)) {
    for (const topic of Object.keys(QUESTION_BANK[subject])) {
      const questions = QUESTION_BANK[subject][topic];
      const seenTexts = new Set();

      for (const q of questions) {
        // Non-empty text
        if (typeof q.text !== 'string' || q.text.trim() === '') {
          issues.push(`${subject}/${topic}: empty or missing text`);
          allPassed = false;
        }

        // Exactly 4 non-empty options
        if (!Array.isArray(q.options) || q.options.length !== 4) {
          issues.push(`${subject}/${topic} "${q.text}": options count is ${q.options ? q.options.length : 'N/A'}, expected 4`);
          allPassed = false;
        } else {
          q.options.forEach((opt, idx) => {
            if (typeof opt !== 'string' || opt.trim() === '') {
              issues.push(`${subject}/${topic} "${q.text}": option[${idx}] is empty`);
              allPassed = false;
            }
          });
        }

        // correct in [0, 3]
        if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) {
          issues.push(`${subject}/${topic} "${q.text}": correct=${q.correct} not in [0,3]`);
          allPassed = false;
        }

        // Non-empty explanation
        if (typeof q.explanation !== 'string' || q.explanation.trim() === '') {
          issues.push(`${subject}/${topic} "${q.text}": empty or missing explanation`);
          allPassed = false;
        }

        // Distinct text within topic
        if (seenTexts.has(q.text)) {
          issues.push(`${subject}/${topic}: duplicate question text "${q.text}"`);
          allPassed = false;
        }
        seenTexts.add(q.text);
      }
    }
  }

  if (allPassed) {
    // Count total questions checked
    let total = 0;
    Object.keys(QUESTION_BANK).forEach(s =>
      Object.keys(QUESTION_BANK[s]).forEach(t => { total += QUESTION_BANK[s][t].length; })
    );
    assert(true, `P8: all ${total} questions pass structural integrity checks`);
  } else {
    issues.slice(0, 5).forEach(issue => {
      assert(false, `P8 FAILED — ${issue}`);
    });
    if (issues.length > 5) {
      console.log(`  ... and ${issues.length - 5} more issues`);
    }
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n══════════════════════════════════════════');
console.log(`Results: ${passed} passed, ${failed} failed`);
if (failures.length > 0) {
  console.log('\nFailed tests:');
  failures.forEach(f => console.log('  ✗ ' + f));
  process.exit(1);
} else {
  console.log('All tests passed! ✓');
  process.exit(0);
}
