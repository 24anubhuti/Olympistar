// OlympiStar — main application file
// Implements CONFIG, state, Storage, pure functions, screen routing, and all UI logic.

const CONFIG = {
  colours: {
    Reasoning: '#9B59B6',
    Math:      '#E67E22',
    Science:   '#27AE60',
    English:   '#2980B9'
  },
  quizQuestionCount:     20,
  mockQuestionCount:     35,
  mockDurationSeconds:   3600,
  badgeThresholds: {
    Bronze:  1,
    Silver:  3,
    Gold:    4,
    Diamond: 5
  },
  badgeOrder: ['Bronze', 'Silver', 'Gold', 'Diamond'],
  badgeEmoji: {
    Bronze:  '🥉',
    Silver:  '🥈',
    Gold:    '🥇',
    Diamond: '💎'
  },
  storagePrefix: 'olympistar_',
  encouragement: {
    top:  ["Perfect! You're a star! 🌟", "Amazing! Full marks! 🎉"],
    mid:  ["Great job! Keep it up! 💪", "Well done! Almost there! 😊"],
    low:  ["Keep practising! You'll get there! 😊", "Good try! Try again! 🌈"]
  },
  bounceAnimationMin:       300,
  bounceAnimationMax:       600,
  celebrationAnimationMin:  2000,
  celebrationAnimationMax:  4000
};

// ── State ──────────────────────────────────────────────────
const state = {
  currentSubject:   null,
  currentTopic:     null,
  currentScreen:    'home',

  // Quiz session
  quizQuestions:    [],
  quizIndex:        0,
  quizScore:        0,
  quizAnswered:     false,

  // Mock test session
  mockQuestions:    [],
  mockIndex:        0,
  mockScore:        0,
  mockTimeLeft:     0,
  mockTimerHandle:  null,
  mockAnswered:     false,

  // Progress (loaded from localStorage on init)
  starRatings:      {},
  badges:           {},
  streak:           0,
  lastPracticeDate: null
};

// ── Storage service ────────────────────────────────────────
const Storage = {
  _available: true,

  get(key) {
    try {
      return localStorage.getItem(CONFIG.storagePrefix + key);
    } catch (e) {
      this._available = false;
      return null;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(CONFIG.storagePrefix + key, value);
    } catch (e) {
      this._available = false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(CONFIG.storagePrefix + key);
    } catch (e) {
      this._available = false;
    }
  },

  clearAll() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(CONFIG.storagePrefix))
        .forEach(k => localStorage.removeItem(k));
    } catch (e) {
      this._available = false;
    }
  }
};

// ── Badge calculator ───────────────────────────────────────
function getBadgeForStars(stars) {
  if (stars >= CONFIG.badgeThresholds.Diamond) return 'Diamond';
  if (stars >= CONFIG.badgeThresholds.Gold)    return 'Gold';
  if (stars >= CONFIG.badgeThresholds.Silver)  return 'Silver';
  if (stars >= CONFIG.badgeThresholds.Bronze)  return 'Bronze';
  return 'none';
}

function badgeRank(badge) {
  if (badge === 'none') return 0;
  return CONFIG.badgeOrder.indexOf(badge) + 1;
}

// ── Streak calculator ──────────────────────────────────────
function calculateNewStreak(lastDate, currentStreak, todayStr) {
  if (!lastDate) return 1;                           // first ever session
  if (lastDate === todayStr) return currentStreak;   // already practised today
  const last  = new Date(lastDate);
  const today = new Date(todayStr);
  const diffDays = Math.round((today - last) / 86400000);
  if (diffDays === 1) return currentStreak + 1;      // consecutive day
  return 1;                                          // gap > 1 day → reset to 1
}

// ── Progress calculator ────────────────────────────────────
function getProgressPercentage(subject) {
  const topics  = Object.keys(QUESTION_BANK[subject]);
  const maxStars = topics.length * CONFIG.quizQuestionCount;  // 20 per topic
  const earned   = topics.reduce(
    (sum, t) => sum + (state.starRatings[subject + '/' + t] || 0), 0
  );
  return maxStars === 0 ? 0 : Math.round((earned / maxStars) * 100);
}

// ── Shuffle helper ─────────────────────────────────────────
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Mock question selector ─────────────────────────────────
// Req 9.2: distributes 35 questions across all topics using floor/ceil
function selectMockQuestions(subject) {
  const topics    = Object.keys(QUESTION_BANK[subject]);
  const n         = CONFIG.mockQuestionCount;   // 35
  const base      = Math.floor(n / topics.length);
  const remainder = n % topics.length;
  const extraTopics = shuffle(topics).slice(0, remainder);
  const selected  = [];
  topics.forEach(topic => {
    const count = base + (extraTopics.includes(topic) ? 1 : 0);
    const qs    = shuffle(QUESTION_BANK[subject][topic]).slice(0, count);
    qs.forEach(q => selected.push({ ...q, topic }));
  });
  return shuffle(selected);
}

// ── Encouragement message selector ────────────────────────
// Req 7.2: top for 20, mid for 15-16, low for 5-6
function getEncouragementMessage(score) {
  let band;
  if (score === 20)     band = CONFIG.encouragement.top;
  else if (score >= 15) band = CONFIG.encouragement.mid;
  else                 band = CONFIG.encouragement.low;
  return band[Math.floor(Math.random() * band.length)];
}

// ── Screen router ──────────────────────────────────────────
// Req 12.2: hides all screens, shows target
function showScreen(screenId) {
  document.querySelectorAll('section.screen').forEach(s => { s.hidden = true; });
  document.getElementById(screenId).hidden = false;
  state.currentScreen = screenId;
}

// ── Progress loader ────────────────────────────────────────
// Req 12.2, 12.3: reads from localStorage, falls back to defaults
function loadProgress() {
  // Load star ratings and badges for all topics
  Object.keys(QUESTION_BANK).forEach(subject => {
    Object.keys(QUESTION_BANK[subject]).forEach(topic => {
      const key = subject + '/' + topic;
      const storedStars = Storage.get('star_' + key);
      state.starRatings[key] = storedStars !== null ? (parseInt(storedStars, 10) || 0) : 0;
      const storedBadge = Storage.get('badge_' + key);
      state.badges[key] = storedBadge || 'none';
    });
  });

  // Load streak
  const storedStreak = Storage.get('streak');
  state.streak = storedStreak !== null ? (parseInt(storedStreak, 10) || 0) : 0;

  // Load last practice date
  const storedDate = Storage.get('lastPracticeDate');
  state.lastPracticeDate = storedDate || null;
}

