"use client";

import { useState } from "react";
import { CTA, FrameHero, SectionTitle, SiteFooter } from "./inner-pages";

// Shared templates for the product and solution detail pages. Both render the
// section order from the copy deck and reuse the class names the existing
// /products and /solutions pages are built from, so the design stays identical.

type Pair = [string, string];

// ---- mock UI ---------------------------------------------------------------
// The device panels inside the feature blocks. Every part below (zm-head,
// zm-rows, zm-total, zm-pay, zm-table) is already styled by frame-pages.css.
export type Mock = {
  title: string;
  sub?: string;
  rows?: Pair[];
  total?: Pair;
  action?: string;
  table?: { head: [string, string, string]; rows: [string, string, string, "ok" | "low"][] };
};

function MockCard({ mock }: { mock: Mock }) {
  const kind = mock.table ? "zm-inventory" : "zm-checkout";
  return <div className={`zigzag-mock ${kind}`}>
    <div className="zm-head"><span>{mock.title}</span>{mock.sub && <small>{mock.sub}</small>}</div>
    {mock.table && <div className="zm-table">
      <div className="zm-thead">{mock.table.head.map(h => <span key={h}>{h}</span>)}</div>
      {mock.table.rows.map(([name, qty, status, tone]) => <div key={name}>
        <span>{name}</span><span>{qty}</span><em className={tone}>{status}</em>
      </div>)}
    </div>}
    {mock.rows && <div className="zm-rows">{mock.rows.map(([l, r]) => <div key={l}><span>{l}</span><span>{r}</span></div>)}</div>}
    {mock.total && <div className="zm-total"><span>{mock.total[0]}</span><b>{mock.total[1]}</b></div>}
    {mock.action && <div className="zm-pay">{mock.action}</div>}
  </div>;
}

function ZigzagDecor() {
  return <>
    <span className="zz-circle zz-circle-tr" aria-hidden="true" />
    <span className="zz-circle zz-circle-bl" aria-hidden="true" />
    <img className="zigzag-dots" src="/assets/why-dot-grid.png" alt="" aria-hidden="true" />
  </>;
}

// ---- vertical tabs ---------------------------------------------------------
// Same visual treatment as the /products "industries" list: the open tab is the
// .featured row. Clicking or pressing Enter/Space moves it.
function VerticalTabs({ tabs, icons, image, alt }: { tabs: Pair[]; icons: string[]; image: string; alt: string }) {
  const [open, setOpen] = useState(0);
  return <div className="industry-split vtabs">
    <div>{tabs.map(([name, body], i) => <article
      className={i === open ? "featured" : ""}
      key={name}
      role="button"
      tabIndex={0}
      aria-pressed={i === open}
      onClick={() => setOpen(i)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(i); } }}
    >
      <i><span className={`pico pico-${icons[i]}`} aria-hidden="true" /></i>
      <div><b>{name}</b>{i === open && <p>{body}</p>}</div>
    </article>)}</div>
    <img src={image} alt={alt} />
  </div>;
}

// ---- product pages ---------------------------------------------------------
export type ProductPageData = {
  hero: { eyebrow: string; title: string; highlight: string; text: string; image: string; stats: Pair[]; ctaPrimary: string; ctaSecondary: string };
  overview: { label: string; title: string; text: string; cards: [string, string, string][] };
  why: { label: string; title: string; text: string; image: string; imageAlt: string; points: Pair[] };
  tabs: { label: string; title: string; text?: string; items: Pair[]; icons: string[]; image: string; imageAlt: string };
  features: { label: string; title: string; text: string; blocks: { label: string; title: string; short: string; long: string; mock: Mock }[] };
  core: { label: string; title: string; cards: [string, string, string][] };
  closing: { label: string; title: string; text: string; primary: string; secondary: string };
};

export function ProductDetailPage({ data }: { data: ProductPageData }) {
  const { hero, overview, why, tabs, features, core, closing } = data;
  return <div className="inner-page products-page detail-page">
    <FrameHero active="products" eyebrow={hero.eyebrow} title={hero.title} highlight={hero.highlight}
      text={hero.text} image={hero.image} stats={hero.stats}
      ctaPrimary={hero.ctaPrimary} ctaSecondary={hero.ctaSecondary} secondaryHref="/pricing" />

    <section className="frame-section" id="details"><div className="inner-container">
      <SectionTitle label={overview.label} title={overview.title} text={overview.text} />
      <div className="frame-grid four">{overview.cards.map(([icon, t, desc]) =>
        <article className="frame-card" key={t}><i><span className={`pico pico-${icon}`} aria-hidden="true" /></i><h3>{t}</h3><p>{desc}</p></article>)}
      </div>
    </div></section>

    <section className="frame-section frame-band" id="why"><div className="inner-container frame-split">
      <img className="dashboard-img" src={why.image} alt={why.imageAlt} />
      <div>
        <span className="inner-label">{why.label}</span>
        <h2>{why.title}</h2>
        <p className="inner-muted left">{why.text}</p>
        <ul className="check-list detailed">{why.points.map(([t, d], i) =>
          <li key={t}><b>{`0${i + 1}`}</b><div><h4>{t}</h4><p>{d}</p></div></li>)}
        </ul>
      </div>
    </div></section>

    <section className="frame-section" id="industries"><div className="inner-container">
      <SectionTitle label={tabs.label} title={tabs.title} text={tabs.text} />
      <VerticalTabs tabs={tabs.items} icons={tabs.icons} image={tabs.image} alt={tabs.imageAlt} />
    </div></section>

    <section className="frame-section frame-band" id="features"><div className="inner-container">
      <SectionTitle label={features.label} title={features.title} text={features.text} />
      <div className="feature-zigzag">{features.blocks.map(b => <article key={b.title}>
        <div><small>{b.label}</small><h3>{b.title}</h3><p>{b.short}</p><p>{b.long}</p></div>
        <figure><div className="zz-panel"><ZigzagDecor /><MockCard mock={b.mock} /></div></figure>
      </article>)}</div>
    </div></section>

    <section className="frame-section" id="core"><div className="inner-container">
      <SectionTitle label={core.label} title={core.title} />
      <div className="frame-grid three">{core.cards.map(([icon, t, desc]) =>
        <article className="frame-card" key={t}><i><span className={`pico pico-${icon}`} aria-hidden="true" /></i><h3>{t}</h3><p>{desc}</p></article>)}
      </div>
    </div></section>

    <CTA label={closing.label} title={closing.title} text={closing.text} primary={closing.primary} secondary={closing.secondary} />
    <SiteFooter />
  </div>;
}

