/* ============================================================
   NAV — scrolled class + hamburger
   ============================================================ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   TYPED TEXT
   ============================================================ */
const phrases = [
  'Systems & Networking Enthusiast',
  'Homelab Builder',
  'Cybersecurity Student',
  'Linux Power User',
  'Threat Hunter (in training)',
];

let pIdx = 0, cIdx = 0, deleting = false;
const el = document.getElementById('typedText');

function type() {
  const phrase = phrases[pIdx];
  if (!deleting) {
    el.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) {
      deleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) {
      deleting = false;
      pIdx = (pIdx + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 40 : 80);
}
type();

/* ============================================================
   MATRIX CANVAS
   ============================================================ */
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
const fontSize = 13;
let cols = Math.floor(canvas.width / fontSize);
let drops = Array(cols).fill(1);

function drawMatrix() {
  cols = Math.floor(canvas.width / fontSize);
  if (drops.length !== cols) drops = Array(cols).fill(1);

  ctx.fillStyle = 'rgba(13,17,23,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00d4ff';
  ctx.font = `${fontSize}px JetBrains Mono, monospace`;

  drops.forEach((y, i) => {
    const char = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillStyle = Math.random() > 0.95 ? '#ffffff' : 'rgba(0,212,255,0.6)';
    ctx.fillText(char, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}

setInterval(drawMatrix, 50);

/* ============================================================
   SCROLL FADE-IN
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.skill-category, .tl-card, .cert-card, .project-card, .writeup-card, .contact-item, .stat-card, .streak-card'
).forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
  observer.observe(el);
});

/* ============================================================
   CONTACT FORM — mailto fallback
   ============================================================ */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:hlurgio@fau.edu?subject=${subject}&body=${body}`;
});

/* ============================================================
   ACTIVE NAV LINK on scroll
   ============================================================ */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (link) link.classList.add('active');
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));