// ── App initialisation ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  showScreen('screen-home');
  renderHomeScreen();
});

// ── Star renderer ──────────────────────────────────────────
// Req 4.2: returns a string of ⭐ (filled) and ☆ (empty) chars
// e.g. renderStars(3) → "⭐⭐⭐☆☆"
function renderStars(rating) {
const safeRating = Math.max(0, Math.min(5, Math.round(rating)));  
const filled = '⭐'.repeat(safeRating);
  const empty  = '☆'.repeat(5 - safeRating);
  return filled + empty;
}

// ── Home Screen renderer ───────────────────────────────────
// Req 3.1–3.8, 8.6, 8.7
function renderHomeScreen() {
  // 1. Update streak display (Req 3.7, 8.6, 8.7)
  const streakEl = document.getElementById('streak-count');
  if (streakEl) {
    streakEl.textContent = state.streak;
  }

  // 2. Populate subject cards (Req 3.2–3.6)
  const container = document.getElementById('subject-cards');
  if (!container) return;

  container.innerHTML = '';   // clear any previous cards

  const subjects = [
    { name: 'Reasoning', emoji: '🧩' },
    { name: 'Math',      emoji: '🔢' },
    { name: 'Science',   emoji: '🔬' },
    { name: 'English',   emoji: '📖' }
  ];

  subjects.forEach(({ name, emoji }) => {
    const pct   = getProgressPercentage(name);   // integer 0–100
    const colour = CONFIG.colours[name];

    // Card element
    const card = document.createElement('div');
    card.className  = 'subject-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', name + ' subject, ' + pct + '% complete');
    card.style.backgroundColor = colour;
    card.style.minHeight = '44px';   // Req 11.8
    card.style.minWidth  = '44px';   // Req 11.8

    // Emoji
    const emojiEl = document.createElement('span');
    emojiEl.className   = 'subject-emoji';
    emojiEl.textContent = emoji;
    emojiEl.setAttribute('aria-hidden', 'true');

    // Subject name (Req 3.8 — min 22px, handled by .subject-name in style.css)
    const nameEl = document.createElement('span');
    nameEl.className   = 'subject-name';
    nameEl.textContent = name;

    // Progress percentage text
    const pctEl = document.createElement('span');
    pctEl.className   = 'subject-progress-text';
    pctEl.textContent = pct + '%';

    // Progress bar (Req 3.4)
    const barWrap = document.createElement('div');
    barWrap.className = 'progress-bar';
    barWrap.setAttribute('role', 'progressbar');
    barWrap.setAttribute('aria-valuenow', pct);
    barWrap.setAttribute('aria-valuemin', '0');
    barWrap.setAttribute('aria-valuemax', '100');
    barWrap.setAttribute('aria-label', name + ' progress');

    const barFill = document.createElement('div');
    barFill.className = 'progress-fill';
    barFill.style.width = pct + '%';

    barWrap.appendChild(barFill);

    // Assemble card
    card.appendChild(emojiEl);
    card.appendChild(nameEl);
    card.appendChild(pctEl);
    card.appendChild(barWrap);

    // Click handler (Req 3.6) — also handles keyboard Enter/Space
    function navigateToTopics() {
      state.currentSubject = name;
      showScreen('screen-topics');
      renderTopicsScreen();
    }

    card.addEventListener('click', navigateToTopics);
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToTopics();
      }
    });

    container.appendChild(card);
  });

  // 3. Wire up Reset Progress button (Req 12.6)
  const resetBtn = document.getElementById('btn-reset-progress');
  if (resetBtn) {
    // Remove any previously attached listener to avoid duplicates
    resetBtn.replaceWith(resetBtn.cloneNode(true));
    const freshResetBtn = document.getElementById('btn-reset-progress');
    freshResetBtn.addEventListener('click', function () {
      resetProgress();
    });
  }
}

