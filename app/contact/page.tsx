"use client";

import { FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/inner-pages";
import "./contact.css";

const EMAIL = "info@aonepos.com";
const PHONE_DISPLAY = "+866-882-4292";
const PHONE_HREF = "tel:+18668824292";
const ADDRESS = "2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=15&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

const faqs: [string, string][] = [
  ["What happens after I send the form?", "Someone from the Dallas team replies by email or phone to set up a 20-minute call. If you attach a CSV of your catalogue when you reply, we load it in before the demo so you see your own products on screen."],
  ["What should I have ready for a demo?", "What you sell, how many registers you run, the make and model of any printers or card terminals already on the counter, and who processes your cards today. That is enough for a straight answer on whether we fit."],
  ["Will my printers and card terminal work?", "Probably. We support Star Micronics, Epson and Zywell receipt printers (including Star CloudPRNT), Bixolon label printers, and PAX terminals through Datacap. Send us the model and we will confirm before you buy anything."],
  ["Can I try it before I commit?", "Yes. Every plan starts with a 30-day trial, and we import your catalogue for it so you are trialling the real thing, not a sample shop."],
  ["Is support included?", "Yes, in every plan. You reach the same Dallas team that set up your hardware — by phone or email, not a ticket queue."],
];

const facts: [string, string][] = [
  ["Dallas, TX", "Built and supported here"],
  ["EMV", "Datacap certified, PAX terminals"],
  ["4", "Printer brands supported"],
  ["30 days", "Trial on every plan"],
];

function Arrow() { return <span className="contact-arrow">→</span>; }

export default function ContactPage() {
  const [open, setOpen] = useState(0);
  const [sent, setSent] = useState(false);

  // There is no form back end on this site, so the message goes out as an
  // email from the visitor's own mail app, pre-filled from the fields.
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = `${data.get("firstName") || ""} ${data.get("lastName") || ""}`.trim();
    const business = String(data.get("business") || "").trim();
    const subject = `Demo request${business ? ` — ${business}` : name ? ` — ${name}` : ""}`;
    const body = [
      `Name: ${name}`,
      `Business: ${business || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return <div className="contact-page">
    <SiteHeader active="contact" />
    <main>
      <section className="contact-hero"><div className="contact-container"><span className="contact-pill">Get in touch <Arrow/></span><h1>Talk to the people<br/>who <span>built it.</span></h1><p>A demo, a hardware question, a quote for more than one register — call, email, or send the form.<br className="desktop"/> You reach the team in Dallas that builds and supports the system, not a call centre.</p><div className="contact-hero-actions"><a className="contact-primary" href="#contact-form">Send a message <Arrow/></a><a className="contact-secondary" href={PHONE_HREF}>Call {PHONE_DISPLAY} <Arrow/></a></div></div></section>

      <section className="get-touch" id="contact-form"><div className="contact-container"><div className="contact-heading"><span className="contact-label">Get in touch</span><h2>Tell us what you sell.<br/>We will tell you if we fit.</h2><p>How many registers, what is already on the counter, and who processes your cards today. That is enough for a straight answer — and a 20-minute demo on your own products if you want one.</p></div><div className="touch-grid"><div className="contact-details"><div><i>✉</i><span><b>Email</b><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></div><div><i>◔</i><span><b>Call</b><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></span></div><div><i>⌖</i><span><b>Office</b><strong>2727 Lyndon B Johnson Fwy #1050,<br/>Dallas, TX 75234</strong></span></div></div>
        <form className="contact-form" onSubmit={submit}><h3>Send a message</h3>
          <div className="form-row"><label>First name<input name="firstName" placeholder="First name" autoComplete="given-name" required /></label><label>Last name<input name="lastName" placeholder="Last name" autoComplete="family-name" required /></label></div>
          <div className="form-row"><label>Email<input type="email" name="email" placeholder="you@company.com" autoComplete="email" required /></label><label>Phone <small>(optional)</small><input type="tel" name="phone" placeholder="(214) 555-0100" autoComplete="tel" /></label></div>
          <label>Business name<input name="business" placeholder="Your shop or restaurant" autoComplete="organization" /></label>
          <label>Message<textarea name="message" rows={4} placeholder="What you sell, how many registers, and what hardware is already on the counter." required /></label>
          <button className="contact-primary" type="submit">Send message <Arrow/></button>
          <p className="contact-form-note" aria-live="polite">{sent ? <>Your email app should have opened with the message ready to send. If it did not, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.</> : <>Sends from your own email app to {EMAIL}. Nothing is stored on this site.</>}</p>
        </form></div></div></section>

      <section className="office" id="office"><div className="contact-container"><div className="contact-heading"><span className="contact-label">Our office</span><h2>Come and see it on a real counter.</h2><p>We are in Dallas, Texas. Call ahead and we will have a register, a printer and a terminal set up when you arrive.</p></div><div className="map-card"><iframe src={MAP_EMBED} title="Map showing the AOne POS office in Dallas, Texas" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><div className="map-address"><b>2727 Lyndon B Johnson<br/>Fwy #1050</b><span>Dallas, TX 75234, USA</span><div><a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" aria-label="Get directions in Google Maps">→</a></div></div></div></div></section>

      <section className="contact-stats"><div className="contact-container">{facts.map(([n,t])=><div key={t}><b>{n}</b><span>{t}</span></div>)}</div></section>

      <section className="contact-faq"><div className="contact-container"><div className="contact-heading centered"><span className="contact-label">FAQ</span><h2>Before you get in touch</h2><p>The questions most people ask on the first call, answered here so the call can be about your shop.</p></div><div className="contact-faq-list">{faqs.map(([question, answer],index)=><button className={open===index ? "active" : ""} onClick={()=>setOpen(open===index ? -1 : index)} aria-expanded={open===index} key={question}><span>{question}</span>{open===index && <small>{answer}</small>}</button>)}</div></div></section>

      <section className="contact-cta"><div className="contact-container"><div className="contact-cta-box"><span className="contact-label">Get started</span><h2>See it running on your own products.</h2><p>Send us a CSV of your catalogue before the call and we will load it in. Twenty minutes, your products, your prices, your questions — and a straight answer on whether we fit.</p><div><a className="contact-primary" href="#contact-form">Book a 20-minute demo <Arrow/></a><a className="contact-secondary" href={PHONE_HREF}>Call {PHONE_DISPLAY} <Arrow/></a></div></div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
