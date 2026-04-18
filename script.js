/* ═══════════════════════════════════════
   DOIS PONTOS — script.js
   Kah, Belly & Smeeg
═══════════════════════════════════════ */

/* ──────────────────────────────────────
   MODAL DATA
────────────────────────────────────── */
const people = {
  kah: {
    icon: '<i class="fa-solid fa-face-smile-beam"></i>',
    bg:   'linear-gradient(135deg, #ffb3c6, #ff85a1)',
    name: 'Kah',
    text: 'A Kah é aquela pessoa que você conhece e pensa "uau, onde essa menina estava a minha vida toda?". Carinhosa, divertida e com um coração enorme. É impossível não se apaixonar pela Kah! 💕'
  },
  belly: {
    icon: '<i class="fa-solid fa-face-kiss-wink-heart"></i>',
    bg:   'linear-gradient(135deg, #a8e6cf, #52d9b4)',
    name: 'Belly',
    text: 'A Belly é o tipo de pessoa que faz qualquer rolê ficar 10x melhor só com a presença dela. Curiosa, animada e cheia de histórias incríveis para contar. Com ela, a diversão é garantida! ✨'
  },
  smeeg: {
    icon: '<i class="fa-solid fa-skull"></i>',
    bg:   'linear-gradient(135deg, #c9a0dc, #9b5de5)',
    name: 'Smeeg',
    text: 'O Smeeg é completamente inclassificável — e isso é o maior elogio possível! Tem uma vibe única, um humor que pega todo mundo de surpresa e uma lealdade que é rara de encontrar. Simplesmente Smeeg! 💜'
  }
};

/* ──────────────────────────────────────
   MODAL FUNCTIONS
────────────────────────────────────── */
function openModal(who) {
  const d  = people[who];
  const av = document.getElementById('modal-avatar');

  av.innerHTML      = d.icon;
  av.style.background = d.bg;

  document.getElementById('modal-name').textContent = d.name;
  document.getElementById('modal-text').textContent = d.text;
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ──────────────────────────────────────
   COUNTDOWN TIMER
   Start date: 21 February 2026
────────────────────────────────────── */
const START_DATE = new Date('2026-02-21T00:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function updateTimer() {
  const now  = new Date();
  const diff = now - START_DATE;

  if (diff < 0) return; // not started yet

  const totalSeconds = Math.floor(diff / 1000);
  const seconds      = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes      = totalMinutes % 60;
  const totalHours   = Math.floor(totalMinutes / 60);
  const hours        = totalHours % 24;
  const days         = Math.floor(totalHours / 24);

  const daysEl  = document.getElementById('t-days');
  const hoursEl = document.getElementById('t-hours');
  const minsEl  = document.getElementById('t-mins');
  const secsEl  = document.getElementById('t-secs');

  // animate flip on seconds change
  secsEl.classList.remove('flip');
  void secsEl.offsetWidth; // reflow
  secsEl.classList.add('flip');

  daysEl.textContent  = days;
  hoursEl.textContent = pad(hours);
  minsEl.textContent  = pad(minutes);
  secsEl.textContent  = pad(seconds);
}

// Run immediately then every second
updateTimer();
setInterval(updateTimer, 1000);