// ── Topic Selection Screen renderer ───────────────────────
// Req 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 9.1, 10.6
function renderTopicsScreen() {
  const subject = state.currentSubject;

  // Subject emoji map (Req 4.6)
  const subjectEmojis = {
    Reasoning: '🧩',
    Math:      '🔢',
    Science:   '🔬',
    English:   '📖'
  };

  // 1. Set subject heading (Req 4.6)
  const headingEl = document.getElementById('topics-subject-heading');
  if (headingEl) {
    headingEl.textContent = (subjectEmojis[subject] || '') + ' ' + subject;
  }

  // 2. Wire Back button (Req 4.4)
  const backBtn = document.getElementById('btn-topics-back');
  if (backBtn) {
    // Clone to remove any previously attached listeners
    const freshBack = backBtn.cloneNode(true);
    backBtn.parentNode.replaceChild(freshBack, backBtn);
    freshBack.addEventListener('click', function () {
      showScreen('screen-home');
      renderHomeScreen();
    });
  }

  // 3. Wire Mock Test button (Req 9.1)
  const mockBtn = document.getElementById('btn-mock-test');
  if (mockBtn) {
    const freshMock = mockBtn.cloneNode(true);
    mockBtn.parentNode.replaceChild(freshMock, mockBtn);
    freshMock.addEventListener('click', function () {
      startMockTest();
    });
  }

  // 4. Populate topic cards (Req 4.1, 4.2, 4.3, 4.5, 10.6)
  const container = document.getElementById('topic-cards');
  if (!container) return;

  container.innerHTML = '';   // clear previous cards

  const topics = Object.keys(QUESTION_BANK[subject] || {});

  topics.forEach(function (topic) {
    const key    = subject + '/' + topic;
    const rating = state.starRatings[key] || 0;
    const badge  = state.badges[key] || 'none';

    // Card element
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('tabindex', '0');
    card.style.minHeight = '44px';   // Req 11.8
    card.style.minWidth  = '44px';   // Req 11.8

    // Build aria-label for accessibility
    let ariaLabel = topic + ', ' + rating + ' out of 5 stars';
    if (badge !== 'none') {
      ariaLabel += ', ' + badge + ' badge';
    }
    if (rating === 5) {
      ariaLabel += ', Mastered';
    }
    card.setAttribute('aria-label', ariaLabel);

    // Topic name
    const nameEl = document.createElement('div');
    nameEl.className   = 'topic-name';
    nameEl.textContent = topic;

    // Star rating (Req 4.2)
    const starsEl = document.createElement('div');
    starsEl.className   = 'star-display';
    starsEl.textContent = renderStars(rating);
    starsEl.setAttribute('aria-hidden', 'true');   // already in aria-label

    card.appendChild(nameEl);
    card.appendChild(starsEl);

    // Badge indicator — only if badge has been earned (Req 4.2, 10.6)
    // No badge indicator shown if Star_Rating = 0 (Req 4.2)
    if (badge !== 'none' && rating > 0) {
      const badgeEl = document.createElement('div');
      badgeEl.className = 'badge-display';
      const emojiSpan   = document.createElement('span');
      emojiSpan.className   = 'badge-emoji';
      emojiSpan.textContent = CONFIG.badgeEmoji[badge] || '';
      emojiSpan.setAttribute('aria-hidden', 'true');
      const labelSpan   = document.createElement('span');
      labelSpan.textContent = badge;
      badgeEl.appendChild(emojiSpan);
      badgeEl.appendChild(labelSpan);
      badgeEl.setAttribute('aria-hidden', 'true');   // already in aria-label
      card.appendChild(badgeEl);
    }

    // "Mastered! ✅" label if Star_Rating = 5 (Req 4.3)
    if (rating === CONFIG.quizQuestionCount) {
      const masteredEl = document.createElement('div');
      masteredEl.className   = 'mastered-label';
      masteredEl.textContent = 'Mastered! ✅';
      masteredEl.setAttribute('aria-hidden', 'true');   // already in aria-label
      card.appendChild(masteredEl);
    }

    // Click handler — navigate to quiz for this topic (Req 4.5)
    function navigateToQuiz() {
      state.currentTopic = topic;
      startQuiz();
    }

    card.addEventListener('click', navigateToQuiz);

    // Keyboard support (Enter / Space) for accessibility
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToQuiz();
      }
    });

    container.appendChild(card);
  });
}

// ── Quiz Mode ──────────────────────────────────────────────
// Req 6.1, 6.2, 6.11

/**
 * startQuiz()
 * Called when a topic card is clicked.
 * Initialises the quiz session state and navigates to the quiz screen.
 */
function startQuiz() {
  // Populate quiz questions from the question bank for the selected topic
  state.quizQuestions = QUESTION_BANK[state.currentSubject][state.currentTopic];

  // Reset session counters (Req 6.1)
  state.quizIndex    = 0;
  state.quizScore    = 0;
  state.quizAnswered = false;

  // Navigate to quiz screen (Req 6.1)
  // The quiz screen header has no Back/Exit button by design (Req 6.11)
  showScreen('screen-quiz');

  // Render the first question
  renderQuizQuestion();
}

/**
 * renderQuizQuestion()
 * Renders the current question (state.quizIndex) in a clean state:
 * - Updates question number and text
 * - Populates and resets all 4 option buttons
 * - Hides explanation and Next/See Results button
 * Satisfies Req 6.2 (question display) and Req 6.10 (clean state on advance).
 */
function renderQuizQuestion() {
  const q = state.quizQuestions[state.quizIndex];
  const optionLabels = ['A', 'B', 'C', 'D'];

  // Update question number display (Req 6.2)
  const questionNumberEl = document.getElementById('quiz-question-number');
  if (questionNumberEl) {
    questionNumberEl.textContent = 'Question ' + (state.quizIndex + 1) + ' of ' + CONFIG.quizQuestionCount;
  }

  // Update question text (Req 6.2)
  const questionTextEl = document.getElementById('quiz-question-text');
  if (questionTextEl) {
    questionTextEl.textContent = q.text;
  }

  // Reset and populate each option button (Req 6.2, 6.10)
  for (let i = 0; i < 4; i++) {
    const btn     = document.getElementById('quiz-option-' + i);
    const textSpan = document.getElementById('quiz-option-text-' + i);

    if (!btn || !textSpan) continue;

    // Set option text
    textSpan.textContent = q.options[i];

    // Update aria-label for accessibility (Req 6.2)
    btn.setAttribute('aria-label', 'Option ' + optionLabels[i] + ': ' + q.options[i]);

    // Enable the button (Req 6.10 — clean state)
    btn.disabled = false;

    // Remove any feedback CSS classes from a previous question (Req 6.10)
    btn.classList.remove('correct', 'incorrect', 'bounce-anim');

    // Attach click handler — replace the button's clone to avoid stacking listeners
    const freshBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(freshBtn, btn);

    // Re-fetch after clone replacement
    const newBtn      = document.getElementById('quiz-option-' + i);
    const newTextSpan = document.getElementById('quiz-option-text-' + i);

    // Restore text and aria-label on the cloned button
    if (newTextSpan) newTextSpan.textContent = q.options[i];
    if (newBtn) {
      newBtn.setAttribute('aria-label', 'Option ' + optionLabels[i] + ': ' + q.options[i]);
      newBtn.disabled = false;
      newBtn.classList.remove('correct', 'incorrect', 'bounce-anim');

      // Capture index in closure
      (function (optionIndex) {
        newBtn.addEventListener('click', function () {
          handleQuizAnswer(optionIndex);
        });
      })(i);
    }
  }

  // Hide explanation (Req 6.10)
  const explanationEl = document.getElementById('quiz-explanation');
  if (explanationEl) {
    explanationEl.hidden = true;
  }

  // Hide Next/See Results button (Req 6.10)
  const nextBtn = document.getElementById('btn-quiz-next');
  if (nextBtn) {
    nextBtn.hidden = true;
  }

  // Req 6.11: The quiz screen header intentionally has no Back/Exit button in the HTML.
  // No additional action needed here — the HTML structure already satisfies this requirement.
}

