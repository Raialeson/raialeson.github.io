/* ---------- textos em PT / EN / ES ----------
   Deixei tudo num objeto só, por idioma, porque assim é só trocar
   a "lang" ativa e rodar applyLanguage() de novo. Mais fácil de manter
   do que ter 3 arquivos HTML separados. */
const translations = {
  pt: {
    secureSession: "sessão segura",
    cmdsLabel: "comandos:",
    cmdPlaceholder: "digite um dos comandos acima para navegar na página. Exemplo: skills",
    cmdNotFound: "comando não encontrado. tente: skills",
    skipLink: "Pular para o conteúdo",
    role: "Supervisor de Prevenção a Fraudes e PLD-FT",
    bio: "Transformo dados em decisões de risco, unindo prevenção a fraudes, PLD-FT e aprendizado de máquina para proteger uma operação que atende toda a Amazônia Ocidental.",
    statBemolLabel: "NA BEMOL",
    statBemolValue: "7+ anos",
    statFraudLabel: "EM PREVENÇÃO A FRAUDES",
    statFraudValue: "~3 anos",
    statEduLabel: "FORMAÇÃO",
    statEduValue: "Cursando ADS — Senac",
    verified: "VERIFIED",
    location: "Manaus, AM",
    aboutTitle: "Sobre",
    aboutP1: "Comecei na Bemol como aprendiz em 2019 e, ao longo da trajetória, migrei para a área de prevenção a fraudes, onde atuo há cerca de três anos, hoje conduzindo o time de dados em conjunto com a área de negócio, supervisionando o monitoramento de transações em tempo real em canais como loja física, Conta Bemol, Mercado Bemol e Bemol Farma.",
    aboutP2: "No dia a dia, opero plataformas que compõem a esteira antifraude, como VTEX, BrasBag e Cielo, e trabalho com SAP, Databricks, Power BI, Python e SQL para transformar dados em decisões, sempre atento à conformidade em PLD-FT. Além de conduzir o squad no desenvolvimento de análises e sistemas antifraude próprios, aplico aprendizado de máquina na identificação de padrões de risco.",
    aboutP3: "Do lado técnico, estudo cyber security e inteligência artificial aplicada, e curso Análise e Desenvolvimento de Sistemas pelo Senac.",
    eduCourse1: "Aprendizagem Senac — Administrative Assistant and Secretarial Science, General",
    eduCourse2: "Análise e Desenvolvimento de Sistemas",
    inProgress: "em andamento",
    scaleTitle: "A operação que ajudo a proteger",
    scaleText: "O ecossistema Bemol já ultrapassa <strong>R$ 5 bilhões</strong> em faturamento anual e opera em toda a Amazônia Ocidental (Amazonas, Acre, Rondônia e Roraima), atendendo mais de <strong>60 municípios</strong> no interior.",
    scaleStores: "Lojas de departamento",
    scaleMarkets: "Mercados Bemol",
    scaleDC: "Centros de distribuição",
    scaleLottery: "Agências de loterias",
    scaleFinance: "Agências de serviços financeiros",
    expTitle: "Experiência",
    current: "atual",
    since: "desde set. 2026",
    role2: "Analista de Prevenção a Fraudes",
    role3: "Assistente de Prevenção a Fraudes",
    role4: "Assistente de Loja e Atendimento PL",
    role5: "Assistente de Loja e Atendimento Jr.",
    role6: "Aprendiz",
    role7: "Estagiário",
    onsite: "Presencial",
    hybrid: "Híbrido",
    amazonas: "Amazonas",
    sefaz: "Secretaria de Estado da Fazenda — AM",
    manausRegion: "Manaus e Região",
    tlDesc1: "Supervisão da operação de prevenção a fraudes e de prevenção à lavagem de dinheiro e ao financiamento do terrorismo (PLD-FT), conduzindo o squad no desenvolvimento de análises e sistemas antifraude próprios, com aplicação de aprendizado de máquina.",
    tlDesc2: "Análise de transações e comportamentos suspeitos, com visão estratégica e computacional aplicada à detecção de fraudes.",
    tlDesc3: "Monitoramento em tempo real das transações financeiras no varejo Bemol, Conta Bemol, Mercado Bemol e Bemol Farma, identificando padrões e comportamentos de risco.",
    tlDesc4: "Conferência e registro de pagamentos efetuados por clientes, operando os sistemas necessários para conclusão do processo.",
    tlDesc5: "Atendimento ao cliente e operações de loja no dia a dia do varejo.",
    tlDesc6: "Início de trajetória profissional na Bemol através do programa de aprendizagem.",
    tlDesc7: "Estágio na Secretaria de Estado da Fazenda do Amazonas.",
    skillsTitle: "Skills & Certificações",
    skillsBlock1: "Análise, dados & automação",
    platformsTitle: "Plataformas antifraude",
    certDate1: "Emitida em jun. 2026",
    certDate2: "Obtido em 3 de set. de 2026",
    certMS: "Introdução ao desenvolvimento de agentes no Microsoft Foundry",
    viewCredential: "ver credencial →",
    digitalForensics: "ACADEMIA DE FORENSE DIGITAL",
    contactTitle: "Contato",
    contactText: "Aberto a conversas sobre prevenção a fraudes, dados e automação. Fica à vontade pra chamar no LinkedIn.",
    online: "ONLINE",
    noteHome: "seção whoami aberta: perfil profissional",
    noteSobre: "seção sobre aberta: formação e trajetória",
    noteExperiencia: "seção experiencia aberta: histórico profissional",
    noteSkills: "seção skills aberta: competências e certificações",
    noteContato: "seção contato aberto: canais de contato"
  },

  en: {
    secureSession: "secure session",
    cmdsLabel: "commands:",
    cmdPlaceholder: "type one of the commands above to navigate the page. Example: skills",
    cmdNotFound: "command not found. try: skills",
    skipLink: "Skip to content",
    role: "Fraud Prevention & AML Supervisor",
    bio: "I turn data into risk decisions, combining fraud prevention, AML and machine learning to protect an operation that covers all of Western Amazonia.",
    statBemolLabel: "AT BEMOL",
    statBemolValue: "7+ years",
    statFraudLabel: "IN FRAUD PREVENTION",
    statFraudValue: "~3 years",
    statEduLabel: "EDUCATION",
    statEduValue: "Studying Systems Dev. — Senac",
    verified: "VERIFIED",
    location: "Manaus, Brazil",
    aboutTitle: "About",
    aboutP1: "I started at Bemol as an apprentice in 2019 and, over time, moved into fraud prevention, where I've worked for about three years now, currently leading the data team alongside the business area, overseeing real-time transaction monitoring across channels like physical stores, Conta Bemol, Mercado Bemol and Bemol Farma.",
    aboutP2: "Day to day, I work with the platforms that make up the fraud-prevention stack, such as VTEX, BrasBag and Cielo, and use SAP, Databricks, Power BI, Python and SQL to turn data into decisions, always mindful of AML compliance. Besides leading the squad building our own analytics and anti-fraud systems, I apply machine learning to spot risk patterns.",
    aboutP3: "On the technical side, I study cyber security and applied AI, and I'm taking a Systems Analysis and Development course at Senac.",
    eduCourse1: "Senac Apprenticeship — Administrative Assistant and Secretarial Science, General",
    eduCourse2: "Systems Analysis and Development",
    inProgress: "in progress",
    scaleTitle: "The operation I help protect",
    scaleText: "The Bemol ecosystem already tops <strong>R$ 5 billion</strong> in annual revenue and operates across all of Western Amazonia (Amazonas, Acre, Rondônia and Roraima), serving more than <strong>60 municipalities</strong> in the interior.",
    scaleStores: "Department stores",
    scaleMarkets: "Bemol Markets",
    scaleDC: "Distribution centers",
    scaleLottery: "Lottery agencies",
    scaleFinance: "Financial service agencies",
    expTitle: "Experience",
    current: "current",
    since: "since Sep 2026",
    role2: "Fraud Prevention Analyst",
    role3: "Fraud Prevention Assistant",
    role4: "Store & Payments Assistant",
    role5: "Junior Store & Customer Service Assistant",
    role6: "Apprentice",
    role7: "Intern",
    onsite: "On-site",
    hybrid: "Hybrid",
    amazonas: "Amazonas",
    sefaz: "Amazonas State Treasury Department",
    manausRegion: "Manaus area",
    tlDesc1: "Overseeing fraud prevention and anti-money laundering / counter-terrorist financing (AML/CTF) operations, leading the squad that builds our own analytics and anti-fraud systems, applying machine learning throughout.",
    tlDesc2: "Analysis of suspicious transactions and behaviors, combining strategic thinking with computational methods applied to fraud detection.",
    tlDesc3: "Real-time monitoring of financial transactions across Bemol retail, Conta Bemol, Mercado Bemol and Bemol Farma, spotting risk patterns and behaviors.",
    tlDesc4: "Checking and recording customer payments, operating the systems needed to complete the process.",
    tlDesc5: "Customer service and day-to-day retail store operations.",
    tlDesc6: "Started my professional path at Bemol through the apprenticeship program.",
    tlDesc7: "Internship at the Amazonas State Treasury Department.",
    skillsTitle: "Skills & Certifications",
    skillsBlock1: "Analytics, data & automation",
    platformsTitle: "Anti-fraud platforms",
    certDate1: "Issued Jun 2026",
    certDate2: "Earned Sep 3, 2026",
    certMS: "Introduction to Agent Development on Microsoft Foundry",
    viewCredential: "view credential →",
    digitalForensics: "DIGITAL FORENSICS ACADEMY",
    contactTitle: "Contact",
    contactText: "Open to conversations about fraud prevention, data and automation. Feel free to reach out on LinkedIn.",
    online: "ONLINE",
    noteHome: "whoami section open: professional profile",
    noteSobre: "about section open: background and journey",
    noteExperiencia: "experience section open: work history",
    noteSkills: "skills section open: competencies and certifications",
    noteContato: "contact section open: get in touch"
  },

  es: {
    secureSession: "sesión segura",
    cmdsLabel: "comandos:",
    cmdPlaceholder: "escribe uno de los comandos de arriba para navegar por la página. Ejemplo: skills",
    cmdNotFound: "comando no encontrado. prueba: skills",
    skipLink: "Saltar al contenido",
    role: "Supervisor de Prevención de Fraude y PLD-FT",
    bio: "Transformo datos en decisiones de riesgo, combinando prevención de fraude, PLD-FT y aprendizaje automático para proteger una operación que abarca toda la Amazonía Occidental.",
    statBemolLabel: "EN BEMOL",
    statBemolValue: "7+ años",
    statFraudLabel: "EN PREVENCIÓN DE FRAUDE",
    statFraudValue: "~3 años",
    statEduLabel: "FORMACIÓN",
    statEduValue: "Cursando ADS — Senac",
    verified: "VERIFICADO",
    location: "Manaos, Brasil",
    aboutTitle: "Sobre mí",
    aboutP1: "Empecé en Bemol como aprendiz en 2019 y, con el tiempo, pasé al área de prevención de fraude, donde llevo cerca de tres años, actualmente liderando el equipo de datos junto al área de negocio, supervisando el monitoreo de transacciones en tiempo real en canales como tienda física, Conta Bemol, Mercado Bemol y Bemol Farma.",
    aboutP2: "En el día a día, trabajo con las plataformas que forman parte del ecosistema antifraude, como VTEX, BrasBag y Cielo, y uso SAP, Databricks, Power BI, Python y SQL para convertir datos en decisiones, siempre atento al cumplimiento de PLD-FT. Además de liderar el equipo en el desarrollo de análisis y sistemas antifraude propios, aplico aprendizaje automático para identificar patrones de riesgo.",
    aboutP3: "En el lado técnico, estudio ciberseguridad e inteligencia artificial aplicada, y curso Análisis y Desarrollo de Sistemas en Senac.",
    eduCourse1: "Aprendizaje Senac — Administrative Assistant and Secretarial Science, General",
    eduCourse2: "Análisis y Desarrollo de Sistemas",
    inProgress: "en curso",
    scaleTitle: "La operación que ayudo a proteger",
    scaleText: "El ecosistema Bemol ya supera los <strong>R$ 5 mil millones</strong> en facturación anual y opera en toda la Amazonía Occidental (Amazonas, Acre, Rondônia y Roraima), atendiendo a más de <strong>60 municipios</strong> del interior.",
    scaleStores: "Tiendas por departamento",
    scaleMarkets: "Mercados Bemol",
    scaleDC: "Centros de distribución",
    scaleLottery: "Agencias de lotería",
    scaleFinance: "Agencias de servicios financieros",
    expTitle: "Experiencia",
    current: "actual",
    since: "desde sep. 2026",
    role2: "Analista de Prevención de Fraude",
    role3: "Asistente de Prevención de Fraude",
    role4: "Asistente de Tienda y Atención PL",
    role5: "Asistente Jr. de Tienda y Atención",
    role6: "Aprendiz",
    role7: "Pasante",
    onsite: "Presencial",
    hybrid: "Híbrido",
    amazonas: "Amazonas",
    sefaz: "Secretaría de Hacienda del Estado — AM",
    manausRegion: "Manaos y región",
    tlDesc1: "Supervisión de la operación de prevención de fraude y de prevención del lavado de dinero y financiamiento del terrorismo (PLD-FT), liderando el equipo en el desarrollo de análisis y sistemas antifraude propios, con aplicación de aprendizaje automático.",
    tlDesc2: "Análisis de transacciones y comportamientos sospechosos, con visión estratégica y computacional aplicada a la detección de fraude.",
    tlDesc3: "Monitoreo en tiempo real de las transacciones financieras en el retail Bemol, Conta Bemol, Mercado Bemol y Bemol Farma, identificando patrones y comportamientos de riesgo.",
    tlDesc4: "Verificación y registro de pagos realizados por clientes, operando los sistemas necesarios para completar el proceso.",
    tlDesc5: "Atención al cliente y operaciones de tienda en el día a día del retail.",
    tlDesc6: "Inicio de mi trayectoria profesional en Bemol a través del programa de aprendizaje.",
    tlDesc7: "Pasantía en la Secretaría de Hacienda del Estado de Amazonas.",
    skillsTitle: "Skills y Certificaciones",
    skillsBlock1: "Análisis, datos y automatización",
    platformsTitle: "Plataformas antifraude",
    certDate1: "Emitida en jun. 2026",
    certDate2: "Obtenida el 3 de sep. de 2026",
    certMS: "Introducción al desarrollo de agentes en Microsoft Foundry",
    viewCredential: "ver credencial →",
    digitalForensics: "ACADEMIA DE FORENSE DIGITAL",
    contactTitle: "Contacto",
    contactText: "Abierto a conversar sobre prevención de fraude, datos y automatización. Siéntete libre de escribirme por LinkedIn.",
    online: "EN LÍNEA",
    noteHome: "sección whoami abierta: perfil profesional",
    noteSobre: "sección sobre abierta: formación y trayectoria",
    noteExperiencia: "sección experiencia abierta: historial profesional",
    noteSkills: "sección skills abierta: competencias y certificaciones",
    noteContato: "sección contacto abierta: canales de contacto"
  }
};

