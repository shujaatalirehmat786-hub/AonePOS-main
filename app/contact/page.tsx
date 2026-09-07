"use client";

import { FormEvent, useState } from "react";
import { SiteFooter, SiteHeader } from "../components/inner-pages";
import "./contact.css";

const questions = ["Can I get a customized solution?", "Is AONEPOS suitable for my type of business?", "How secure is AONEPOS?", "What integrations are available?", "How can I contact support?"];

function Arrow() { return <span className="contact-arrow">→</span>; }

export default function ContactPage() {
  const [open, setOpen] = useState(1), [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <div className="contact-page">
    <SiteHeader active="contact" />
    <main>
      <section className="contact-hero"><div className="contact-container"><span className="contact-pill">Get in touch <Arrow/></span><h1>Let&apos;s Talk About Your<br/><span>Business</span></h1><p>Have a question, need a demo, or want a custom quote? Our team is ready to help<br className="desktop"/> you find the right AONEPOS setup for your business.</p><div className="contact-hero-actions"><a className="contact-primary" href="#contact-form">Contact Us <Arrow/></a><a className="contact-secondary" href="#office">Visit Our Office <Arrow/></a></div></div></section>
      <section className="get-touch" id="contact-form"><div className="contact-container"><div className="contact-heading"><span className="contact-label">Get In Touch</span><h2>We&apos;re Here To Help<br/>Your Business Grow.</h2><p>Our experts are ready to discover how AONEPOS can simplify your operations, boost sales efficiency, and help your business grow faster.</p></div><div className="touch-grid"><div className="contact-details"><div><i>✉</i><span><b>Email Us</b><a href="mailto:info@aonepos.com">info@aonepos.com</a></span></div><div><i>◔</i><span><b>Call Us</b><a href="tel:+8668824292">+866-882-4292</a></span></div><div><i>⌖</i><span><b>Visit Us</b><strong>2727 Lyndon B Johnson Fwy #1050,<br/>Dallas, TX 75234</strong></span></div></div><form className="contact-form" onSubmit={submit}><h3>Get In Touch</h3><div className="form-row"><label>First Name<input name="firstName" placeholder="Enter your first name" required /></label><label>Last Name<input name="lastName" placeholder="Enter your last name" required /></label></div><label>Email Address<input type="email" name="email" placeholder="you@company.com" required /></label><label>Message<textarea name="message" rows={4} placeholder="Tell us how we can help..." required /></label><button className="contact-primary" type="submit">{sent ? "Message Sent ✓" : "Send Message"} <Arrow/></button></form></div></div></section>
      <section className="office" id="office"><div className="contact-container"><div className="contact-heading"><span className="contact-label">Our Head Office</span><h2>Come Visit Us.</h2><p>We&apos;d love to meet you in person. Find us at our head office in Dallas, Texas.</p></div><div className="map-card"><div className="map-lines"/><div className="map-pin">⌖</div><div className="map-address"><b>2727 Lyndon B Johnson<br/>Fwy #1050</b><span>Dallas, TX 75234, USA</span><div><button aria-label="Open address">↗</button><button aria-label="Get directions">→</button></div></div></div></div></section>
      <section className="contact-stats"><div className="contact-container"><div><b>10+</b><span>Integrated modules</span></div><div><b>300+</b><span>Businesses served</span></div><div><b>200+</b><span>Happy customers</span></div><div><b>24/7</b><span>Expert support</span></div></div></section>
      <section className="contact-faq"><div className="contact-container"><div className="contact-heading centered"><span className="contact-label">FAQ&apos;S</span><h2>Frequently Asked Questions</h2><p>Unlock real-time insights that help you grow smarter and faster. From sales trends to inventory performance, AONEPOS gives you the clarity.</p></div><div className="contact-faq-list">{questions.map((question,index)=><button className={open===index ? "active" : ""} onClick={()=>setOpen(open===index ? -1 : index)} aria-expanded={open===index} key={question}><span>{question}</span>{open===index && <small>{index===0 ? "Yes. Our team can tailor AONEPOS around your locations, workflows, integrations, and reporting requirements." : "AONEPOS is designed to be flexible, secure, and easy to use for growing businesses."}</small>}</button>)}</div></div></section>
      <section className="contact-cta"><div className="contact-container"><div className="contact-cta-box"><span className="contact-label">Get Started With AONEPOS</span><h2>Ready To Transform Your Business?</h2><p>See how AONEPOS can simplify your operations, boost sales and help your business grow. Our experts are here to help you get started, step by step.</p><div><a className="contact-primary" href="mailto:info@aonepos.com">Start Free 30-Day Trial <Arrow/></a><a className="contact-secondary" href="#contact-form">Book A Demo <Arrow/></a></div></div></div></section>
    </main>
    <SiteFooter />
  </div>;
}
