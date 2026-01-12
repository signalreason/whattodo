const { traitDefinitions, questions, clusterProfiles, occupationEntries, hobbyEntries } = window.AppData;

const traitOrder = traitDefinitions.map((trait) => trait.id);
const clusterLabels = {
  creative: "Creative",
  analytical: "Analytical",
  helping: "Helping",
  builder: "Builder",
  technical: "Technical",
  entrepreneurial: "Entrepreneurial",
  outdoors: "Outdoors",
  community: "Community"
};

const clusterNotes = {
  creative: "Creative work fits your taste for experimentation and expression.",
  analytical: "Analytical work matches your pull toward clarity and patterns.",
  helping: "Helping work fits your people-centered energy.",
  builder: "Builder work aligns with making ideas tangible.",
  technical: "Technical work suits system-focused problem solving.",
  entrepreneurial: "Entrepreneurial paths match your appetite for autonomy and change.",
  outdoors: "Outdoors work connects to your need for variety and movement.",
  community: "Community work fits your interest in bringing people together."
};

const traitPhrases = {
  social_energy: {
    high: "energized by groups",
    low: "more comfortable solo"
  },
  structure_preference: {
    high: "prefer freedom over strict plans",
    low: "like clear structure"
  },
  cognitive_style: {
    high: "connect ideas intuitively",
    low: "prefer clear logic"
  },
  hands_on: {
    high: "to enjoy conceptual work",
    low: "like tangible, hands-on tasks"
  },
  risk_appetite: {
    high: "comfortable with risk",
    low: "prefer steadier paths"
  },
  novelty_preference: {
    high: "seek variety",
    low: "prefer steady routines"
  },
  aesthetic_sensitivity: {
    high: "notice design and beauty",
    low: "care less about aesthetics"
  },
  impact_orientation: {
    high: "to enjoy systems and frameworks",
    low: "care about people impact"
  },
  time_horizon: {
    high: "think long-term",
    low: "prefer quick momentum"
  },
  autonomy_need: {
    high: "value independence",
    low: "prefer clear direction"
  }
};

