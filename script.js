  /* ---------- sistema de som (sintetizado via Web Audio, sem arquivos externos) ---------- */
  let soundOn = true;
  try {
    const savedSound = localStorage.getItem('raialeson-sound');
    if (savedSound === 'off') soundOn = false;
  } catch (e) { /* localStorage indisponível */ }

  let audioCtx = null;
  function getAudioCtx(){
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtx = new AC();
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function playTone(freq, duration, type, vol){
    if (!soundOn) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type || 'square';
    osc.frequency.value = freq;
    gain.gain.value = vol || 0.04;
    osc.connect(gain);
    gain.connect(ctx.destination);
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.start(now);
    osc.stop(now + duration);
  }

  const sfx = {
    click: () => playTone(680, 0.045, 'square', 0.03),
    tab:   () => playTone(560, 0.05, 'square', 0.035),
    toggle:() => { playTone(440, 0.05, 'triangle', 0.035); },
    success: () => { playTone(880, 0.06, 'sine', 0.035); setTimeout(() => playTone(1180, 0.07, 'sine', 0.03), 55); },
    error: () => playTone(150, 0.16, 'sawtooth', 0.045),
    key:   () => playTone(1200, 0.015, 'square', 0.012)
  };

  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  function updateSoundIcon(){ soundIcon.textContent = soundOn ? '🔊' : '🔇'; }
  updateSoundIcon();
  soundToggle.addEventListener('click', () => {
    soundOn = !soundOn;
    updateSoundIcon();
    try { localStorage.setItem('raialeson-sound', soundOn ? 'on' : 'off'); } catch (e) {}
    if (soundOn) sfx.toggle();
  });

  const tabs = document.querySelectorAll('.tab');
  const panes = document.querySelectorAll('.pane');
  const tabsNote = document.getElementById('tabsNote');
  const noteLabels = {
    home: 'whoami aberta: perfil profissional',
    sobre: 'sobre aberta: formação e trajetória',
    experiencia: 'experiencia aberta: histórico profissional',
    skills: 'skills aberta: competências e certificações',
    contato: 'contato aberto: canais de contato'
  };

  function openTarget(target){
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === target));
    panes.forEach(p => p.classList.toggle('active', p.id === target));
    tabsNote.textContent = '> seção ' + noteLabels[target];
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => { sfx.tab(); openTarget(tab.dataset.target); });
  });

  document.querySelectorAll('.link-chip').forEach(link => {
    link.addEventListener('click', () => sfx.click());
  });

  const aliases = {
    whoami: 'home', home: 'home',
    sobre: 'sobre', about: 'sobre',
    experiencia: 'experiencia', 'experiência': 'experiencia',
    skills: 'skills',
    contato: 'contato', contact: 'contato'
  };

  const cmdInput = document.getElementById('cmdInput');
  const inputBar = document.getElementById('inputBar');

  cmdInput.addEventListener('input', () => sfx.key());

  function runCommand(){
    const raw = cmdInput.value.trim().toLowerCase().replace(/^\.\//, '').replace(/^\$\s*/, '');
    const target = aliases[raw];
    if (target){
      sfx.success();
      openTarget(target);
      cmdInput.value = '';
    } else if (raw.length){
      sfx.error();
      inputBar.classList.remove('shake');
      void inputBar.offsetWidth;
      inputBar.classList.add('shake');
      cmdInput.placeholder = 'comando não encontrado. tente: skills';
    }
  }

  cmdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runCommand();
  });

  document.getElementById('runBtn').addEventListener('click', runCommand);

  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;

  function applyTheme(theme){
    htmlEl.classList.toggle('theme-light', theme === 'light');
  }

  try {
    const saved = localStorage.getItem('raialeson-theme');
    if (saved) applyTheme(saved);
  } catch (e) { /* localStorage indisponível, segue no tema padrão */ }

  themeToggle.addEventListener('click', () => {
    sfx.toggle();
    const isLight = htmlEl.classList.toggle('theme-light');
    try { localStorage.setItem('raialeson-theme', isLight ? 'light' : 'dark'); } catch (e) {}
  });
