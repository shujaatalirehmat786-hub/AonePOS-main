'use client';

import { useEffect } from 'react';

/*
 * Scroll-reveal for the home page.
 *
 * Deliberately opt-in from JS: the hiding styles live behind `.hfr-on`, which is
 * only added once this effect runs and IntersectionObserver is available. If JS
 * fails, is still loading, or the browser is old, nothing is ever hidden.
 *
 * The hero is excluded on purpose. This runs after first paint, so hiding
 * above-the-fold content here would flash it out and back in; everything else
 * starts off-screen, where the initial hide is invisible.
 */

// One element each — the delay comes from their position on screen.
const SINGLES = [
  '.hf-label',
  '.hf-section-heading',
  '.hf-partners-copy',
  '.hf-partners-cta',
  '.hf-why-copy',
  '.hf-why-art',
  '.hf-dashboard-copy',
  '.hf-dashboard-cta',
  '.hf-dashboard figure',
  '.hf-toggle',
  '.hf-cta-box',
  '.hf-actions',
];

// Sibling sets — these stagger, which is what makes the section feel composed.
const GROUPS = [
  '.hf-insight-grid > *',
  '.hf-solution-grid > *',
  '.hf-plan-grid > *',
  '.hf-faq-list > *',
  '.hf-benefit',
];

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.getElementById('home');
    if (!root) return;

    // Respect the OS setting: leave every element in its natural state.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    const targets: HTMLElement[] = [];
    const collect = (sel: string, stagger: boolean) => {
      const nodes = Array.from(root.querySelectorAll<HTMLElement>(sel));
      nodes.forEach((el, i) => {
        if (el.closest('.hf-hero')) return;          // hero animates on its own
        if (el.classList.contains('hfr')) return;    // don't double-register
        el.classList.add('hfr');
        if (stagger) el.style.setProperty('--hfr-i', String(Math.min(i, 8)));
        targets.push(el);
      });
    };
    SINGLES.forEach((s) => collect(s, false));
    GROUPS.forEach((s) => collect(s, true));
    if (!targets.length) return;

    // Only now is it safe to hide anything.
    document.documentElement.classList.add('hfr-on');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('hfr-in');
          io.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    );
    targets.forEach((el) => io.observe(el));

    // Safety net: if anything goes wrong, show everything rather than risk
    // leaving content invisible.
    const failSafe = window.setTimeout(() => {
      targets.forEach((el) => el.classList.add('hfr-in'));
    }, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failSafe);
      document.documentElement.classList.remove('hfr-on');
      targets.forEach((el) => {
        el.classList.remove('hfr', 'hfr-in');
        el.style.removeProperty('--hfr-i');
      });
    };
  }, []);

  return null;
}
