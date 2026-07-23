"use strict";

const STORAGE_KEY = "cps_state_v1";
const DISCORD_URL = "https://discord.gg/Ag7CQVdCR"; 

const CHAPTERS = [
  {
    title: "L'art de remettre à demain",
    quote: "Le futur est le plus grand entrepôt de bonnes intentions jamais construit.",
    body: [
      "La procrastination est probablement le piège le plus élégant jamais inventé.",
      "Parce que sans aucun doute elle ne dit jamais : « J'abandonne. »",
      "Elle dit : « Pas maintenant. »",
      "Et c'est précisément ce qui la rend dangereuse.",
      "Demain est un endroit magique. On y trouve toujours la motivation parfaite, l'énergie parfaite et le courage parfait.",
      "Malheureusement, demain arrive toujours déguisé en aujourd'hui. Et la configuration se répète."
    ],
    callout: "Et tu veux que je te dise tu ne repousses pas seulement une tâche. Tu repousses une version de toi. Voilà, une élégante façon de saboter ton existence"
  },
  {
    title: "L'ego",
    quote: "Rien n'est plus fragile qu'une personne convaincue d'avoir toujours raison.",
    body: [
      "L'ego est un garde du corps engagé pour te protéger. Sans dosage c'est une belle manière de pourrir ta vie.",
      "Le problème ? Il protège parfois ton ignorance avec plus de zèle que ton intelligence.",
      "Il adore certaines phrases : « Je sais déjà. », « Je suis comme ça. », « C'est la faute des autres. »",
      "Chaque fois qu'une de ces phrases apparaît, l'évolution prend discrètement la sortie de secours. Et promis, ton cerveau avec."
    ],
    callout: "L'ego veut avoir raison. La lucidité veut grandir."
  },
  {
    title: "Le téléphone",
    quote: "Ton téléphone est juste une banane brillante que tu tends à chaque notification.",
    body: [
      "Le téléphone contient la connaissance du monde, des œuvres d'art, des bibliothèques et des outils incroyables.",
      "Et pourtant, une immense partie de l'humanité l'utilise principalement pour regarder des inconnus danser dans leur cuisine.",
      "C'est presque poétique.",
      "Votre attention est une ressource limitée.",
      "Chaque minute offerte sans réflexion est une minute utilisée par quelqu'un d'autre à votre place."
    ],
    callout: "Tu crois contrôler l’écran, mais en vrai tu danses pour lui comme un singe bien dressé. Et je vois là une manière de pourrir ta vie."
  },
  {
    title: "Les fausses urgences",
    quote: "Beaucoup de personnes courent toute leur vie sans vérifier la direction.",
    body: [
      "Répondre immédiatement à tout donne parfois l'impression d'être important.",
      "Mais être occupé et avancer sont deux activités différentes.",
      "L'urgence aime se déguiser en nécessité.",
      "Le bruit sait se faire passer pour l'essentiel."
    ],
    callout: "Courir vite n'aide pas si tu cours vers la mauvaise porte. Mais si tu comptes à ce point pourrir ta vie, il faudrait commencer par fermer les yeux et courrir vite vers la porte."
  },
  {
    title: "Le confort",
    quote: "Le confort est merveilleux. Jusqu'au moment où il devient ton geôlier.",
    body: [
      "Tout ce qui est agréable aujourd'hui peut devenir une prison demain.",
      "Le lit, le canapé, les habitudes, les excuses familières.",
      "Le confort est un excellent serviteur.",
      "Un très mauvais roi."
    ],
    callout: "Se reposer n'est pas fuir. Se cacher derrière le repos, oui. C'est une belle manière de pourrir ta vie."
  },
  {
    title: "La comparaison",
    quote: "Comparer ta vie avec la règle de quelqu’un d’autre produit des mesures très bizarres. Plus tu crois fixer la vitesse de ta particule, moins tu sais où elle se trouve..",
    body: [
      "On adore se comparer.",
      "C'est étrange, parce que chacun joue une partie différente sur un plateau différent avec des cartes différentes.",
      "Pourtant : « Elle est plus belle. », « Elle est plus avancée. », « Il réussit mieux. »",
      "Et ainsi commence la compétition la plus absurde du monde."
    ],
    callout: "Le gouvernail de ta vie ne devrait pas être confié à la vie des autres. Si ton plaisir est vraiment de saboter ton existence par le biais des compétitions, organise donc une compétition d'une bataille d’oreillers mais remplis de briques"
  },
  {
    title: "Les habitudes",
    quote: "Une habitude n'a pas besoin d'être spectaculaire pour ruiner une vie.",
    body: [
      "Elle a seulement besoin d'être répétée.",
      "Une goutte d'eau paraît inoffensive.",
      "Des millions de gouttes peuvent creuser la pierre.",
      "Les habitudes fonctionnent exactement de la même manière.",
      "La plupart des destins sont simplement des habitudes devenues invisibles."
    ],
    callout: "Ce n'est presque jamais un grand drame. Pour pourrir ta vie c'est souvent une petite répétition."
  },
  {
    title: "Le bruit",
    quote: "Le silence fait peur à beaucoup de monde parce qu'il pose des questions.",
    body: [
      "Qui suis-je ?",
      "Qu'est-ce que je veux ?",
      "Pourquoi fais-je cela ?",
      "Le bruit constant évite d'avoir à répondre.",
      "Notifications, vidéos, musiques, distractions, toujours quelque chose.",
      "Jusqu'au moment où l'on ne sait plus très bien ce que l'on pense réellement.",
      "Tu construis ta cage avec tes propres divertissements, et tu l’appelles liberté. Sérieusement bravo, tu es sur la bonne voie pour pourrir ta vie."
    ],
    callout: "Le silence ne ment pas souvent il expose."
  },
  {
    title: "La fatigue",
    quote: "Parfois tu n'es pas paresseux. Tu es simplement épuisé.",
    body: [
      "Et parfois tu n'es pas épuisé. Tu es simplement désorganisé.",
      "La difficulté consiste à distinguer les deux.",
      "On confond souvent repos, fuite, récupération et abandon.",
      "Cela crée des situations très créatives. Et souvent très coûteuses."
    ],
    callout: "Le repos nettoie, la fuite salit. Et c’est une façon de pourrir ta vie."
  },
  {
    title: "La forme",
    quote: "L'art ne nie pas la vie. Il lui donne une forme habitable.",
    body: [
      "Pour Nietzsche, l'art n'est pas seulement décoratif.",
      "Il rend la vie supportable, visible, vivable.",
      "Imagine qu'on te donne un bloc d'argile.",
      "Tu peux le laisser tel quel. Tu peux le casser. Ou tu peux lui donner une forme.",
      "La vie fonctionne un peu de la même manière.",
      "Tu ne choisis pas toujours la matière. Mais tu participes à la forme.",
      "Les erreurs, les peurs, les maladresses, les échecs : tout cela fait partie du matériau.",
      "L'artiste ne supprime pas les imperfections. Il travaille avec elles."
    ],
    callout: "Le contraire de l'auto-sabotage, ce n'est pas la perfection, c'est assurément la forme consciente."
  }
];

