"use client";

import { useEffect, useState } from "react";

const products: [string,string,string][] = [
  ["tablet","Tablet POS","/products/tablet-pos"],
  ["mobile","Mobile POS","/products/mobile-pos"],
  ["web","Web POS","/products/web-back-office"],
];
// Solutions mirrors the Products dropdown. Icon key is the asset basename, or a
// `sico` mask where no ready-made gradient icon exists.
const solutions: [string,string,string,boolean?][] = [
  ["solution-retail","Retail POS","/solutions/retail-pos"],
  ["solution-restaurant","Quick Service POS","/solutions/quick-service-pos"],
  ["cashcarry","Wholesale POS","/solutions/wholesale-pos",true],
];

export function Arrow() { return <span className="inner-arrow">→</span>; }

function HfArrow({ dark = false }: { dark?: boolean }) {
  return <span className={`hf-arrow${dark ? " dark" : ""}`} aria-hidden="true">→</span>;
}

function SolutionIcon({ icon, mask }: { icon: string; mask?: boolean }) {
  return mask ? <span className={`sico sico-${icon}`} aria-hidden="true" /> : <img src={`/assets/${icon}.png`} alt="" />;
}

// Global site header/footer — same on every page, matching the homepage's own design.
// Desktop (>1100px) keeps the inline nav with hover dropdowns. Below that the
// nav collapses into a slide-in drawer (.hf-drawer) with accordion sub-menus.
export function SiteHeader({ active }: { active: string }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openGroup, setOpenGroup] = useState<"products" | "solutions" | null>(
    active === "products" ? "products" : active === "solutions" ? "solutions" : null,
  );
  const close = () => setMobileMenu(false);
  const toggleGroup = (group: "products" | "solutions") => setOpenGroup(openGroup === group ? null : group);

  // While the drawer is open: lock page scroll, close on Escape, and close if
  // the viewport grows past the mobile breakpoint (rotation, window resize).
  useEffect(() => {
    if (!mobileMenu) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setMobileMenu(false); };
    const onResize = () => { if (window.innerWidth > 1100) setMobileMenu(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenu]);

  const link = (key: string) => (active === key ? "active" : "");

  return <div className="home-frame site-chrome"><header className="hf-header"><div className="hf-container hf-nav">
    <a className="hf-logo" href="/" aria-label="AOnePOS home"><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>
    <button className="hf-menu-button" type="button" onClick={()=>setMobileMenu(true)} aria-label="Open menu" aria-expanded={mobileMenu} aria-controls="site-drawer">
      <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
    </button>
    <nav aria-label="Main navigation">
      <a className={link("home")} href="/">Home</a>
      <div className="hf-products">
        <a className="hf-products-link" href="/products" aria-haspopup="true">
          Products<span className="hf-nav-caret" aria-hidden="true" />
        </a>
        <div className="hf-product-dropdown">
          {products.map(([icon,label,href])=><a href={href || undefined} key={icon}><img src={`/assets/product-${icon}-icon.png`} alt="" />{label}</a>)}
        </div>
      </div>
      <div className="hf-products hf-submenu">
        <a className={`hf-submenu-link${active==="solutions" ? " active" : ""}`} href="/solutions" aria-haspopup="true">
          Solutions<span className="hf-nav-caret" aria-hidden="true" />
        </a>
        <div className="hf-product-dropdown">
          {solutions.map(([icon,label,href,mask])=><a href={href} key={icon}><SolutionIcon icon={icon} mask={mask} />{label}</a>)}
        </div>
      </div>
      <a className={link("pricing")} href="/pricing">Pricing</a>
      <a className={link("about")} href="/about">About</a>
      <a className={link("contact")} href="/contact">Contact</a>
    </nav>
    <a className="hf-button hf-header-cta" href="/contact#contact-form">Book a demo <HfArrow dark/></a>

    <div className={`hf-drawer-root${mobileMenu ? " open" : ""}`} id="site-drawer" aria-hidden={!mobileMenu}>
      <div className="hf-drawer-backdrop" onClick={close} aria-hidden="true" />
      <aside className="hf-drawer" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div className="hf-drawer-head">
          <a className="hf-drawer-logo" href="/" aria-label="AOnePOS home" onClick={close}><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>
          <button className="hf-drawer-close" type="button" onClick={close} aria-label="Close menu"><span aria-hidden="true" /><span aria-hidden="true" /></button>
        </div>
        <nav className="hf-drawer-nav" aria-label="Mobile navigation">
          <a className={`hf-drawer-link ${link("home")}`} href="/" onClick={close}>Home</a>

          <div className={`hf-drawer-group${openGroup === "products" ? " open" : ""}`}>
            <button type="button" className={`hf-drawer-link hf-drawer-toggle ${link("products")}`} onClick={()=>toggleGroup("products")} aria-expanded={openGroup === "products"} aria-controls="drawer-products">
              Products<span className="hf-drawer-caret" aria-hidden="true" />
            </button>
            <div className="hf-drawer-sub" id="drawer-products">
              <div>
                <a href="/products" onClick={close}><span className="hf-drawer-all" aria-hidden="true">→</span>All products</a>
                {products.map(([icon,label,href])=><a href={href} key={icon} onClick={close}><img src={`/assets/product-${icon}-icon.png`} alt="" />{label}</a>)}
              </div>
            </div>
          </div>

          <div className={`hf-drawer-group${openGroup === "solutions" ? " open" : ""}`}>
            <button type="button" className={`hf-drawer-link hf-drawer-toggle ${link("solutions")}`} onClick={()=>toggleGroup("solutions")} aria-expanded={openGroup === "solutions"} aria-controls="drawer-solutions">
              Solutions<span className="hf-drawer-caret" aria-hidden="true" />
            </button>
            <div className="hf-drawer-sub" id="drawer-solutions">
              <div>
                <a href="/solutions" onClick={close}><span className="hf-drawer-all" aria-hidden="true">→</span>All solutions</a>
                {solutions.map(([icon,label,href,mask])=><a href={href} key={icon} onClick={close}><SolutionIcon icon={icon} mask={mask} />{label}</a>)}
              </div>
            </div>
          </div>

          <a className={`hf-drawer-link ${link("pricing")}`} href="/pricing" onClick={close}>Pricing</a>
          <a className={`hf-drawer-link ${link("about")}`} href="/about" onClick={close}>About</a>
          <a className={`hf-drawer-link ${link("contact")}`} href="/contact" onClick={close}>Contact</a>
        </nav>
        <div className="hf-drawer-foot">
          <a className="hf-button hf-drawer-cta" href="/contact#contact-form" onClick={close}>Book a demo <HfArrow dark/></a>
          <a className="hf-drawer-contact" href="tel:+8668824292">+866-882-4292</a>
          <a className="hf-drawer-contact" href="mailto:info@aonepos.com">info@aonepos.com</a>
        </div>
      </aside>
    </div>
  </div></header></div>;
}

