"use strict";

const STORAGE_KEY = "cps_state_v1";
const DISCORD_URL = "https://discord.gg/Ag7CQVdCR"; 

const CHAPTERS = [
  {
    title: "L'art de remettre à demain",
    quote: "Le futur est le plus grand entrepôt de bonnes intentions jamais construit.",
    body: [
      "La procrastination est sans doute le piège le plus élégant qu'on ait inventé, parce qu'elle ne dit jamais « j'abandonne » — elle dit juste « pas maintenant »,",
      "ce qui est beaucoup plus difficile à détester. Demain, dans ta tête, c'est un pays merveilleux où tu te réveilles motivé, reposé et soudain capable de tout gérer avant midi.",
      "Le problème c'est que demain, une fois arrivé, s'appelle toujours « aujourd'hui », et il n'a jamais reçu le mémo sur la motivation parfaite. Donc tu repousses encore, et le pays merveilleux recule d'une journée, indéfiniment,",
      "comme un horizon qui te nargue avec le doigt d'honneur spécialement pour toi." 
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
      "Le téléphone contient à peu près toute la connaissance humaine, des musées entiers, des bibliothèques, des outils qui auraient fait pleurer un moine du Moyen Âge. Et l'usage principal qu'on en fait collectivement,",
      "c'est de regarder des inconnus danser dans leur cuisine à 23h. C'est presque touchant, dans le genre pathétique.",
      "Ton attention, c'est la seule ressource que tu ne peux jamais racheter après coup. Chaque scroll gratuit que tu offres au hasard, c'est une minute que quelqu'un d'autre — un algorithme, une entreprise, un inconnu qui danse — a dépensée à ta place, sans même te demander ton avis."
    ],
    callout: "Tu crois contrôler l’écran, mais en vrai tu danses pour lui comme un singe bien dressé. Et je vois là une manière de pourrir ta vie."
  },
  {
    title: "Les fausses urgences",
    quote: "Beaucoup de personnes courent toute leur vie sans vérifier la direction.",
    body: [
      "Répondre à tout instantanément donne une impression grisante d'importance — comme si le monde s'effondrait sans ta réponse dans les 90 secondes.",
      "Sauf que non : être occupé et avancer, ce sont deux sports complètement différents, et le premier est nettement plus fatigant pour un résultat nettement plus nul. L'urgence adore se déguiser en nécessité, et le bruit ambiant en essentiel — les deux portent le même costume, et c'est fait exprès"
    ],
    callout: "Courir vite n'aide pas si tu cours vers la mauvaise porte. Mais si tu comptes à ce point pourrir ta vie, il faudrait commencer par fermer les yeux et courrir vite vers la porte."
  },
  {
    title: "Le confort",
    quote: "Le confort est merveilleux. Jusqu'au moment où il devient ton geôlier.",
    body: [
      "Tout ce qui est agréable aujourd'hui peut très bien devenir ta prison demain : le lit un peu trop confortable, le canapé qui te réclame par ton nom, les habitudes douillettes et leurs excuses toujours prêtes à l'emploi. Le confort, c'est exactement comme le feu dans la cheminée :",
      "un excellent serviteur tant que tu le contrôles, et un très mauvais roi le jour où c'est lui qui décide de ta soirée à ta place."
    ],
    callout: "Se reposer n'est pas fuir. Se cacher derrière le repos, oui. C'est une belle manière de pourrir ta vie."
  },
  {
    title: "La comparaison",
    quote: "Comparer ta vie avec la règle de quelqu’un d’autre produit des mesures très bizarres. Plus tu crois fixer la vitesse de ta particule, moins tu sais où elle se trouve..",
    body: [
      "On adore se comparer.",
      "Alors que c'est complètement absurde : chacun joue une partie différente, sur un plateau différent, avec des cartes qu'il n'a même pas choisies. Et pourtant on se surprend à penser « elle est plus belle », « elle est plus avancée », « il réussit mieux » — et voilà repartie la compétition la plus stupide de l'histoire de l'humanité, celle qu'on ne peut jamais gagner puisque personne ne joue aux mêmes règles",
    ],
    callout: "Le gouvernail de ta vie ne devrait pas être confié à la vie des autres. Si ton plaisir est vraiment de saboter ton existence par le biais des compétitions, organise donc une compétition d'une bataille d’oreillers mais avec des briques"
  },
  {
    title: "Les habitudes",
    quote: "Une habitude n'a pas besoin d'être spectaculaire pour ruiner une vie.",
    body: [
      "Elle a simplement besoin d'être répétée.",
      "Une habitude n'a même pas besoin d'être spectaculaire pour tout changer : une goutte d'eau, prise isolément, ne fait de mal à personne, mais des millions de gouttes, au même endroit, finissent par creuser la pierre — et ta vie n'est pas beaucoup plus solide que de la pierre calcaire.",
      "La plupart des destins, ce ne sont pas de grandes décisions : ce sont juste des habitudes qu'on a arrêté de remarquer depuis longtemps"
    ],
    callout: "Ce n'est presque jamais un grand drame. Pour pourrir ta vie c'est souvent une petite répétition."
  },
  {
    title: "Le bruit",
    quote: "Le silence fait peur à beaucoup de monde parce qu'il pose des questions.",
    body: [
      "Qui suis-je ? Qu'est-ce que je veux, vraiment ? Pourquoi je fais tout ça ?",
      "Trois questions toutes simples, et pourtant on organise des journées entières pour ne jamais avoir à y répondre.",
      "Notification, vidéo, musique, groupe de discussion — un truc chasse l'autre, jusqu'au jour où tu ne sais plus vraiment ce que tu penses, faute d'avoir eu deux minutes de silence pour vérifier.",
      "Tu construis ta propre cage à coups de divertissements gratuits, et tu appelles ça de la liberté. Ce pauvre Blaise Pascal, tu l'insultes gratuitement. Mais sérieusement, bravo, tu es en excellente voie pour pourrir ta vie."
    ],
    callout: "Le silence ne ment pas souvent il expose. N'essaie pas de t'ennuyer si tu comptes à ce point pourrir ta vie."
  },
  {
    title: "La fatigue",
    quote: "Parfois tu n'es pas paresseux. Tu es simplement épuisé.",
    body: [
      "Parfois tu n'es pas paresseux, juste épuisé — et parfois tu n'es même pas épuisé, juste complètement désorganisé, ce qui ressemble énormément à de la fatigue vue de l'extérieur (et même de l'intérieur, si on est honnête).",
      "La vraie difficulté, c'est de faire la différence entre repos, fuite, récupération et abandon pur et simple, parce qu'on confond allègrement les quatre, et ça donne des situations très créatives et souvent très coûteuses — genre démissionner un lundi matin parce qu'on a mal dormi trois nuits d'affilée ou dormir durant un évènement."
    ],
    callout: "Le repos nettoie, la fuite salit. Et c’est une façon de pourrir ta vie."
  },
  {
    title: "La forme",
    quote: "L'art ne nie pas la vie. Il lui donne une forme habitable.",
    body: [
      "Pour Nietzsche, l'art n'est pas seulement décoratif. et qu'il invite à être artiste de notre vie. Les choses ne sont jamais belles d'elles-mêmes mais dans la manière dont nous regardons les choses.",
      "Il rend la vie supportable, visible, vivable.",
      "Imagine qu'on te donne un bloc d'argile.",
      "Tu peux le laisser tel quel. Tu peux le casser. Ou tu peux lui donner une forme.",
      "La vie fonctionne un peu de la même manière.",
      "Tu ne choisis pas toujours la matière. Mais tu participes à la forme.",
      "tout ce qui t'arrive dans la vie tout cela fait partie du matériau.",
      "L'artiste ne supprime pas les imperfections. Il travaille avec elles."
    ],
    callout: "C'est assurément ne pas atteindre ta forme consciente la manière la plus efficace de pourrir ta vie."
  }
];