// ── Quiz Answer Handler ────────────────────────────────────
// Tasks 7.2 & 7.3 — Requirements: 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 6.10

/**
 * handleQuizAnswer(selectedIndex)
 * Called when the user clicks one of the four option buttons.
 * Applies feedback colours, shows explanation, tracks score,
 * and reveals the Next / See Results button.
 *
 * @param {number} selectedIndex - 0-based index of the clicked option
 */
function handleQuizAnswer(selectedIndex) {
  // Guard: prevent double-click / re-answering (Req 6.5)
  if (state.quizAnswered) return;
  state.quizAnswered = true;

  const q = state.quizQuestions[state.quizIndex];

  // ── 1. Apply feedback colours (Req 6.3) ──────────────────
  const selectedBtn = document.getElementById('quiz-option-' + selectedIndex);
  const correctBtn  = document.getElementById('quiz-option-' + q.correct);

  if (selectedIndex === q.correct) {
    // Correct answer: green highlight + bounce animation (Req 6.3, 6.7)
    state.quizScore += 1;

    if (selectedBtn) {
      selectedBtn.classList.add('correct');
      selectedBtn.classList.add('bounce-anim');

      // Remove bounce-anim after CONFIG.bounceAnimationMax ms (Req 6.7)
      setTimeout(function () {
        selectedBtn.classList.remove('bounce-anim');
      }, CONFIG.bounceAnimationMax);
    }
  } else {
    // Wrong answer: red on selected, green on correct (Req 6.3)
    if (selectedBtn) {
      selectedBtn.classList.add('incorrect');
    }
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }
  }

  // ── 2. Disable all 4 option buttons (Req 6.5) ────────────
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById('quiz-option-' + i);
    if (btn) btn.disabled = true;
  }

  // ── 3. Show explanation (Req 6.4) ────────────────────────
  const explanationEl     = document.getElementById('quiz-explanation');
  const explanationTextEl = document.getElementById('quiz-explanation-text');

  if (explanationTextEl) {
    explanationTextEl.textContent = q.explanation;
  }
  if (explanationEl) {
    explanationEl.hidden = false;
  }

  // ── 4. Show Next / See Results button (Req 6.6) ──────────
  const nextBtn = document.getElementById('btn-quiz-next');
  if (nextBtn) {
    // Use cloneNode to remove any previously attached click listeners
    const freshNextBtn = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(freshNextBtn, nextBtn);

    const activeNextBtn = document.getElementById('btn-quiz-next');
    if (activeNextBtn) {
      // Label: "See Results 🏁" on final question, "Next ➡️" otherwise (Req 6.6)
      const isFinalQuestion = (state.quizIndex === state.quizQuestions.length - 1);
      activeNextBtn.textContent = isFinalQuestion ? 'See Results 🏁' : 'Next ➡️';
      activeNextBtn.hidden = false;

      // Wire click handler to advanceQuiz
      activeNextBtn.addEventListener('click', function () {
        advanceQuiz();
      });
    }
  }
}

// ── Quiz Advance ───────────────────────────────────────────
/**
 * advanceQuiz()
 * Called when the user clicks "Next" or "See Results".
 * Either increments quizIndex and re-renders the next question
 * in a clean state, or navigates to the Quiz Results screen.
 *
 * Requirements: 6.9, 6.10
 */
function advanceQuiz() {
  if (state.quizIndex < state.quizQuestions.length - 1) {
    // Advance to next question in clean state (Req 6.10)
    state.quizIndex   += 1;
    state.quizAnswered = false;
    renderQuizQuestion();
  } else {
    // Final question answered — navigate to results (Req 6.9)
    showQuizResults();
  }
}

// ── Quiz Results Screen ────────────────────────────────────
// Task 8.1 — Requirements: 7.1, 7.2, 7.7, 7.8, 7.9

/**
 * showQuizResults()
 * Saves progress first (star rating, badge, streak, localStorage), then
 * navigates to the Quiz Results screen and populates all result elements:
 *  - Score line: "You got N out of 20! 🌟"
 *  - Encouragement message from the correct score band
 *  - Updated Star_Rating rendered as filled/empty stars (after max logic)
 *  - Updated Badge label; "🥇 Gold Badge Earned!" style label on upgrade
 *  - Triggers Celebration_Animation when badge is upgraded
 *  - "Try Again" and "Choose Another Topic" button handlers
 *
 * Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9,
 *               8.1–8.5, 10.3, 10.4, 10.5, 12.4
 */