const NARRATION = {
  age: [
    "Tu es arrivé. Étonnant.",
    "Je vois que tu es le genre à lire d'abord, réfléchir ensuite.",
    "Entrée contrôlée. Oui je sais, ça sent déjà la tragédie élégante."
  ],
  minor: [
    "Le chaos peut attendre.",
    "Retour vers des choses plus douces. Et oui, ça existe.",
    "On évite encore le théâtre principal svp."
  ],
  consent: [
    "Le formulaire...",
    "Tu vois ? La civilisation tient avec des cases à cocher. J'espère que tu as d'abord suivi le manuel pour cocher ded cases.",
    "Et tout commence par un oui très bizarre."
  ],
  test: [
    "Le Gardien joue parfaitement. Comme certains pièges.",
    "Le morpion n'est jamais vraiment un jeu. C'est un verdict.",
    "Les êtres humains aiment entrer dans une pièce en pensant qu'ils vont la dominer."
  ],
  result: [
    "Tu as passé l'épreuve. Ou tu as survécu à sa logique.",
    "C'est rarement le gros drame qui détruit une vie. C'est le petit quotidien.",
    "Tu es encore là. Donc on peut parler franchement."
  ],
  intro: [
    "Le vrai manuel commence ici.",
    "Une vie ne se casse pas d'un coup, le plus souvent elle se déforme.",
    "Bienvenue dans la mécanique des petites décisions."
  ],
  chapter: [
    "Lis comme si on te parlait directement. Parce que ce n'est pas le cas.",
    "Une idée simple peut parfois faire plus de bruit qu'un grand discours.",
    "Le plus important c'est qu'on démonte les pièges pas les personnes."
  ],
  final: [
    "La forme compte autant que le fond.",
    "Tu n'es pas une machine. Malheureusement, au moins tu serais moins bête.",
    "Donc tu dois comprendre qu'une vie se sculpte, elle ne se télécharge pas."
  ],
  discord: [
    "Sortie de secours sociale.",
    "Le bureau des réclamations est ouvert.",
    "Si tu veux parler, c'est ici. Pas dans un gouffre mental."
  ]
};