// ---- solution pages --------------------------------------------------------
export type SolutionPageData = {
  hero: { eyebrow: string; title: string; highlight: string; text: string; image: string; stats: Pair[]; ctaPrimary: string; ctaSecondary: string };
  capability: { label: string; title: string; text: string; cards: [string, string, string][] };
  checklist: { label: string; title: string; text?: string; image: string; imageAlt: string; items: string[] };
  how: { label: string; title: string; text?: string; steps: [string, string, string][] };
  compare: { label: string; title: string; text: string; column: string; rows: [string, string, string][] };
  audience: { label: string; title: string; text?: string; cards: [string, string, string][] };
  visibility: { label: string; title: string; text: string; image: string; imageAlt: string };
  closing: { label: string; title: string; text: string; primary: string; secondary: string };
};

export function SolutionDetailPage({ data }: { data: SolutionPageData }) {
  const { hero, capability, checklist, how, compare, audience, visibility, closing } = data;
  return <div className="inner-page solutions-page detail-page">
    <FrameHero active="solutions" eyebrow={hero.eyebrow} title={hero.title} highlight={hero.highlight}
      text={hero.text} image={hero.image} stats={hero.stats}
      ctaPrimary={hero.ctaPrimary} ctaSecondary={hero.ctaSecondary} secondaryHref="/pricing" />

    <section className="frame-section" id="details"><div className="inner-container">
      <SectionTitle label={capability.label} title={capability.title} text={capability.text} />
      <div className="frame-grid two numbered">{capability.cards.map(([icon, t, desc], n) =>
        <article className="frame-card" key={t}><i><span className={`sico sico-${icon}`} aria-hidden="true" /></i><b>{`0${n + 1}`}</b><h3>{t}</h3><p>{desc}</p></article>)}
      </div>
    </div></section>

    <section className="frame-section frame-band" id="daily"><div className="inner-container frame-split">
      <img className="photo-img" src={checklist.image} alt={checklist.imageAlt} />
      <div>
        <span className="inner-label">{checklist.label}</span>
        <h2>{checklist.title}</h2>
        <p className="inner-muted left">{checklist.text}</p>
        <ul className="check-list">{checklist.items.map(x => <li key={x}>{x}</li>)}</ul>
      </div>
    </div></section>

    <section className="frame-section" id="how"><div className="inner-container">
      <SectionTitle label={how.label} title={how.title} text={how.text} />
      <div className="process-row">
        {how.steps.map(([icon, t, desc]) =>
          <article key={t}><i><span className={`sico sico-${icon}`} aria-hidden="true" /></i><b>{t}</b><small>{desc}</small></article>)}
        <span className="process-hub" aria-hidden="true"><img src="/assets/sol-logo-mark.png" alt="" /></span>
      </div>
    </div></section>

    <section className="frame-section frame-band" id="compare"><div className="inner-container">
      <SectionTitle label={compare.label} title={compare.title} text={compare.text} />
      <div className="compare-table">
        <div className="ct-col">
          <div className="ct-head">Feature</div>
          {compare.rows.map(r => <div key={r[0]}>{r[0]}</div>)}
        </div>
        <div className="ct-col ct-basic">
          <div className="ct-head">Basic POS</div>
          {compare.rows.map(r => <div key={r[0]}>{r[1]}</div>)}
        </div>
        <div className="ct-col ct-aone">
          <span className="ct-ribbon">popular</span>
          <div className="ct-head">{compare.column}</div>
          {compare.rows.map(r => <div key={r[0]}><em>✓</em>{r[2]}</div>)}
        </div>
      </div>
    </div></section>

    <section className="frame-section" id="markets"><div className="inner-container">
      <SectionTitle label={audience.label} title={audience.title} text={audience.text} />
      <div className="frame-grid three">{audience.cards.map(([icon, t, desc]) =>
        <article className="frame-card center-card" key={t}><i><span className={`sico sico-${icon}`} aria-hidden="true" /></i><h3>{t}</h3><p>{desc}</p></article>)}
      </div>
    </div></section>

    <section className="frame-section frame-band" id="visibility"><div className="inner-container frame-split">
      <div>
        <span className="inner-label">{visibility.label}</span>
        <h2>{visibility.title}</h2>
        <p className="inner-muted left">{visibility.text}</p>
      </div>
      <img className="dashboard-img" src={visibility.image} alt={visibility.imageAlt} />
    </div></section>

    <CTA label={closing.label} title={closing.title} text={closing.text} primary={closing.primary} secondary={closing.secondary} />
    <SiteFooter />
  </div>;
}
