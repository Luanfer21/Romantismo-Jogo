/* ==========================================================================
   BANCO DE DADOS DO QUIZ (15 QUESTÕES)
   ========================================================================== */
const quizQuestions = [
  {
    id: 1,
    question: "Qual movimento literário prioriza a objetividade, a análise psicológica e a crítica social?",
    options: ["Romantismo", "Realismo", "Barroco", "Arcadismo"],
    answer: 1,
    explanation: "O Realismo foca na observação imparcial da sociedade, privilegiando a razão e a análise psicológica das atitudes humanas."
  },
  {
    id: 2,
    question: "Quem foi o autor de 'Memórias Póstumas de Brás Cubas', obra que inaugurou o Realismo no Brasil em 1881?",
    options: ["José de Alencar", "Gonçalves Dias", "Machado de Assis", "Castro Alves"],
    answer: 2,
    explanation: "Machado de Assis publicou a obra em 1881, revolucionando a literatura brasileira com um narrador defunto e tom irônico."
  },
  {
    id: 3,
    question: "A exaltação da pátria e a idealização do indígena como um herói nacional são marcas de qual fase romântica?",
    options: ["1ª Geração Romântica", "2ª Geração Romântica", "3ª Geração Romântica", "Realismo Machadoianiano"],
    answer: 0,
    explanation: "A 1ª Geração (Nacionalista/Indianista) buscava afirmar a identidade do Brasil pós-independência criando o mito do herói indígena."
  },
  {
    id: 4,
    question: "Verdadeiro ou Falso: No Romantismo, o casamento é retratado de forma irônica como uma conveniência financeira.",
    options: ["Verdadeiro", "Falso"],
    answer: 1,
    explanation: "Falso! A visão do casamento por conveniência financeira é típica do REALISMO. No Romantismo o amor é idealizado e puro."
  },
  {
    id: 5,
    question: "O termo 'Mal do Século' e o pessimismo exacerbado estão associados a qual poeta romântico?",
    options: ["Castro Alves", "Álvares de Azevedo", "Machado de Assis", "Raul Pompeia"],
    answer: 1,
    explanation: "Álvares de Azevedo é o principal representante da 2ª Geração Romântica (Ultra-Romântica ou Mal do Século)."
  },
  {
    id: 6,
    question: "Qual característica NÃO pertence ao Realismo?",
    options: ["Análise Psicológica", "Idealização Amorosa", "Critica Social", "Linguagem Objetiva"],
    answer: 1,
    explanation: "A idealização amorosa pertence ao Romantismo. O Realismo busca ver as relações humanas sem fantasias."
  },
  {
    id: 7,
    question: "A obra 'Iracema', conhecida como a 'virgem dos lábios de mel', foi escrita por:",
    options: ["Joaquim Manuel de Macedo", "José de Alencar", "Gonçalves Dias", "Aluísio Azevedo"],
    answer: 1,
    explanation: "José de Alencar escreveu 'Iracema', um dos maiores romances indianistas do Romantismo brasileiro."
  },
  {
    id: 8,
    question: "Qual obra de Machado de Assis levanta a famosa dúvida sobre a traição de Capitu?",
    options: ["O Ateneu", "Quincas Borba", "Dom Casmurro", "A Moreninha"],
    answer: 2,
    explanation: "'Dom Casmurro' narra a história de Bento Santiago e sua obsessão ciumenta sobre Capitu e Escobar."
  },
  {
    id: 9,
    question: "A poesia condoreira de Castro Alves ficou marcada pelo engajamento em qual causa social?",
    options: ["Abolição da Escravatura", "Independência do Brasil", "Revolução Farroupilha", "Proclamação da República"],
    answer: 0,
    explanation: "Castro Alves é o 'Poeta dos Escravos', conhecido por obras de forte denúncia social como 'O Navio Negreiro'."
  },
  {
    id: 10,
    question: "O poema 'Canção do Exílio' ('Minha terra tem palmeiras / Onde canta o Sabiá') é de autoria de:",
    options: ["Gonçalves Dias", "Álvares de Azevedo", "Castro Alves", "Olavo Bilac"],
    answer: 0,
    explanation: "Gonçalves Dias escreveu a célebre 'Canção do Exílio', símbolo maior do ufanismo e saudosismo romântico."
  },
  {
    id: 11,
    question: "Associe o autor à sua obra: Aluísio Azevedo é o autor de qual famoso romance com viés naturalista?",
    options: ["O Guarani", "O Cortiço", "A Moreninha", "Memórias de um Sargento de Milícias"],
    answer: 1,
    explanation: "'O Cortiço' retrata o determinismo do meio sobre os indivíduos em um ambiente coletivo urbano."
  },
  {
    id: 12,
    question: "No Realismo, o comportamento dos personagens é guiado principalmente por:",
    options: ["Sentimentos sublimes e paixões incontroláveis", "Interesses práticos, falhas morais e razões sociais", "Intervenções divinas e religiosas", "Desejo de fuga para a natureza"],
    answer: 1,
    explanation: "Os personagens realistas são complexos, movidos por ambição, interesses de classe e contradições morais."
  },
  {
    id: 13,
    question: "Qual geração do Romantismo brasileiro é conhecida como 'Condoreira'?",
    options: ["1ª Geração", "2ª Geração", "3ª Geração", "Nenhuma das alternativas"],
    answer: 2,
    explanation: "A 3ª Geração é chamada de Condoreira (inspirada na ave condor que voa alto), focada em grandes causas sociais."
  },
  {
    id: 14,
    question: "O romance 'O Ateneu', focado na crítica ao ambiente escolar internato, foi escrito por:",
    options: ["Raul Pompeia", "Machado de Assis", "José de Alencar", "Álvares de Azevedo"],
    answer: 0,
    explanation: "Raul Pompeia escreveu 'O Ateneu', romance marcante do Realismo/Naturalismo brasileiro."
  },
  {
    id: 15,
    question: "Qual das frases a seguir expressa uma atitude tipicamente REALISTA?",
    options: ["'Morrerei por teu amor se não puder ter teus beijos.'", "'O matrimônio foi um arranjo conveniente para as finanças da família.'", "'A pátria minha é a mais bela do universo.'", "'Minha alma chora nas trevas da solidão.'"],
    answer: 1,
    explanation: "A frase analisa o casamento sob a ótica pragmática e financeira, marca inconfundível da postura realista."
  }
];