function showQuizResults() {
  // ── 0. Save progress (Req 7.3, 7.4, 7.5, 7.6, 8.1–8.5, 10.3, 10.4, 12.4)
  // Must happen BEFORE reading state for display so we show updated values.
  const { badgeUpgraded, newBadge } = saveQuizProgress();

  // ── 1. Navigate to results screen ────────────────────────
  showScreen('screen-quiz-results');

  // ── 2. Score display (Req 7.1) ────────────────────────────
  const scoreEl = document.getElementById('quiz-results-score');
  if (scoreEl) {
    scoreEl.textContent = 'You got ' + state.quizScore + ' out of 20! 🌟';
  }

  // ── 3. Encouragement message (Req 7.2) ───────────────────
  const encouragementEl = document.getElementById('quiz-results-encouragement');
  if (encouragementEl) {
    encouragementEl.textContent = getEncouragementMessage(state.quizScore);
  }

  // ── 4. Star rating display — UPDATED value (Req 7.7) ─────
  // state.starRatings[topicKey] has already been updated by saveQuizProgress()
  const topicKey          = state.currentSubject + '/' + state.currentTopic;
  const updatedStarRating = state.starRatings[topicKey] || 0;

  const starsEl = document.getElementById('quiz-results-stars');
  if (starsEl) {
    starsEl.textContent = renderStars(updatedStarRating);
  }

  // ── 5. Badge display — UPDATED value (Req 7.6, 7.7) ──────
  const badgeEl = document.getElementById('quiz-results-badge');
  if (badgeEl) {
    const updatedBadge = state.badges[topicKey] || 'none';

    if (badgeUpgraded) {
      // Badge was just upgraded — show "Earned!" announcement (Req 7.6)
      const emoji = CONFIG.badgeEmoji[newBadge] || '';
      badgeEl.textContent = emoji + ' ' + newBadge + ' Badge Earned!';
    } else if (updatedBadge !== 'none') {
      // Badge exists but was not upgraded this session
      const emoji = CONFIG.badgeEmoji[updatedBadge] || '';
      badgeEl.textContent = emoji + ' ' + updatedBadge + ' Badge';
    } else {
      badgeEl.textContent = '';
    }
  }

  // ── 6. Celebration animation on badge upgrade (Req 7.6, 10.4) ──
  if (badgeUpgraded) {
    triggerCelebration();   // implemented in task 9.1
  }

  // ── 7. "Try Again" button (Req 7.8) ──────────────────────
  const tryAgainBtn = document.getElementById('btn-quiz-try-again');
  if (tryAgainBtn) {
    const freshTryAgain = tryAgainBtn.cloneNode(true);
    tryAgainBtn.parentNode.replaceChild(freshTryAgain, tryAgainBtn);
    document.getElementById('btn-quiz-try-again').addEventListener('click', function () {
      startQuiz();
    });
  }

  // ── 8. "Choose Another Topic" button (Req 7.9) ───────────
  const chooseTopicBtn = document.getElementById('btn-quiz-choose-topic');
  if (chooseTopicBtn) {
    const freshChooseTopic = chooseTopicBtn.cloneNode(true);
    chooseTopicBtn.parentNode.replaceChild(freshChooseTopic, chooseTopicBtn);
    document.getElementById('btn-quiz-choose-topic').addEventListener('click', function () {
      showScreen('screen-topics');
      renderTopicsScreen();
    });
  }
}

// ── Save Quiz Progress ─────────────────────────────────────
// Task 8.2 — Requirements: 7.3, 7.4, 7.5, 7.6, 8.1, 8.2, 8.3, 8.4, 8.5,
//                          10.3, 10.4, 10.5, 12.4
/**
 * saveQuizProgress()
 * Called at the start of showQuizResults() to persist all progress updates.
 *
 * Steps:
 *  1. Update star rating to max(previous, newScore) — never decrease (Req 7.3)
 *  2. Recalculate badge; if upgraded, set flag and update state (Req 10.3, 10.4)
 *  3. Update streak using calculateNewStreak with today's date (Req 8.1–8.5)
 *  4. Write star rating, badge, streak, lastPracticeDate to localStorage
 *     within 500 ms of session end (Req 7.4, 12.4)
 *
 * @returns {{ badgeUpgraded: boolean, newBadge: string }}
 */
function saveQuizProgress() {
  const topicKey = state.currentSubject + '/' + state.currentTopic;

  // ── 1. Star rating update (Req 7.3) ──────────────────────
  const previousStars = state.starRatings[topicKey] || 0;
  const newScore      = state.quizScore;
  state.starRatings[topicKey] = Math.max(previousStars, newScore);

  // ── 2. Badge upgrade check (Req 10.3, 10.4, 10.5) ────────
  const previousBadge = state.badges[topicKey] || 'none';
  const newBadge      = getBadgeForStars(state.starRatings[topicKey]);
  let badgeUpgraded   = false;

  if (badgeRank(newBadge) > badgeRank(previousBadge)) {
    state.badges[topicKey] = newBadge;
    badgeUpgraded = true;
  }

  // ── 3. Streak update (Req 8.1–8.5) ───────────────────────
  const today = new Date();
  const todayStr = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');

  state.streak          = calculateNewStreak(state.lastPracticeDate, state.streak, todayStr);
  state.lastPracticeDate = todayStr;

  // ── 4. Persist to localStorage (Req 7.4, 12.4) ───────────
  // All writes happen synchronously here — well within 500 ms of session end.
  Storage.set('star_'  + topicKey, state.starRatings[topicKey]);
  Storage.set('badge_' + topicKey, state.badges[topicKey]);
  Storage.set('streak',            state.streak);
  Storage.set('lastPracticeDate',  state.lastPracticeDate);

  return { badgeUpgraded, newBadge };
}

// ── Celebration Animation ──────────────────────────────────
// Task 9.1 — Requirements: 10.4, 10.5, 11.6, 11.7

/**
 * triggerCelebration()
 * Injects coloured confetti <span> elements into #celebration-overlay,
 * applies .celebrate-anim to activate the overlay, then cleans up after
 * CONFIG.celebrationAnimationMax ms.
 *
 * Called only when a badge is upgraded (badgeUpgraded === true).
 * No animation is triggered when the badge level is unchanged (Req 10.5).
 *
 * Requirements: 10.4, 10.5, 11.6, 11.7
 */
function triggerCelebration() {
  const overlay = document.getElementById('celebration-overlay');
  if (!overlay) return;

  // ── 1. Clear any confetti from a previous celebration ─────
  // Remove all child <span> elements left over from a prior run.
  overlay.querySelectorAll('.confetti').forEach(function (el) {
    el.remove();
  });

  // ── 2. Build the colour palette from CONFIG ───────────────
  // Use the four subject colours so confetti matches the app palette.
  const colours = [
    CONFIG.colours.Reasoning,   // purple  #9B59B6
    CONFIG.colours.Math,        // orange  #E67E22
    CONFIG.colours.Science,     // green   #27AE60
    CONFIG.colours.English      // blue    #2980B9
  ];

  // ── 3. Decide how many confetti pieces to create (30–50) ──
  const count = 30 + Math.floor(Math.random() * 21);   // [30, 50]

  // ── 4. Create and inject confetti spans ───────────────────
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'confetti';

    // Random horizontal position across the full viewport width
    span.style.left = Math.random() * 100 + '%';

    // Random colour from the CONFIG palette
    span.style.backgroundColor = colours[Math.floor(Math.random() * colours.length)];

    // Random fall duration between celebrationAnimationMin and celebrationAnimationMax ms
    // This satisfies the 2–4 s duration requirement (Req 10.4, 11.7).
    const duration = CONFIG.celebrationAnimationMin +
      Math.random() * (CONFIG.celebrationAnimationMax - CONFIG.celebrationAnimationMin);
    span.style.animationDuration = duration + 'ms, ' + duration + 'ms';

    // Random stagger delay (0–1000 ms) so pieces don't all start at once
    const delay = Math.floor(Math.random() * 1001);   // [0, 1000] ms
    span.style.animationDelay = delay + 'ms, ' + delay + 'ms';

    overlay.appendChild(span);
  }

  // ── 5. Activate the overlay ───────────────────────────────
  overlay.classList.add('celebrate-anim');

  // ── 6. Clean up after the maximum animation duration ──────
  // Remove .celebrate-anim and all confetti spans so the overlay
  // is invisible and empty for the next potential celebration.
  setTimeout(function () {
    overlay.classList.remove('celebrate-anim');
    overlay.querySelectorAll('.confetti').forEach(function (el) {
      el.remove();
    });
  }, CONFIG.celebrationAnimationMax);
}