const state = {
  screen: "age",
  ageApproved: false,
  consentApproved: false,
  chapterIndex: 0,
  game: {
    board: Array(9).fill(""),
    currentPlayer: "X",
    ended: false,
    result: null
  }
};

const $ = (id) => document.getElementById(id);

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    screen: state.screen,
    ageApproved: state.ageApproved,
    consentApproved: state.consentApproved,
    chapterIndex: state.chapterIndex,
    game: state.game
  }));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    if (saved && typeof saved === "object") {
      if (typeof saved.screen === "string") state.screen = saved.screen;
      if (typeof saved.ageApproved === "boolean") state.ageApproved = saved.ageApproved;
      if (typeof saved.consentApproved === "boolean") state.consentApproved = saved.consentApproved;
      if (Number.isInteger(saved.chapterIndex)) state.chapterIndex = saved.chapterIndex;
      if (saved.game) state.game = {
        board: Array.isArray(saved.game.board) ? saved.game.board : Array(9).fill(""),
        currentPlayer: saved.game.currentPlayer === "O" ? "O" : "X",
        ended: !!saved.game.ended,
        result: saved.game.result || null
      };
    }
  } catch {
    
  }
}

function setNarration(stage) {
  const box = $("narratorText");
  if (!box) return;

  const arr = NARRATION[stage] || ["."];
  box.textContent = arr[Math.floor(Math.random() * arr.length)];
}

function setStageHint(text) {
  const el = $("stageHint");
  if (el) el.textContent = text;
}

function updateProgress() {
  const progressFill = $("progressFill");
  const progressLabel = $("progressLabel");

  const total = 17;
  const current = getStepNumber();

  if (progressFill) {
    progressFill.style.width = `${Math.min(100, (current / total) * 100)}%`;
  }

  if (progressLabel) {
    progressLabel.textContent = `Étape ${current} / ${total}`;
  }
}

function getStepNumber() {
  switch (state.screen) {
    case "age": return 1;
    case "minor": return 1;
    case "consent": return 2;
    case "test": return 3;
    case "result": return 4;
    case "intro": return 5;
    case "chapter": return 6 + state.chapterIndex;
    case "final": return 16;
    case "discord": return 17;
    default: return 1;
  }
}

function showScreen(name) {
  state.screen = name;

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });

  setStageHint({
    age: "Bienvenue",
    minor: "Lecture douce",
    consent: "Consentement",
    test: "Morpion",
    result: "Résultat",
    intro: "Préambule",
    chapter: "Chapitre",
    final: "Conclusion",
    discord: "Discord"
  }[name] || "Bienvenue");

  setNarration(name);
  updateProgress();
  saveState();

  if (name === "chapter") renderChapter();
  if (name === "test") renderBoard();
  if (name === "consent") updateConsentButton();
}

function resetExperience() {
  state.screen = "age";
  state.ageApproved = false;
  state.consentApproved = false;
  state.chapterIndex = 0;
  state.game = {
    board: Array(9).fill(""),
    currentPlayer: "X",
    ended: false,
    result: null
  };
  saveState();
  syncConsentUI();
  showScreen("age");
}

function confirmAge(isAdult) {
  if (!isAdult) {
    showScreen("minor");
    return;
  }

  state.ageApproved = true;
  saveState();
  showScreen("consent");
}

function syncConsentUI() {
  for (let i = 1; i <= 6; i++) {
    const cb = $(`consent${i}`);
    if (cb) cb.checked = false;
  }

  document.querySelectorAll(".consent-item").forEach((item) => item.classList.remove("checked"));
  const btn = $("btnAcceptConsent");
  if (btn) btn.disabled = true;
}

