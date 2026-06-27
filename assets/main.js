/* ── ADKINE Portfolio · main.js ── */

/* ── SMOOTH SCROLL ── */
function smoothTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.getElementById('nav').offsetHeight;
  const top  = el.getBoundingClientRect().top + window.scrollY - navH - 8;
  window.scrollTo({ top, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

function goTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

/* ── VIDEO MODAL ── */
const modal      = document.getElementById('modal');
const modalVid   = document.getElementById('modalVid');
const modalTitle = document.getElementById('modalTitle');

function playVideo(src, title) {
  modalTitle.textContent = title || '';
  modalVid.src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalVid.load();
  modalVid.play().catch(() => {});
}

function closeModal() {
  modalVid.pause();
  modalVid.removeAttribute('src');
  modalVid.load();
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
modal.addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});

/* Keyboard support for work items */
document.querySelectorAll('.work-item[tabindex]').forEach(el => {
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});

/* ── NAVBAR SCROLL + ACTIVE LINK ── */
const nav = document.getElementById('nav');
const sectionIds = ['services', 'work', 'about', 'process', 'contact'];

function updateNav() {
  const scrolled = window.scrollY > 50;
  nav.classList.toggle('scrolled', scrolled);

  const navH = nav.offsetHeight + 24;
  let current = '';
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - navH) current = id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace('#', '');
    a.classList.toggle('active', href === current);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ── MOBILE NAV TOGGLE ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      ro.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

revealEls.forEach(el => ro.observe(el));

/* ── CUSTOM CURSOR ── */
const cur  = document.getElementById('cur');
const ring = document.getElementById('curRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top  = my + 'px';
}, { passive: true });

(function animRing() {
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

const hoverTargets = 'a, button, .work-item, .svc-card, .proc-card';
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.scale  = '2.5';
    ring.style.scale = '1.6';
    ring.style.borderColor = 'rgba(139,0,0,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.scale  = '1';
    ring.style.scale = '1';
    ring.style.borderColor = 'rgba(139,0,0,0.45)';
  });
});

/* ── CONTACT FORM ── */
function handleForm(e) {
  e.preventDefault();
  const btn  = e.target.querySelector('.btn-primary');
  const orig = btn.textContent;
  btn.textContent        = 'Message Sent ✓';
  btn.style.background   = '#1a3a1a';
  btn.style.letterSpacing = '0.2em';
  setTimeout(() => {
    btn.textContent        = orig;
    btn.style.background   = '';
    btn.style.letterSpacing = '';
    e.target.reset();
  }, 3000);
}