// ── Mock Test Mode ─────────────────────────────────────────
// Task 10.1 — Requirements: 9.1, 9.3, 9.5

/**
 * startMockTest()
 * Called when the "Mock Test" button is clicked on the Topic Selection screen.
 * Initialises the mock test session state, navigates to the mock test screen,
 * renders the first question, and starts the countdown timer.
 *
 * Steps:
 *  1. Clear any existing timer to prevent duplicate intervals
 *  2. Select 35 questions via selectMockQuestions(subject)
 *  3. Reset session counters (mockIndex, mockScore, mockAnswered)
 *  4. Set mockTimeLeft to CONFIG.mockDurationSeconds (3600)
 *  5. Navigate to screen-mock
 *  6. Render the first question (renderMockQuestion — implemented in task 10.2)
 *  7. Start the 1-second interval timer
 *  8. Call updateMockTimer() immediately so the initial time is displayed at once
 *
 * Requirements: 9.1, 9.3
 */
function startMockTest() {
  // ── 1. Clear any existing timer ──────────────────────────
  if (state.mockTimerHandle) {
    clearInterval(state.mockTimerHandle);
    state.mockTimerHandle = null;
  }

  // ── 2. Select 35 questions (Req 9.2) ─────────────────────
  state.mockQuestions = selectMockQuestions(state.currentSubject);

  // ── 3. Reset session counters ─────────────────────────────
  state.mockIndex    = 0;
  state.mockScore    = 0;
  state.mockAnswered = false;

  // ── 4. Set timer to 60 minutes (Req 9.3) ─────────────────
  state.mockTimeLeft = CONFIG.mockDurationSeconds;   // 3600

  // ── 5. Navigate to mock test screen ──────────────────────
  showScreen('screen-mock');

  // ── 6. Render the first question (task 10.2) ─────────────
  // renderMockQuestion() will be implemented in task 10.2.
  // Guard: only call if the function exists (avoids ReferenceError during
  // incremental development when task 10.2 has not yet been implemented).
  if (typeof renderMockQuestion === 'function') {
    renderMockQuestion();
  }

  // ── 7. Start the countdown interval (Req 9.3) ────────────
  state.mockTimerHandle = setInterval(updateMockTimer, 1000);

  // ── 8. Show initial time immediately (no 1-second blank) ─
  // updateMockTimer() decrements first, so we display the full time
  // by updating the DOM directly here before the first tick.
  const timerEl = document.getElementById('mock-timer');
  if (timerEl) {
    const mins = Math.floor(state.mockTimeLeft / 60);
    const secs = state.mockTimeLeft % 60;
    timerEl.textContent =
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  }
}

/**
 * updateMockTimer()
 * Called every 1000 ms by the setInterval started in startMockTest().
 * Decrements state.mockTimeLeft, updates the #mock-timer display in MM:SS
 * format, and — when the timer reaches 0 — clears the interval, locks all
 * option buttons, and navigates to the Mock Test Results screen.
 *
 * Requirements: 9.3, 9.5
 */
function updateMockTimer() {
  // ── 1. Decrement the counter ──────────────────────────────
  state.mockTimeLeft -= 1;

  // ── 2. Format as MM:SS (Req 9.3) ─────────────────────────
  const mins = Math.floor(state.mockTimeLeft / 60);
  const secs = state.mockTimeLeft % 60;
  const formatted =
    String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');

  // ── 3. Update the timer display ───────────────────────────
  const timerEl = document.getElementById('mock-timer');
  if (timerEl) {
    timerEl.textContent = formatted;
  }

  // ── 4. Handle timer expiry (Req 9.5) ─────────────────────
  if (state.mockTimeLeft <= 0) {
    // Stop the interval — must happen before any navigation to prevent
    // double-navigation if endMockTest() is slow (Req 9.5).
    clearInterval(state.mockTimerHandle);
    state.mockTimerHandle = null;

    // Lock all four option buttons so the user cannot answer after time is up
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById('mock-option-' + i);
      if (btn) btn.disabled = true;
    }

    // Navigate to Mock Test Results (task 10.3).
    // Guard: only call if the function exists (avoids ReferenceError during
    // incremental development when task 10.3 has not yet been implemented).
    if (typeof endMockTest === 'function') {
      endMockTest();
    }
  }
}

// ── Mock Test Question Rendering ──────────────────────────
// Task 10.2 — Requirements: 9.4, 9.8, 9.9, 11.6

/**
 * renderMockQuestion()
 * Renders the current mock test question (state.mockIndex) in a clean state:
 *  - Updates "Question N of 35" header
 *  - Populates question text and all 4 option buttons
 *  - Resets button state (enabled, no feedback classes)
 *  - Hides explanation
 *  - Wires Next and End Test Early buttons (using cloneNode to avoid duplicate listeners)
 *  - Sets state.mockAnswered = false
 *
 * Requirements: 9.4, 9.8, 9.9
 */