export function SiteFooter() {
  return <div className="home-frame site-chrome"><footer className="hf-footer"><div className="hf-container">
    <div className="hf-footer-brand"><img src="/assets/aonepos-footer-logo.png" alt="AOnePOS" /></div>
    <div className="hf-footer-grid">
      <div><h3>Social Links</h3><div className="hf-social"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Twitter">♥</a><a href="#" aria-label="LinkedIn">in</a></div></div>
      <div><h3>About</h3><p>AOne POS is a point-of-sale system for independent retailers and restaurants. One system covers the register, inventory, purchasing, the kitchen and the menu boards on the wall — on the printers and card terminals you already own, with the payment processor you already use. Built and supported from Dallas, Texas.</p></div>
      <div><h3>Link</h3><nav><a href="/">Home</a><a href="/products">Products</a><a href="/solutions">Solutions</a><a href="/pricing">Pricing</a><a href="/about">About</a><a href="/contact">Contact</a></nav></div>
      <div className="hf-contact"><h3>Contact</h3><p><img src="/assets/footer-location.png" alt="" />2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234</p><p><img src="/assets/footer-phone.png" alt="" />+866-882-4292</p><p><img src="/assets/footer-email.png" alt="" />info@aonepos.com</p></div>
    </div>
  </div><div className="hf-copyright"><div className="hf-container"><span>© Copyright © 2026 Aonepos. All Rights Reserved.</span><nav><a href="/privacy-policy">Privacy Policy</a><i/><a href="/terms">Terms &amp; conditions</a></nav></div></div></footer></div>;
}