const NARRATION = {
  age: [
    "Étonnant, tu arrives à lire.",
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
    "Tu vois ? La civilisation tient avec des cases à cocher. J'espère que tu as d'abord appris le manuel pour cocher des cases.",
    "Et tout commence par un oui très bizarre."
  ],
  test: [
    "Le Gardien joue parfaitement. Comme certains pièges.",
    "Le morpion n'est jamais vraiment un jeu. C'est un verdict.",
    "On aime entrer dans une pièce en pensant qu'on va la dominer."
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

let isPopping = false;

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

  if (!isPopping) {
    history.pushState({ screen: name }, "", "#" + name);
  }

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
    $("resultLead").textContent = "Tu as obtenu le résultat le plus fréquent.";
    $("resultText").innerHTML = `
      <p>Franchement, je ne suis meme pas déçu.</p>
      <p>Tu n'as pas non plus dominé la machine. Tu as oublié de télécharger ton cerveau ?</p>
      <p>Tu es en zone neutre, j'imagine que c'est la même chose avec ta vie.</p>
      <p>C'est très humain et tu le pourris déjà assez.</p>
      <p>Et c'est parfaitement suffisant pour continuer.</p>
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
    return;
  }

  if (!state.consentApproved) {
    showScreen("consent");
    return;
  }

  if (state.screen === "test") {
    showScreen("test");
    return;
  }

  if (state.screen === "result") {
    showScreen("result");
    return;
  }

  if (state.screen === "intro") {
    showScreen("intro");
    return;
  }

  if (state.screen === "chapter") {
    showScreen("chapter");
    return;
  }

  if (state.screen === "final") {
    showScreen("final");
    return;
  }

  if (state.screen === "discord") {
    showScreen("discord");
    return;
  }

  showScreen("age");
}

window.addEventListener("popstate", (e) => {
  isPopping = true;
  const target = (e.state && e.state.screen) || "age";
  showScreen(target);
  isPopping = false;
});

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  wireConsentCheckboxes();
  wireButtons();
  restoreFlow();
  history.replaceState({ screen: state.screen }, "", "#" + state.screen);

  if (state.screen === "test") {
    renderBoard();
  }

  updateProgress();
  setNarration(state.screen);

  if (state.screen === "chapter") {
    renderChapter();
  }
});
