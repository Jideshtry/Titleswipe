/**
 * TitleSwipe — Main JavaScript  v4.0
 * Vercel-ready | titleswipe.com
 */

'use strict';

// ── Scroll Reveal ──────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.sr').forEach(el => revealObs.observe(el));

// ── Nav scroll class ───────────────────────────
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Floating CTA ───────────────────────────────
const floatCta = document.getElementById('floatCta');
window.addEventListener('scroll', () => {
  floatCta.classList.toggle('visible', window.scrollY > 500);
});

// ── FAQ Accordion ─────────────────────────────
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-q').forEach(b => {
    b.classList.remove('open');
    b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) { btn.classList.add('open'); answer.classList.add('open'); }
}

// ── Progress Bar ──────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    const fill = document.getElementById('heroProgress');
    if (fill) fill.style.width = '78%';
  }, 900);
});

// ── Sidebar Cycling ───────────────────────────
const sbItems = document.querySelectorAll('.p-sidebar-item');
let sbIdx = 0;
setInterval(() => {
  sbItems.forEach(i => i.classList.remove('active'));
  sbIdx = (sbIdx + 1) % sbItems.length;
  sbItems[sbIdx].classList.add('active');
}, 2000);