const state = {
  view: "landing",
  currentIndex: 0,
  answers: []
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function sentenceCase(text) {
  if (!text) {
    return "";
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function buildCatalog(entries) {
  return entries.map((entry) => {
    const base = clusterProfiles[entry.cluster] || {};
    const profile = {};
    traitOrder.forEach((trait) => {
      const baseValue = base[trait] ?? 50;
      const tweakValue = entry.tweaks?.[trait] ?? 0;
      profile[trait] = clamp(baseValue + tweakValue, 0, 100);
    });

    const description = `${sentenceCase(entry.focus)}. Often involves ${entry.environment}.`;

    return {
      id: entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: entry.name,
      description,
      cluster: entry.cluster,
      clusterLabel: clusterLabels[entry.cluster] || "",
      profile
    };
  });
}

const occupationCatalog = buildCatalog(occupationEntries);
const hobbyCatalog = buildCatalog(hobbyEntries);

function computeTraitRanges() {
  const ranges = {};
  traitOrder.forEach((trait) => {
    ranges[trait] = { min: 0, max: 0 };
  });

  questions.forEach((question) => {
    traitOrder.forEach((trait) => {
      let minValue = Infinity;
      let maxValue = -Infinity;
      question.options.forEach((option) => {
        const value = option.weights?.[trait] ?? 0;
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
      });
      if (minValue === Infinity || maxValue === -Infinity) {
        minValue = 0;
        maxValue = 0;
      }
      ranges[trait].min += minValue;
      ranges[trait].max += maxValue;
    });
  });

  return ranges;
}

const traitRanges = computeTraitRanges();

function computeScores(answers) {
  const totals = {};
  traitOrder.forEach((trait) => {
    totals[trait] = 0;
  });

  answers.forEach((answer) => {
    const weights = answer.weights || {};
    traitOrder.forEach((trait) => {
      totals[trait] += weights[trait] ?? 0;
    });
  });

  const scores = {};
  traitOrder.forEach((trait) => {
    const { min, max } = traitRanges[trait];
    const range = max - min;
    if (range === 0) {
      scores[trait] = 50;
    } else {
      const normalized = ((totals[trait] - min) / range) * 100;
      scores[trait] = Math.round(clamp(normalized, 0, 100));
    }
  });

  return scores;
}

function vectorFromProfile(profile) {
  return traitOrder.map((trait) => profile[trait] ?? 50);
}

function cosineSimilarity(vectorA, vectorB) {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vectorA.length; i += 1) {
    dot += vectorA[i] * vectorB[i];
    normA += vectorA[i] * vectorA[i];
    normB += vectorB[i] * vectorB[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function scoreCatalog(catalog, scores) {
  const userVector = vectorFromProfile(scores);
  return catalog
    .map((item) => {
      const similarity = cosineSimilarity(userVector, vectorFromProfile(item.profile));
      return { ...item, similarity };
    })
    .sort((a, b) => b.similarity - a.similarity);
}

function selectDiverse(items, count) {
  const chosen = [];
  const clusterCounts = {};
  const penalty = 0.08;

  while (chosen.length < count) {
    let best = null;
    let bestScore = -Infinity;
    items.forEach((item) => {
      if (chosen.includes(item)) {
        return;
      }
      const penaltyValue = (clusterCounts[item.cluster] || 0) * penalty;
      const adjusted = item.similarity - penaltyValue;
      if (adjusted > bestScore) {
        bestScore = adjusted;
        best = item;
      }
    });

    if (!best) {
      break;
    }

    chosen.push(best);
    clusterCounts[best.cluster] = (clusterCounts[best.cluster] || 0) + 1;
  }

  return chosen;
}

function pickTraitInsights(scores) {
  const entries = traitOrder.map((trait) => ({
    trait,
    value: scores[trait],
    delta: Math.abs(scores[trait] - 50)
  }));

  const highs = entries.filter((entry) => entry.value >= 60).sort((a, b) => b.value - a.value);
  const lows = entries.filter((entry) => entry.value <= 40).sort((a, b) => a.value - b.value);

  const picks = [];
  if (highs[0]) {
    picks.push({ trait: highs[0].trait, direction: "high" });
  }
  if (lows[0]) {
    picks.push({ trait: lows[0].trait, direction: "low" });
  }
  if (highs[1]) {
    picks.push({ trait: highs[1].trait, direction: "high" });
  }

  if (picks.length < 2) {
    entries
      .sort((a, b) => b.delta - a.delta)
      .forEach((entry) => {
        if (picks.length < 2) {
          picks.push({
            trait: entry.trait,
            direction: entry.value >= 50 ? "high" : "low"
          });
        }
      });
  }

  return picks.slice(0, 3);
}

function buildSummary(picks) {
  const phrases = picks.map((pick) => traitPhrases[pick.trait][pick.direction]);
  if (phrases.length === 1) {
    return `You seem ${phrases[0]}.`;
  }
  if (phrases.length === 2) {
    return `You seem ${phrases[0]} and ${phrases[1]}.`;
  }
  return `You seem ${phrases[0]}, ${phrases[1]}, and ${phrases[2]}.`;
}

function buildWhy(item, picks) {
  const lead = clusterNotes[item.cluster] || "This aligns with your overall style.";
  if (!picks.length) {
    return lead;
  }
  const phrase = traitPhrases[picks[0].trait][picks[0].direction];
  return `${lead} You also seem ${phrase}.`;
}

function renderLanding() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel fade-up">
      <div class="tag">Sideways Compass</div>
      <h1>Answer seven odd questions. Get surprisingly accurate ideas for work and play.</h1>
      <p class="lead">No resumes. No labels. Just a playful set of prompts that adds up to useful direction.</p>
      <button class="primary" id="start-quiz">Start the questions</button>
      <div class="note">Takes about 2 minutes. No signup required.</div>
    </section>
  `;

  document.getElementById("start-quiz").addEventListener("click", () => {
    state.view = "question";
    state.currentIndex = 0;
    state.answers = [];
    renderQuestion();
  });
}

function renderQuestion() {
  const view = document.getElementById("view");
  const question = questions[state.currentIndex];
  const progressPercent = Math.round(((state.currentIndex + 1) / questions.length) * 100);
  const savedAnswer = state.answers[state.currentIndex];

  view.innerHTML = `
    <section class="panel fade-up">
      <div class="progress">
        <div class="progress-label">Question ${state.currentIndex + 1} of ${questions.length}</div>
        <div class="progress-bar"><span style="width: ${progressPercent}%"></span></div>
      </div>
      <h2>${question.text}</h2>
      <div class="options"></div>
      <div class="actions">
        <button class="ghost" id="back-btn" ${state.currentIndex === 0 ? "disabled" : ""}>Back</button>
        <div class="note">Pick the option that feels most like you.</div>
      </div>
    </section>
  `;

  const optionsContainer = view.querySelector(".options");
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-card";
    button.type = "button";
    button.textContent = option.text;
    if (savedAnswer && savedAnswer.optionId === option.id) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = {
        questionId: question.id,
        optionId: option.id,
        weights: option.weights
      };

      button.classList.add("selected");
      setTimeout(() => {
        if (state.currentIndex < questions.length - 1) {
          state.currentIndex += 1;
          renderQuestion();
        } else {
          renderProcessing();
        }
      }, 200);
    });

    optionsContainer.appendChild(button);
  });

  const backButton = document.getElementById("back-btn");
  if (backButton) {
    backButton.addEventListener("click", () => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        renderQuestion();
      }
    });
  }
}

function renderProcessing() {
  const view = document.getElementById("view");
  view.innerHTML = `
    <section class="panel processing fade-up">
      <div class="spinner"></div>
      <h2>Thinking it through...</h2>
      <p class="lead">Connecting the dots across your answers.</p>
    </section>
  `;

  setTimeout(() => {
    renderResults();
  }, 1200);
}

function renderResults() {
  const view = document.getElementById("view");
  const scores = computeScores(state.answers);
  const traitPicks = pickTraitInsights(scores);
  const summary = buildSummary(traitPicks);

  const scoredOccupations = scoreCatalog(occupationCatalog, scores);
  const scoredHobbies = scoreCatalog(hobbyCatalog, scores);

  const topOccupations = selectDiverse(scoredOccupations, 3);
  const topHobbies = selectDiverse(scoredHobbies, 3);

  const traitHighlights = traitPicks.map(
    (pick) => `<li>${sentenceCase(traitPhrases[pick.trait][pick.direction])}.</li>`
  );

  view.innerHTML = `
    <section class="panel fade-up">
      <div class="tag">Your readout</div>
      <h1>Here is what might suit you.</h1>
      <p class="lead">${summary}</p>

      <div class="results-section">
        <h3>Occupations</h3>
        <div class="cards">
          ${topOccupations
            .map(
              (item) => `
            <article class="card">
              <div class="card-header">
                <h4>${item.name}</h4>
                <span class="pill">${item.clusterLabel}</span>
              </div>
              <p>${item.description}</p>
              <p class="why">Why it fits: ${buildWhy(item, traitPicks)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="results-section">
        <h3>Hobbies</h3>
        <div class="cards">
          ${topHobbies
            .map(
              (item) => `
            <article class="card">
              <div class="card-header">
                <h4>${item.name}</h4>
                <span class="pill">${item.clusterLabel}</span>
              </div>
              <p>${item.description}</p>
              <p class="why">Why it fits: ${buildWhy(item, traitPicks)}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </div>

      <div class="results-section">
        <h3>Why these?</h3>
        <ul class="highlights">
          ${traitHighlights.join("")}
        </ul>
      </div>

      <div class="actions">
        <button class="primary" id="restart">Retake the questions</button>
        <div class="note">No data is stored; this runs entirely in your browser.</div>
      </div>
    </section>
  `;

  document.getElementById("restart").addEventListener("click", () => {
    state.view = "question";
    state.currentIndex = 0;
    state.answers = [];
    renderQuestion();
  });
}

function init() {
  renderLanding();
}

document.addEventListener("DOMContentLoaded", init);