/* chave usada em cada aba, pra montar a fraseNote certa */
const noteKeyByTab = {
  home: "noteHome",
  sobre: "noteSobre",
  experiencia: "noteExperiencia",
  skills: "noteSkills",
  contato: "noteContato"
};

/* idioma atual + qual aba está aberta agora, pra saber o que reescrever
   quando a pessoa troca de idioma no meio da navegação */
let currentLang = "pt";
let currentTab = "home";

try {
  const savedLang = localStorage.getItem("raialeson-lang");
  if (savedLang && translations[savedLang]) currentLang = savedLang;
} catch (e) {
  /* se o navegador bloquear localStorage a gente só segue com pt mesmo */
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // Elementos de texto simples: uso innerHTML porque algumas frases (tipo o
  // texto da escala da Bemol) têm <strong> dentro, e textContent apagaria isso.
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateTabsNote(currentTab, lang);

  document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
}

function updateTabsNote(tab, lang) {
  const dict = translations[lang];
  const key = noteKeyByTab[tab];
  document.getElementById("tabsNote").textContent = "> " + dict[key];
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    try { localStorage.setItem("raialeson-lang", currentLang); } catch (e) {}
    applyLanguage(currentLang);
  });
});

/* ---------- navegação entre as abas ---------- */
const tabs = document.querySelectorAll(".tab");
const panes = document.querySelectorAll(".pane");