function updateConsentButton() {
  const checks = Array.from(document.querySelectorAll(".consent-check"));
  const allChecked = checks.every((c) => c.checked);
  const btn = $("btnAcceptConsent");
  if (btn) btn.disabled = !allChecked;
}

function acceptConsent() {
  const checks = Array.from(document.querySelectorAll(".consent-check"));
  const allChecked = checks.every((c) => c.checked);

  if (!allChecked) return;

  state.consentApproved = true;
  saveState();
  showScreen("test");
  state.game = {
    board: Array(9).fill(""),
    currentPlayer: "X",
    ended: false,
    result: null
  };
  renderBoard();
  updateGameStatus("À toi de jouer.");
}

function updateGameStatus(text) {
  const el = $("gameStatus");
  if (el) el.textContent = text;
}

function updateGameExplain(text) {
  const el = $("gameExplain");
  if (el) el.textContent = text;
}

function renderBoard() {
  const boardEl = $("board");
  if (!boardEl) return;

  boardEl.innerHTML = "";

  state.game.board.forEach((cell, index) => {
    const btn = document.createElement("button");
    btn.className = `cell ${cell === "X" ? "x" : cell === "O" ? "o" : ""}`;
    btn.textContent = cell;
    btn.disabled = state.game.ended || !!cell;
    btn.addEventListener("click", () => handleHumanMove(index));
    boardEl.appendChild(btn);
  });

  updateGameStatus(
    state.game.ended
      ? "Partie terminée."
      : state.game.currentPlayer === "X"
        ? "À toi de jouer."
        : "Le Gardien réfléchit."
  );
}

function handleHumanMove(index) {
  if (state.game.ended || state.game.board[index]) return;

  state.game.board[index] = "X";
  renderBoard();

  const humanResult = getWinner(state.game.board);
  if (humanResult) {
    finishGame(humanResult);
    return;
  }

  state.game.currentPlayer = "O";
  saveState();

  updateGameStatus("Le Gardien joue...");
  updateGameExplain("Le Gardien voit plus loin que les humains. Triste, mais pratique.");

  setTimeout(() => {
    const move = getBestMove(state.game.board);
    if (move !== null) {
      state.game.board[move] = "O";
    }

    const result = getWinner(state.game.board);
    if (result) {
      finishGame(result);
      return;
    }

    state.game.currentPlayer = "X";
    saveState();
    renderBoard();
    updateGameExplain("X continue. Le Gardien a déjà prévu la moitié des issues possibles.");
  }, 400);
}

function getWinner(board) {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(Boolean)) return "draw";
  return null;
}

function getBestMove(board) {
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = "O";
      const score = minimax(board, 0, false);
      board[i] = "";
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
}

function minimax(board, depth, isMaximizing) {
  const result = getWinner(board);

  if (result === "O") return 10 - depth;
  if (result === "X") return depth - 10;
  if (result === "draw") return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "O";
        const score = minimax(board, depth + 1, false);
        board[i] = "";
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        const score = minimax(board, depth + 1, true);
        board[i] = "";
        bestScore = Math.min(bestScore, score);
      }
    }
    return bestScore;
  }
}