/* ==========================================================================
   ESTADO DO QUIZ & GAMIFICAÇÃO
   ========================================================================== */
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

/* ==========================================================================
   NAVEGAÇÃO E ABAS
   ========================================================================== */
function showTab(tabId, btnElement) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));

  const selectedTab = document.getElementById(tabId);
  if (selectedTab) selectedTab.classList.add('active');

  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => btn.classList.remove('active'));

  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    // Caso seja chamado programmaticamente
    navBtns.forEach(btn => {
      if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
        btn.classList.add('active');
      }
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateTo(tabId) {
  showTab(tabId);
}

/* ==========================================================================
   MODO CLARO / ESCURO
   ========================================================================== */
function toggleTheme() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') === 'dark';
  const icon = document.getElementById('themeIcon');

  if (isDark) {
    body.removeAttribute('data-theme');
    icon.textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
  }
}

/* ==========================================================================
   LÓGICA DO QUIZ GAMIFICADO
   ========================================================================== */
function loadQuestion() {
  answered = false;
  const q = quizQuestions[currentQuestionIndex];

  document.getElementById('quizQuestionCount').textContent = `Questão ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
  document.getElementById('questionText').textContent = q.question;

  // Atualizar progresso
  const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectOption(idx, btn);
    optionsContainer.appendChild(btn);
  });

  const feedbackBox = document.getElementById('feedbackBox');
  feedbackBox.classList.add('hidden');
  feedbackBox.className = 'feedback-box hidden';
}

function selectOption(selectedIdx, btnElement) {
  if (answered) return;
  answered = true;

  const q = quizQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);

  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackText = document.getElementById('feedbackText');

  if (selectedIdx === q.answer) {
    score += 10;
    document.getElementById('quizScore').textContent = score;
    btnElement.classList.add('correct');
    feedbackBox.classList.add('correct-bg');
    feedbackText.innerHTML = `<strong>✨ Resposta Correta!</strong><br>${q.explanation}`;
  } else {
    btnElement.classList.add('wrong');
    buttons[q.answer].classList.add('correct');
    feedbackBox.classList.add('wrong-bg');
    feedbackText.innerHTML = `<strong>❌ Resposta Incorreta.</strong><br>${q.explanation}`;
  }

  feedbackBox.classList.remove('hidden');
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  document.getElementById('quizCard').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');
  document.getElementById('finalScoreText').textContent = score;

  let msg = '';
  if (score <= 50) {
    msg = "Continue estudando! Você está começando a sua jornada nos movimentos literários.";
  } else if (score <= 90) {
    msg = "Bom trabalho! Você já conhece boa parte do conteúdo de Romantismo e Realismo.";
  } else if (score <= 120) {
    msg = "Muito bem! Seu conhecimento está avançado e pronto para a prova.";
  } else {
    msg = "Excelente! Você domina muito bem o conteúdo! Parabéns!";
  }

  document.getElementById('finalFeedbackMessage').textContent = msg;
  renderAchievements();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quizScore').textContent = '0';
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizCard').classList.remove('hidden');
  loadQuestion();
}

/* ==========================================================================
   CONQUISTAS GAMIFICADAS
   ========================================================================== */
function renderAchievements() {
  const container = document.getElementById('achievementsGrid');
  container.innerHTML = '';

  const correctAnswers = score / 10;

  const achievements = [
    { icon: '🏆', title: 'Primeiro Passo', desc: 'Iniciou o desafio', unlocked: true },
    { icon: '📚', title: 'Leitor Atento', desc: 'Acertou 5+ questões', unlocked: correctAnswers >= 5 },
    { icon: '🔥', title: 'Mestre da Literatura', desc: 'Acertou 10+ questões', unlocked: correctAnswers >= 10 },
    { icon: '👑', title: 'Especialista', desc: 'Acertou todas as 15 questões', unlocked: correctAnswers === 15 }
  ];

  achievements.forEach(ach => {
    const card = document.createElement('div');
    card.className = `achievement-card ${ach.unlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <span class="achievement-icon">${ach.icon}</span>
      <strong>${ach.title}</strong>
      <div style="font-size:0.75rem; color:var(--text-muted);">${ach.desc}</div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   GABARITO
   ========================================================================== */
function renderGabarito() {
  const container = document.getElementById('gabaritoContainer');
  container.innerHTML = '';

  quizQuestions.forEach((q, idx) => {
    const item = document.createElement('div');
    item.className = 'gabarito-item';
    item.innerHTML = `
      <div class="gabarito-num">Questão ${idx + 1}</div>
      <p style="font-weight:600; margin:4px 0;">${q.question}</p>
      <p style="color: green; font-weight: bold;">Resposta Correta: ${q.options[q.answer]}</p>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;"><em>Explicação:</em> ${q.explanation}</p>
    `;
    container.appendChild(item);
  });
}

/* ==========================================================================
   DESAFIO FINAL FORM
   ========================================================================== */
function handleDesafioFinal(e) {
  e.preventDefault();
  document.getElementById('respostaEsperada').classList.remove('hidden');
}

/* ==========================================================================
   VOLTAR AO TOPO
   ========================================================================== */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

/* Initialize */
document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
  renderGabarito();
});