function renderMockQuestion() {
  const q = state.mockQuestions[state.mockIndex];
  const optionLabels = ['A', 'B', 'C', 'D'];

  // ── 1. Update question number display (Req 9.4) ───────────
  const questionNumberEl = document.getElementById('mock-question-number');
  if (questionNumberEl) {
    questionNumberEl.textContent = 'Question ' + (state.mockIndex + 1) + ' of ' + CONFIG.mockQuestionCount;
  }

  // ── 2. Update question text (Req 9.4) ─────────────────────
  const questionTextEl = document.getElementById('mock-question-text');
  if (questionTextEl) {
    questionTextEl.textContent = q.text;
  }

  // ── 3. Reset and populate each option button (Req 9.4, 9.8) ──
  for (let i = 0; i < 4; i++) {
    const btn      = document.getElementById('mock-option-' + i);
    const textSpan = document.getElementById('mock-option-text-' + i);

    if (!btn || !textSpan) continue;

    // Set option text
    textSpan.textContent = q.options[i];

    // Update aria-label for accessibility
    btn.setAttribute('aria-label', 'Option ' + optionLabels[i] + ': ' + q.options[i]);

    // Enable the button (clean state)
    btn.disabled = false;

    // Remove any feedback CSS classes from a previous question
    btn.classList.remove('correct', 'incorrect', 'bounce-anim');

    // Replace button with a clone to remove any previously attached click listeners
    const freshBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(freshBtn, btn);

    // Re-fetch after clone replacement and restore attributes
    const newBtn      = document.getElementById('mock-option-' + i);
    const newTextSpan = document.getElementById('mock-option-text-' + i);

    if (newTextSpan) newTextSpan.textContent = q.options[i];
    if (newBtn) {
      newBtn.setAttribute('aria-label', 'Option ' + optionLabels[i] + ': ' + q.options[i]);
      newBtn.disabled = false;
      newBtn.classList.remove('correct', 'incorrect', 'bounce-anim');

      // Attach click handler — capture index in closure
      (function (optionIndex) {
        newBtn.addEventListener('click', function () {
          handleMockAnswer(optionIndex);
        });
      })(i);
    }
  }

  // ── 4. Hide explanation (clean state) ─────────────────────
  const explanationEl = document.getElementById('mock-explanation');
  if (explanationEl) {
    explanationEl.hidden = true;
  }

  // ── 5. Wire "Next" button (Req 9.8) ───────────────────────
  // Use cloneNode to avoid stacking duplicate listeners across questions.
  const nextBtn = document.getElementById('btn-mock-next');
  if (nextBtn) {
    const freshNext = nextBtn.cloneNode(true);
    nextBtn.parentNode.replaceChild(freshNext, nextBtn);
    const activeNextBtn = document.getElementById('btn-mock-next');
    if (activeNextBtn) {
      activeNextBtn.addEventListener('click', function () {
        advanceMock();
      });
    }
  }

  // ── 6. Wire "End Test Early" button (Req 9.9) ─────────────
  // Use cloneNode to avoid stacking duplicate listeners.
  const endBtn = document.getElementById('btn-mock-end-early');
  if (endBtn) {
    const freshEnd = endBtn.cloneNode(true);
    endBtn.parentNode.replaceChild(freshEnd, endBtn);
    const activeEndBtn = document.getElementById('btn-mock-end-early');
    if (activeEndBtn) {
      activeEndBtn.addEventListener('click', function () {
        // Stop the timer before navigating away
        if (state.mockTimerHandle) {
          clearInterval(state.mockTimerHandle);
          state.mockTimerHandle = null;
        }
        if (typeof endMockTest === 'function') {
          endMockTest();
        }
      });
    }
  }

  // ── 7. Reset answered flag ────────────────────────────────
  state.mockAnswered = false;
}

// ── Mock Test Answer Handler ───────────────────────────────
/**
 * handleMockAnswer(selectedIndex)
 * Called when the user clicks one of the four option buttons during a mock test.
 * Applies feedback colours, shows explanation, tracks score, and disables buttons.
 *
 * Guard: if state.mockAnswered is already true, returns immediately to prevent
 * double-answering.
 *
 * Requirements: 9.4, 11.6
 *
 * @param {number} selectedIndex - 0-based index of the clicked option (0–3)
 */
function handleMockAnswer(selectedIndex) {
  // Guard: prevent double-click / re-answering
  if (state.mockAnswered) return;
  state.mockAnswered = true;

  const q = state.mockQuestions[state.mockIndex];

  // ── 1. Apply feedback and update score ────────────────────
  const selectedBtn = document.getElementById('mock-option-' + selectedIndex);
  const correctBtn  = document.getElementById('mock-option-' + q.correct);

  if (selectedIndex === q.correct) {
    // Correct answer: increment score, green highlight + bounce animation (Req 11.6)
    state.mockScore += 1;

    if (selectedBtn) {
      selectedBtn.classList.add('correct');
      selectedBtn.classList.add('bounce-anim');

      // Remove bounce-anim after CONFIG.bounceAnimationMax ms (Req 11.6)
      setTimeout(function () {
        selectedBtn.classList.remove('bounce-anim');
      }, CONFIG.bounceAnimationMax);
    }
  } else {
    // Wrong answer: red on selected, green on correct
    if (selectedBtn) {
      selectedBtn.classList.add('incorrect');
    }
    if (correctBtn) {
      correctBtn.classList.add('correct');
    }
  }

  // ── 2. Disable all 4 option buttons ───────────────────────
  for (let i = 0; i < 4; i++) {
    const btn = document.getElementById('mock-option-' + i);
    if (btn) btn.disabled = true;
  }

  // ── 3. Show explanation ────────────────────────────────────
  const explanationEl     = document.getElementById('mock-explanation');
  const explanationTextEl = document.getElementById('mock-explanation-text');

  if (explanationTextEl) {
    explanationTextEl.textContent = q.explanation;
  }
  if (explanationEl) {
    explanationEl.hidden = false;
  }
}