function finishGame(result) {
  state.game.ended = true;
  state.game.result = result;
  saveState();

  const won = result === "X";
  const draw = result === "draw";

  if (won) {
    $("resultKicker").textContent = "VICTOIRE";
    $("resultTitle").textContent = "Étrange.";
    $("resultLead").textContent = "Tu as gagné. Puisque tu as refusé la passivité, on continue.";
    $("resultText").innerHTML = `
      <p>Tu as gagné.</p>
      <p>Ce n'était pas le scénario statistiquement le plus probable.</p>
      <p>Félicitations. Ou inquiétudes. Nous hésitons encore.</p>
      <p>Une chose est certaine : tu as refusé de jouer automatiquement.</p>
      <p>C'est une qualité rare.</p>
    `;
  } else if (draw) {
    $("resultKicker").textContent = "MATCH NUL";
    $("resultTitle").textContent = "Félicitations.";
    $("resultLead").textContent = "Tu as obtenu le résultat le plus fréquent. Comme la plupart des humains.";
    $("resultText").innerHTML = `
      <p>Le chaos n'a pas gagné franchement.</p>
      <p>Tu n'as pas non plus dominé la machine. Tu as oublié de télécharger ton cerveau ?</p>
      <p>Tu as atteint cette zone élégante où rien ne se résout complètement, mais où tout reste digne.</p>
      <p>C'est très humain.</p>
      <p>Et parfaitement suffisant pour continuer.</p>
    `;
  } else {
    $("resultKicker").textContent = "DÉFAITE";
    $("resultTitle").textContent = "Félicitations.";
    $("resultLead").textContent = "Tu as obtenu le résultat le plus courant. Pas de panique, c'est déjà très humain.";
    $("resultText").innerHTML = `
      <p>Les catastrophes personnelles ne commencent presque jamais par une défaite spectaculaire.</p>
      <p>Elles commencent par des petits choix ordinaires.</p>
      <p>Tu es donc parfaitement qualifié pour continuer.</p>
      <p>Bravo, apprends-nous, Sensei. Tu as déjà les bonnes bases pour pourrir ta vie.</p>
    `;
  }

  showScreen("result");
}

function continueFromResult() {
  showScreen("intro");
}

function startChapters() {
  state.chapterIndex = 0;
  saveState();
  showScreen("chapter");
}

function renderChapter() {
  const chapter = CHAPTERS[state.chapterIndex];
  if (!chapter) {
    showScreen("final");
    return;
  }

  $("chapterCounter").textContent = `Chapitre ${state.chapterIndex + 1} / ${CHAPTERS.length}`;
  $("chapterTitle").textContent = chapter.title;
  $("chapterQuote").textContent = chapter.quote;
  $("chapterBody").innerHTML = chapter.body.map((p) => `<p>${p}</p>`).join("");
  $("chapterCallout").textContent = chapter.callout;
  $("btnNextChapter").textContent = state.chapterIndex === CHAPTERS.length - 1 ? "Conclure" : "Chapitre suivant";
}

function nextChapter() {
  if (state.chapterIndex < CHAPTERS.length - 1) {
    state.chapterIndex += 1;
    saveState();
    renderChapter();
    return;
  }

  saveState();
  showScreen("final");
}

function goDiscord() {
  const link = $("discordLink");
  if (link) link.href = DISCORD_URL;
  showScreen("discord");
}

function wireConsentCheckboxes() {
  document.querySelectorAll(".consent-check").forEach((cb) => {
    cb.addEventListener("change", () => {
      const row = cb.closest(".consent-item");
      if (row) {
        row.classList.toggle("checked", cb.checked);
        row.style.animation = "none";
        row.offsetHeight;
        row.style.animation = cb.checked ? "boom .22s ease" : "";
      }
      updateConsentButton();
    });
  });
}

function wireButtons() {
  $("btnAdult").addEventListener("click", () => confirmAge(true));
  $("btnMinor").addEventListener("click", () => confirmAge(false));
  $("btnBackFromMinor").addEventListener("click", () => showScreen("age"));
  $("btnAcceptConsent").addEventListener("click", acceptConsent);
  $("btnResetGame").addEventListener("click", () => {
    state.game = {
      board: Array(9).fill(""),
      currentPlayer: "X",
      ended: false,
      result: null
    };
    renderBoard();
    updateGameStatus("À toi de jouer.");
    updateGameExplain("X commence. Le Gardien attend.");
  });
  $("btnContinueFromResult").addEventListener("click", continueFromResult);
  $("btnStartChapters").addEventListener("click", startChapters);
  $("btnNextChapter").addEventListener("click", nextChapter);
  $("btnToDiscord").addEventListener("click", goDiscord);
  $("btnRestart").addEventListener("click", resetExperience);
  $("btnBackHome").addEventListener("click", resetExperience);
  $("discordLink").addEventListener("click", (e) => {
    if (DISCORD_URL === "YOUR_DISCORD_LINK_HERE") {
      e.preventDefault();
      alert("Remplace YOUR_DISCORD_LINK_HERE dans script.js avec ton vrai lien Discord.");
    }
  });
}

function restoreFlow() {
  if (state.screen === "minor") {
    showScreen("minor");
    return;
  }

  if (!state.ageApproved) {
    showScreen("age");
    
