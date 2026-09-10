import type { Metadata } from "next";
import { CTA, FAQ, FrameHero, SectionTitle, SiteFooter } from "../components/inner-pages";
import { PartnerMarquee } from "../components/partner-marquee";

export const metadata: Metadata = {
  title: "About AOne POS — Built and Supported in Dallas, Texas",
  description: "AOne POS is a point-of-sale system for independent retailers and quick-service restaurants: checkout, inventory, purchase orders, kitchen display and menu boards in one system, on the hardware and payment processor you already have.",
};

// What we hold ourselves to, in the order a shop owner tends to ask about them.
const principles: [string, string][] = [
  ["Everything in one system", "Checkout, inventory, purchase orders, kitchen display and digital menu boards come from one catalogue and one back office. Change a price on the register and the menu board on the wall changes with it. No second subscription, no separate tablet."],
  ["Your processor. Your hardware.", "We are certified with Datacap for EMV and talk to PAX terminals directly, so you keep the processor you already have and we take no share of your card volume. Star, Epson, Zywell and Bixolon printers work out of the box."],
  ["Purchasing belongs in the POS", "Raise a purchase order, receive it against a vendor, and let cost and stock move together. Alternate SKUs for the same product from two distributors. Shelf labels printed from the same catalogue you sell from."],
  ["Support from people who set up the hardware", "Support is in every plan. When you call, you reach a team in Dallas that has installed the same printers and terminals you are running — not a ticket queue."],
];

// The four parts of the product, described the way they actually ship.
const modules: [string, string, string][] = [
  ["▤", "The register", "Android tablet, handheld, or any browser. Barcode and alternate-SKU lookup, split tenders, tips, hold and recall, and a customer-facing display."],
  ["▦", "Inventory and purchasing", "Purchase orders and vendor receiving, CSV import and export, Mix ’N Match deals, quantity breaks, scheduled sale prices, and separate cash and card prices."],
  ["▥", "Kitchen and menu boards", "Tickets route to a kitchen display or kitchen printer the moment they are sent. Menu boards are laid out on a canvas and pushed to the screens on the wall."],
  ["◎", "Back office and reporting", "Shift close with cash variance, sales by department, hour and cashier, tax by rate, and employee activity. Open it from any browser and export to PDF or CSV."],
];

const facts: [string, string][] = [
  ["4", "Printer brands supported: Star, Epson, Zywell and Bixolon"],
  ["EMV", "Datacap-certified payments, direct PAX terminal integration"],
  ["3", "Ways to ring up: tablet, handheld, or web browser"],
  ["Dallas, TX", "Built and supported from one office"],
];

const audiences: [string, string, string][] = [
  ["Retail", "Convenience, liquor, grocery and smoke shops. Lots of SKUs, weekly price changes, promotions that have to apply themselves.", "/solutions/retail-pos"],
  ["Quick service", "Cafés, taquerias and counter-service kitchens. Modifiers, kitchen routing, and an order screen so customers know when food is up.", "/solutions/quick-service-pos"],
  ["Wholesale", "Trade counters and distributors. Purchase orders, tiered pricing, house accounts that settle at month end.", "/solutions/wholesale-pos"],
];

const faqs: [string, string][] = [
  ["Where are you based?", "Dallas, Texas — 2727 Lyndon B Johnson Fwy #1050. The people who build the software are the people who answer the phone."],
  ["Do I have to use your payment processing?", "No. We are certified with Datacap for EMV and integrate directly with PAX terminals. Bring the processor you already use; we take no share of your card volume."],
  ["Can I run more than one shop on it?", "Each location runs its own back office today, and you can hold as many as you like under one account. Consolidated reporting across locations from a single dashboard is on the roadmap — ask us where it is if that matters to you now."],
  ["How long does setup take?", "A single-register shop is usually live the same day once the catalogue is in. Multiple registers, kitchen printers and menu boards take longer, and we do that with you on a call rather than leaving you with a manual."],
];

export default function AboutPage(){return <div className="inner-page about-page">
  <FrameHero active="about" eyebrow="About AOne POS" title="A point of sale built for" highlight="independent shops." text="One system for the register, the stockroom and the kitchen — running on the printers and card terminals already on your counter, with the payment processor you already use. Built and supported from Dallas, Texas." image="/assets/about-hero-devices.png" ctaPrimary="Book a 20-minute demo" ctaSecondary="See pricing" secondaryHref="/pricing"/>
  <div className="home-frame"><section className="hf-partners"><h2>Hardware and payment partners we work with</h2><PartnerMarquee/></section></div>

  <section className="frame-section" id="details"><div className="inner-container"><SectionTitle label="How we work" title="Four things we will not compromise on" text="Most POS companies sell cheap software and make it back on your card volume and a list of add-ons. We would rather sell you software that does the whole job."/><div className="about-values"><img src="/assets/about-values-photo.jpg" alt="Contactless card payment on an AOne POS terminal"/><div>{principles.map(([title, body],i)=><article key={title}><i>0{i+1}</i><span><b>{title}</b><small>{body}</small></span></article>)}</div></div></div></section>

  <section className="frame-section frame-band"><div className="inner-container"><SectionTitle label="What is included" title="One catalogue, four jobs" text="Every plan includes every module. These are the four parts of the system and what each one actually does."/><div className="frame-grid four">{modules.map(([icon,title,body])=><article className="frame-card" key={title}><i>{icon}</i><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

  <section className="frame-section"><div className="inner-container"><SectionTitle label="The facts" title="What you are actually buying" text="No customer counts we cannot show you. These are the things you can check before you sign anything."/><div className="impact-grid">{facts.map(([n,t])=><div key={t}><b>{n}</b><span>{t}</span></div>)}</div></div></section>

  <section className="frame-section frame-band"><div className="inner-container"><SectionTitle label="Who it is for" title="Built for the counter you actually run" text="Same platform underneath, set up differently on day one. It is not built for full-service restaurants that need table and seat management."/><div className="frame-grid three about-audiences">{audiences.map(([title,body,href])=><a className="frame-card" href={href} key={title}><h3>{title}</h3><p>{body}</p><span className="text-link">See the {title.toLowerCase()} setup <span aria-hidden="true">→</span></span></a>)}</div></div></section>

  <section className="inner-faq"><div className="inner-container"><SectionTitle label="FAQ" title="Questions we get asked on every demo call"/><FAQ items={faqs}/></div></section>
  <CTA label="Get started" title="See it running on your own products." text="Send us a CSV of your catalogue before the call and we will load it in. Twenty minutes, your products, your prices, your questions — and a straight answer on whether we fit." primary="Book a 20-minute demo" secondary="Start a 30-day trial"/><SiteFooter/>
</div>}