function openTarget(target) {
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.target === target));
  panes.forEach((p) => p.classList.toggle("active", p.id === target));
  currentTab = target;
  updateTabsNote(target, currentLang);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => openTarget(tab.dataset.target));
});

/* aceito tanto o comando em português quanto o "equivalente" em inglês,
   já que o pessoal pode estar navegando com o idioma em EN */
const aliases = {
  whoami: "home", home: "home",
  sobre: "sobre", about: "sobre",
  experiencia: "experiencia", "experiência": "experiencia", experience: "experiencia",
  skills: "skills",
  contato: "contato", contact: "contato"
};

const cmdInput = document.getElementById("cmdInput");
const inputBar = document.getElementById("inputBar");

function runCommand() {
  const raw = cmdInput.value.trim().toLowerCase().replace(/^\.\//, "").replace(/^\$\s*/, "");
  const target = aliases[raw];
  if (target) {
    openTarget(target);
    cmdInput.value = "";
  } else if (raw.length) {
    // comando digitado errado: balança a barra e troca o placeholder
    // pra dar uma dica de comando válido
    inputBar.classList.remove("shake");
    void inputBar.offsetWidth;
    inputBar.classList.add("shake");
    cmdInput.placeholder = translations[currentLang].cmdNotFound;
  }
}

cmdInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") runCommand();
});

document.getElementById("runBtn").addEventListener("click", runCommand);

/* ---------- tema claro/escuro (isso já existia, não mexi) ---------- */
const themeToggle = document.getElementById("themeToggle");
const htmlEl = document.documentElement;

try {
  const savedTheme = localStorage.getItem("raialeson-theme");
  if (savedTheme) htmlEl.classList.toggle("theme-light", savedTheme === "light");
} catch (e) {
  /* segue no tema padrão se não der pra ler o localStorage */
}

themeToggle.addEventListener("click", () => {
  const isLight = htmlEl.classList.toggle("theme-light");
  try { localStorage.setItem("raialeson-theme", isLight ? "light" : "dark"); } catch (e) {}
});

/* roda a tradução assim que o script carrega, já com o idioma salvo (ou pt) */
applyLanguage(currentLang);
