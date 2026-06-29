/* TitleSwipe™ — Main JavaScript */
(function(){
'use strict';

// ── Scroll Reveal ──────────────────────────────────────
const obs = new IntersectionObserver(
  es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } }),
  { threshold:.1, rootMargin:'0px 0px -28px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Stagger card children ─────────────────────────────
['.lawyers-grid .law-feat', '.oc', '.jur-card',
 '.ent-list .ent-item', '.ent-models .ent-model',
 '.speed-kpis .speed-kpi', '.stats-band .stat-cell',
 '.pillars .pillar', '.tmpl-checks .check-cell',
 '.how-steps .how-step']
 .forEach(sel => document.querySelectorAll(sel)
   .forEach((el,i) => el.style.transitionDelay = `${i*65}ms`));

// ── Nav scroll opacity ────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 40
    ? 'rgba(10,10,10,0.99)'
    : 'rgba(10,10,10,0.95)';
}, { passive:true });

// ── Mobile hamburger ──────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
if(hamburger && navLinks){
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(open));
    hamburger.classList.toggle('open', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    });
  });
  document.addEventListener('click', e => {
    if(!nav.contains(e.target)){
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded','false');
    }
  });
}

// ── Speed bars — animate on entry ─────────────────────
const barsEl = document.getElementById('speed-bars');
if(barsEl){
  const fills = barsEl.querySelectorAll('.bar-fill');
  fills.forEach(f => { f._w = f.getAttribute('data-width')+'%'; f.style.width='0%'; });
  const bObs = new IntersectionObserver(es => {
    es.forEach(e => {
      if(e.isIntersecting){
        setTimeout(() => fills.forEach((f,i) => setTimeout(() => f.style.width = f._w, i*80)), 200);
        bObs.unobserve(e.target);
      }
    });
  }, { threshold:.3 });
  bObs.observe(barsEl);
}

// ── Before/After doc toggle ────────────────────────────
const tAfter  = document.getElementById('tab-after');
const tBefore = document.getElementById('tab-before');
const dAfter  = document.getElementById('doc-after');
const dBefore = document.getElementById('doc-before');
if(tAfter && tBefore && dAfter && dBefore){
  tAfter.addEventListener('click', () => {
    tAfter.classList.add('active'); tBefore.classList.remove('active');
    dAfter.style.display = ''; dBefore.style.display = 'none';
    tAfter.setAttribute('aria-selected','true'); tBefore.setAttribute('aria-selected','false');
  });
  tBefore.addEventListener('click', () => {
    tBefore.classList.add('active'); tAfter.classList.remove('active');
    dBefore.style.display = ''; dAfter.style.display = 'none';
    tBefore.setAttribute('aria-selected','true'); tAfter.setAttribute('aria-selected','false');
  });
}

// ── Smooth scroll with nav offset ────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      const offset = nav ? nav.offsetHeight : 0;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior:'smooth' });
    }
  });
});

})();
