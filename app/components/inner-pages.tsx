"use client";

import { useState } from "react";

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

// Global site header/footer — same on every page, matching the homepage's own design.
export function SiteHeader({ active }: { active: string }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [solutionMenu, setSolutionMenu] = useState(false);
  return <div className="home-frame site-chrome"><header className="hf-header"><div className="hf-container hf-nav">
    <a className="hf-logo" href="/" aria-label="AOnePOS home"><img src="/assets/aonepos-logo.png" alt="AOnePOS" /></a>
    <button className="hf-menu-button" onClick={()=>setMobileMenu(!mobileMenu)} aria-label="Toggle navigation" aria-expanded={mobileMenu}>☰</button>
    <nav className={mobileMenu ? "open" : ""} aria-label="Main navigation">
      <a className={active==="home" ? "active" : ""} href="/" onClick={()=>setMobileMenu(false)}>Home</a>
      <div className={`hf-products${productMenu ? " open" : ""}`}>
        <a className="hf-products-link" href="/products" aria-haspopup="true" aria-expanded={productMenu}
           onClick={()=>{setProductMenu(false);setMobileMenu(false);}}>
          Products<span className="hf-nav-caret" aria-hidden="true" />
        </a>
        <div className="hf-product-dropdown">
          {products.map(([icon,label,href])=><a href={href || undefined} key={icon} onClick={()=>{setProductMenu(false);setMobileMenu(false);}}><img src={`/assets/product-${icon}-icon.png`} alt="" />{label}</a>)}
        </div>
      </div>
      <div className={`hf-products hf-submenu${solutionMenu ? " open" : ""}`}>
        <a className={`hf-submenu-link${active==="solutions" ? " active" : ""}`} href="/solutions" aria-haspopup="true" aria-expanded={solutionMenu}
           onClick={()=>{setSolutionMenu(false);setMobileMenu(false);}}>
          Solutions<span className="hf-nav-caret" aria-hidden="true" />
        </a>
        <div className="hf-product-dropdown">
          {solutions.map(([icon,label,href,mask])=><a href={href} key={icon} onClick={()=>{setSolutionMenu(false);setMobileMenu(false);}}>
            {mask ? <span className={`sico sico-${icon}`} aria-hidden="true" /> : <img src={`/assets/${icon}.png`} alt="" />}{label}
          </a>)}
        </div>
      </div>
      <a className={active==="pricing" ? "active" : ""} href="/pricing" onClick={()=>setMobileMenu(false)}>Pricing</a>
      <a className={active==="about" ? "active" : ""} href="/about" onClick={()=>setMobileMenu(false)}>About</a>
      <a className={active==="contact" ? "active" : ""} href="/contact" onClick={()=>setMobileMenu(false)}>Contact</a>
    </nav>
    <a className="hf-button hf-header-cta" href="/contact#contact-form">Book a demo <HfArrow dark/></a>
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

export function FrameHero({active,eyebrow,title,highlight,text,image,stats,ctaPrimary="Book For Demo",ctaSecondary="See Pricing",secondaryHref="#details"}: {active:string;eyebrow:string;title:string;highlight:string;text:string;image?:string;stats?:string[][];ctaPrimary?:string;ctaSecondary?:string;secondaryHref?:string}) {
  return <><SiteHeader active={active}/><section className="frame-hero"><div className="inner-container frame-hero-grid"><div><span className="inner-pill">{eyebrow}<Arrow/></span><h1>{title} <span>{highlight}</span></h1><p>{text}</p><div className="inner-hero-actions"><a className="inner-primary" href="/contact#contact-form">{ctaPrimary} <Arrow/></a><a className="inner-secondary" href={secondaryHref}>{ctaSecondary} <Arrow/></a></div>{stats&&<div className="frame-stats">{stats.map(([n,l])=><div key={l}><b>{n}</b><span>{l}</span></div>)}</div>}</div>{image&&(active==="products"?<div className="frame-hero-art-wrap"><img className="frame-hero-art frame-hero-art-products" src={image} alt=""/><img className="hero-decor-blob hero-decor-blob-a" src="/assets/why-ellipse-large.png" alt="" aria-hidden="true"/><img className="hero-decor-blob hero-decor-blob-b" src="/assets/why-ellipse-small.png" alt="" aria-hidden="true"/><img className="hero-decor-dots" src="/assets/why-dot-grid.png" alt="" aria-hidden="true"/></div>:<img className={`frame-hero-art${active==="about"?" frame-hero-art-about":""}`} src={image} alt=""/>)}</div></section></>;
}

export function SectionTitle({label,title,text}: {label:string;title:string;text?:string}) { return <div className="inner-center section-title"><span className="inner-label">{label}</span><h2>{title}</h2>{text&&<p className="inner-muted">{text}</p>}</div>; }

export function PageIntro({eyebrow,title,highlight,text,active}: {eyebrow:string;title:string;highlight:string;text:string;active:string}) { return <FrameHero active={active} eyebrow={eyebrow} title={title} highlight={highlight} text={text}/>; }

export function ProductMockup({kind="dashboard"}:{kind?:string}) { return <figure className={`frame-dashboard ${kind}`}><img src="/assets/figma-invoice-dashboard.png" alt="AONEPOS dashboard"/></figure>; }