export function FAQ({ items = ["Can I get a customized solution?","Is AONEPOS suitable for my type of business?","How secure is AONEPOS?","What integrations are available?","How can I contact support?"] }: { items?: string[] }) {
  const [active,setActive] = useState(1);
  return <div className="inner-faq-list">{items.map((item,i)=><button key={item} className={active===i ? "active" : ""} onClick={()=>setActive(active===i ? -1 : i)} aria-expanded={active===i}><span>{item}</span>{active===i&&<small>Yes. AONEPOS is designed for retail stores, restaurants, cafés, salons and multi-location businesses. The system is flexible and customizable to match your workflow.</small>}</button>)}</div>;
}

export function CTA({ label="Ready To Get Started?", title="Ready To Transform Your Business?", text="From fast payments to real-time reporting and multi-store management, AONEPOS gives you everything you need to run your business with confidence.", primary="Get Started", secondary="Contact Us" }: { label?: string; title?: string; text?: string; primary?: string; secondary?: string }) {
  return <section className="inner-cta"><div className="inner-container"><div className="inner-cta-box"><span className="inner-label">{label}</span><h2>{title}</h2><p>{text}</p><div><a className="inner-primary" href="/contact#contact-form">{primary} <Arrow/></a><a className="inner-secondary" href="/contact#contact-form">{secondary} <Arrow/></a></div></div></div></section>;
}

export function FrameHero({active,eyebrow,title,highlight,text,image,stats,ctaPrimary="Book For Demo",ctaSecondary="See Pricing",secondaryHref="#details",dotBand=false}: {active:string;eyebrow:string;title:string;highlight:string;text:string;image?:string;stats?:string[][];ctaPrimary?:string;ctaSecondary?:string;secondaryHref?:string;dotBand?:boolean}) {
  return <><SiteHeader active={active}/><section className="frame-hero"><div className="inner-container frame-hero-grid">{dotBand&&<span className="hero-dot-band" aria-hidden="true"/>}<div><span className="inner-pill">{eyebrow}<Arrow/></span><h1>{title} <span>{highlight}</span></h1><p>{text}</p><div className="inner-hero-actions"><a className="inner-primary" href="/contact#contact-form">{ctaPrimary} <Arrow/></a><a className="inner-secondary" href={secondaryHref}>{ctaSecondary} <Arrow/></a></div>{stats&&<div className="frame-stats">{stats.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div>}</div>{image&&(active==="products"?<div className="frame-hero-art-wrap"><img className="frame-hero-art frame-hero-art-products" src={image} alt=""/><img className="hero-decor-blob hero-decor-blob-a" src="/assets/why-ellipse-large.png" alt="" aria-hidden="true"/><img className="hero-decor-blob hero-decor-blob-b" src="/assets/why-ellipse-small.png" alt="" aria-hidden="true"/><img className="hero-decor-dots" src="/assets/why-dot-grid.png" alt="" aria-hidden="true"/></div>:<img className={`frame-hero-art${active==="about"?" frame-hero-art-about":""}`} src={image} alt=""/>)}</div></section></>;
}

export function SectionTitle({label,title,text}: {label:string;title:string;text?:string}) { return <div className="inner-center section-title"><span className="inner-label">{label}</span><h2>{title}</h2>{text&&<p className="inner-muted">{text}</p>}</div>; }

export function PageIntro({eyebrow,title,highlight,text,active}: {eyebrow:string;title:string;highlight:string;text:string;active:string}) { return <FrameHero active={active} eyebrow={eyebrow} title={title} highlight={highlight} text={text}/>; }

export function ProductMockup({kind="dashboard"}:{kind?:string}) { return <figure className={`frame-dashboard ${kind}`}><img src="/assets/figma-invoice-dashboard.png" alt="AONEPOS dashboard"/></figure>; }