// ── Mock Test Advance ──────────────────────────────────────
/**
 * advanceMock()
 * Called when the user clicks "Next" during a mock test.
 *
 * If the user has NOT answered (state.mockAnswered === false), the question
 * counts as incorrect — no score increment — and we simply advance.
 *
 * If there are more questions remaining, increments mockIndex and re-renders.
 * On the final question, calls endMockTest() to navigate to results.
 *
 * Requirements: 9.8 (unanswered = incorrect), 9.9 (end test)
 */
function advanceMock() {
  // Note: if mockAnswered is false the user skipped — counts as incorrect
  // (no score increment needed; score is only incremented in handleMockAnswer).

  if (state.mockIndex < state.mockQuestions.length - 1) {
    // Advance to next question in clean state
    state.mockIndex   += 1;
    state.mockAnswered = false;
    renderMockQuestion();
  } else {
    // Final question reached — end the mock test
    // Stop the timer before navigating away
    if (state.mockTimerHandle) {
      clearInterval(state.mockTimerHandle);
      state.mockTimerHandle = null;
    }
    if (typeof endMockTest === 'function') {
      endMockTest();
    }
  }
}

// ── Mock Test Results Screen ───────────────────────────────
// Task 10.3 — Requirements: 9.6, 9.7

/**
 * endMockTest()
 * Called when the mock test ends (timer expiry, "End Test Early", or final
 * question answered and "Next" clicked).
 *
 * Steps:
 *  1. Stop the timer (guard: may already be stopped)
 *  2. Update streak (same logic as quiz — Req 9.7)
 *  3. Navigate to screen-mock-results
 *  4. Populate score, percentage, and performance message (Req 9.6)
 *  5. Wire "Back to Home" button
 *
 * Requirements: 9.6, 9.7
 */
function endMockTest() {
  // ── 1. Stop the timer (guard) ─────────────────────────────
  if (state.mockTimerHandle) {
    clearInterval(state.mockTimerHandle);
    state.mockTimerHandle = null;
  }

  // ── 2. Update streak (Req 9.7) ────────────────────────────
  // Mirror the same streak logic used in saveQuizProgress().
  const today = new Date();
  const todayStr = today.getFullYear() + '-' +
    String(today.getMonth() + 1).padStart(2, '0') + '-' +
    String(today.getDate()).padStart(2, '0');

  state.streak           = calculateNewStreak(state.lastPracticeDate, state.streak, todayStr);
  state.lastPracticeDate = todayStr;

  // Persist streak and last-practice date to localStorage (Req 12.4)
  Storage.set('streak',           state.streak);
  Storage.set('lastPracticeDate', state.lastPracticeDate);

  // ── 3. Navigate to results screen ────────────────────────
  showScreen('screen-mock-results');

  // ── 4. Populate results (Req 9.6) ─────────────────────────
  const score = state.mockScore;
  const total = CONFIG.mockQuestionCount;   // 35

  // Score display: "Score: N / 35"
  const scoreEl = document.getElementById('mock-results-score');
  if (scoreEl) {
    scoreEl.textContent = 'Score: ' + score + ' / ' + total;
  }

  // Percentage: Score ÷ 35 × 100 rounded to 1 decimal place
  const pct = Math.round((score / total) * 1000) / 10;   // 1 d.p.
  const pctEl = document.getElementById('mock-results-percentage');
  if (pctEl) {
    pctEl.textContent = pct.toFixed(1) + '%';
  }

  // Performance message (Req 9.6)
  let message;
  if (pct >= 80) {
    message = 'Excellent! 🏆';
  } else if (pct >= 50) {
    message = 'Good effort! 🌟';
  } else {
    message = 'Keep practising! 💪';
  }

  const messageEl = document.getElementById('mock-results-message');
  if (messageEl) {
    messageEl.textContent = message;
  }

  // ── 5. Wire "Back to Home" button ─────────────────────────
  const homeBtn = document.getElementById('btn-mock-home');
  if (homeBtn) {
    // Clone to remove any previously attached listeners
    const freshHomeBtn = homeBtn.cloneNode(true);
    homeBtn.parentNode.replaceChild(freshHomeBtn, homeBtn);
    document.getElementById('btn-mock-home').addEventListener('click', function () {
      showScreen('screen-home');
      renderHomeScreen();
    });
  }
}

// ── Reset Progress ─────────────────────────────────────────
// Task 11.1 — Requirement: 12.6

/**
 * resetProgress()
 * Called when the user clicks the "Reset Progress" button on the Home Screen.
 *
 * Steps:
 *  1. Show a browser confirm() dialog asking the user to confirm the reset.
 *  2. If the user cancels, do nothing.
 *  3. If the user confirms:
 *     a. Call Storage.clearAll() to remove all olympistar_ prefixed keys
 *        from localStorage (Req 12.6).
 *     b. Reset all in-memory state fields to their initial defaults:
 *        - state.starRatings: all topics set to 0
 *        - state.badges: all topics set to 'none'
 *        - state.streak: 0
 *        - state.lastPracticeDate: null
 *     c. Re-render the Home Screen so the UI reflects the cleared state.
 *
 * Requirements: 12.6
 */
function resetProgress() {
  // ── 1. Confirmation dialog (Req 12.6) ─────────────────────
  const confirmed = confirm(
    'Are you sure you want to reset all progress?\n' +
    'All stars, badges, and your streak will be deleted.'
  );

  if (!confirmed) return;   // user cancelled — do nothing

  // ── 2a. Clear localStorage (Req 12.6) ─────────────────────
  Storage.clearAll();

  // ── 2b. Reset in-memory state to initial defaults (Req 12.6) ──
  // Reset star ratings for every topic across all subjects to 0.
  Object.keys(QUESTION_BANK).forEach(function (subject) {
    Object.keys(QUESTION_BANK[subject]).forEach(function (topic) {
      const key = subject + '/' + topic;
      state.starRatings[key] = 0;
      state.badges[key]      = 'none';
    });
  });

  // Reset streak and last practice date
  state.streak           = 0;
  state.lastPracticeDate = null;

  // ── 2c. Re-render Home Screen ─────────────────────────────
  // Navigate back to the home screen (in case the user somehow triggered
  // this from another context) and re-render to reflect cleared state.
  showScreen('screen-home');
  renderHomeScreen();
}
