import { CTA, FrameHero, SectionTitle, SiteFooter } from "../components/inner-pages";

// Small line-icon set used only on this page, styled to sit inside the
// existing `.frame-card > i` / `.industry-split article i` icon boxes.
function Ico({ name }: { name: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, width: 22, height: 22 };
  switch (name) {
    case "device": return <svg {...common}><rect x="3" y="4" width="13" height="9.5" rx="1.4"/><path d="M6.5 17h6M9.5 13.5V17"/><rect x="15" y="9" width="6" height="9" rx="1.2"/></svg>;
    case "ban": return <svg {...common}><circle cx="12" cy="12" r="8.2"/><path d="M6.7 6.7l10.6 10.6"/></svg>;
    case "cloud": return <svg {...common}><path d="M7.2 17.3a4 4 0 0 1-.4-7.97 5 5 0 0 1 9.65-1.9A4.4 4.4 0 0 1 17.3 17.3H7.2z"/></svg>;
    case "refresh": return <svg {...common}><path d="M4 12a8 8 0 0 1 13.7-5.66M20 12a8 8 0 0 1-13.7 5.66"/><path d="M17.2 3.8v3.4h-3.4M6.8 20.2v-3.4h3.4"/></svg>;
    case "store": return <svg {...common}><path d="M4.2 9.2 5.3 4.6h13.4l1.1 4.6"/><path d="M4.2 9.2a2.4 2.4 0 0 0 4.8.3 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8-.3"/><path d="M5 9.4V19h14V9.4"/><path d="M10 19v-5.2h4V19"/></svg>;
    case "basket": return <svg {...common}><path d="M5 10h14l-1.4 8.6a1.6 1.6 0 0 1-1.6 1.4H8a1.6 1.6 0 0 1-1.6-1.4L5 10z"/><path d="M9 10 8 5.2M15 10l1-4.8M9 13.5v4M12 13.5v4M15 13.5v4"/></svg>;
    case "bottle": return <svg {...common}><path d="M10.2 2.4h3.6v2.9l1.3 2c.4.6.6 1.3.6 2V19a2 2 0 0 1-2 2h-3.4a2 2 0 0 1-2-2V9.3c0-.7.2-1.4.6-2l1.3-2V2.4z"/><path d="M10.2 5.3h3.6M8.6 13h6.8"/></svg>;
    case "vape": return <svg {...common}><rect x="3" y="11" width="12.5" height="6" rx="2"/><circle cx="19" cy="14" r="2"/><path d="M6.3 11V9.3a2 2 0 0 1 2-2"/></svg>;
    case "browser": return <svg {...common}><rect x="3" y="4.5" width="18" height="14" rx="2"/><path d="M3 8.3h18"/><path d="M11 11.7l6 2.3-2.3.9-.9 2.3-2.8-5.5z"/></svg>;
    case "chart": return <svg {...common}><path d="M4.5 19.5V10M10.5 19.5V4.5M16.5 19.5v-7M3.5 19.5h17"/></svg>;
    case "puzzle": return <svg {...common}><path d="M8.2 4.2h4v1.9a1.7 1.7 0 1 0 0 3.4v1.9h4a1.7 1.7 0 1 1 0 3.4v1.9h-4a1.7 1.7 0 1 0-3.4 0h-1.9v-4h-1.9a1.7 1.7 0 1 1 0-3.4h1.9v-5.1z"/></svg>;
    case "grid": return <svg {...common}><rect x="3.2" y="3.2" width="7.2" height="7.2" rx="1.3"/><rect x="13.6" y="3.2" width="7.2" height="7.2" rx="1.3"/><rect x="3.2" y="13.6" width="7.2" height="7.2" rx="1.3"/><rect x="13.6" y="13.6" width="7.2" height="7.2" rx="1.3"/></svg>;
    case "shield": return <svg {...common}><path d="M12 3.2 19 6v5c0 5.1-3.2 8.5-7 10-3.8-1.5-7-4.9-7-10V6l7-2.8z"/><path d="M8.8 12l2.1 2.1 4.3-4.3"/></svg>;
    case "users": return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3.3 20a5.7 5.7 0 0 1 11.4 0"/><circle cx="17.6" cy="9.2" r="2.3"/><path d="M15.8 13.1a4.8 4.8 0 0 1 5.4 4.9"/></svg>;
    default: return null;
  }
}

const browserFeatures: [string, string, string][] = [
  ["device", "Any Device", "Laptop, desktop, tablet or Chrome."],
  ["ban", "No Installation", "Start without complicated setup."],
  ["cloud", "Cloud Based", "Your business stays connected."],
  ["refresh", "Always Updated", "New features roll out automatically."],
];

const checklist: [string, string][] = [
  ["Live Sales Dashboard", "Monitor revenue as it happens."],
  ["Remote Price Updates", "Update prices without being at the store."],
  ["Staff Management", "View shifts, performance and transactions."],
];

const industries: [string, string, string?][] = [
  ["Convenience", "store", "Power up your checkout with our POS system, perfectly tuned for the hustle and bustle of retail."],
  ["Grocery", "basket"],
  ["Liquor", "bottle"],
  ["Smoke Shop", "vape"],
];

const core: [string, string, string][] = [
  ["01 — Smart Checkout", "Smart Checkout Experience", "Fast, simple billing from any browser. Give your team an easy-to-use interface designed for busy retail environments."],
  ["02 — Real-Time Inventory", "Real-Time Inventory", "Track stock levels, movements and availability across your business, with live updates the moment something changes."],
  ["03 — Multi-location", "Multi-Location Management", "Monitor every outlet from one login — compare sales, staffing and inventory across all your locations."],
];

const coreFeatures: [string, string, string][] = [
  ["browser", "Access Anywhere, Anytime", "Open any browser — Chrome, Safari, Edge — log in and start managing your sales."],
  ["chart", "Advanced Reporting & Analytics", "Daily sales, tax reports, profit margins, and performance insights."],
  ["puzzle", "Easy Integrations", "Connect with accounting software, payment gateways, and third-party tools."],
  ["grid", "Centralised Business Control", "Monitor multiple outlets, track sales, and manage inventory from a single dashboard."],
  ["shield", "Secure Cloud-Based System", "All your data is encrypted and stored in the cloud with automatic backups so nothing is ever lost."],
  ["users", "Role-Based Staff Access", "Give each team member only the access they need — cashier, supervisor, or owner."],
];

function ZigzagMock({ kind }: { kind: "checkout" | "inventory" | "locations" }) {
  if (kind === "checkout") return <div className="zigzag-mock">
    <div className="zm-head"><span>Checkout</span><small>#ORD-2401</small></div>
    <div className="zm-pills"><span className="active">Latte</span><span>Bagel</span><span>Juice</span></div>
    <div className="zm-rows"><div><b>Latte ×1</b><span>$4.50</span></div><div><b>Bagel</b><span>$3.20</span></div></div>
    <div className="zm-total"><span>Total</span><b>$7.70</b></div>
    <div className="zm-pay">Charge $7.70</div>
  </div>;
  if (kind === "inventory") return <div className="zigzag-mock">
    <div className="zm-head"><span>Inventory</span><small>Updated just now</small></div>
    <div className="zm-table">
      <div className="zm-thead"><span>Item</span><span>Stock</span><span>Status</span></div>
      <div><span>Espresso Beans</span><span>48</span><em className="ok">In Stock</em></div>
      <div><span>Oat Milk</span><span>6</span><em className="low">Low</em></div>
      <div><span>Paper Cups</span><span>210</span><em className="ok">In Stock</em></div>
    </div>
  </div>;
  return <div className="zigzag-mock">
    <div className="zm-head"><span>Locations</span><small>6 active</small></div>
    <div className="zm-list">
      <div><i/><b>Downtown Branch</b><span>$2,140</span></div>
      <div><i/><b>Mall Outlet</b><span>$1,860</span></div>
      <div><i/><b>Airport Kiosk</b><span>$980</span></div>
    </div>
  </div>;
}

export default function ProductsPage(){return <div className="inner-page">
  <FrameHero active="products" eyebrow="Web POS" title="Bigger Screen. Faster Billing." highlight="Smart Retail." text="From your browser to full business control — in just seconds. No app to install, no hardware to set up." image="/assets/products-hero-terminal.jpg" stats={[["Any Device","Browser based access"],["Real-Time","Cloud sync"],["24 / 7","Remote access"]]}/>
  <section className="frame-section" id="details"><div className="inner-container"><SectionTitle label="Your Business. Your Way." title="Full POS Power Right From Your Browser" text="Aonepos Web POS delivers every feature of the Tablet POS directly in your browser."/><div className="frame-grid four">{browserFeatures.map(([icon,t,desc])=><article className="frame-card" key={t}><i><Ico name={icon}/></i><h3>{t}</h3><p>{desc}</p></article>)}</div></div></section>
  <section className="frame-section frame-band"><div className="inner-container frame-split"><img className="dashboard-img" src="/assets/figma-invoice-dashboard.png" alt="AONEPOS dashboard"/><div><span className="inner-label">Why AONEPOS</span><h2>Run Your Store Without Being There</h2><p className="inner-muted left">You don’t need to be at the counter to keep your business running. AONEPOS gives you live updates and control.</p><ul className="check-list detailed">{checklist.map(([title,desc],i)=><li key={title}><b>{`0${i+1}`}</b><div><h4>{title}</h4><p>{desc}</p></div></li>)}</ul></div></div></section>
  <section className="frame-section"><div className="inner-container"><SectionTitle label="Built For Retail" title="Every Process. Every Business." text="Whether you sell candy, clothes, or fuel, we’ve got you covered."/><div className="industry-split"><div>{industries.map(([name,icon,desc],i)=><article className={i===0?"featured":""} key={name}><i><Ico name={icon}/></i><div><b>{name}</b>{desc&&<p>{desc}</p>}</div></article>)}</div><img src="/assets/products-retail-photo.jpg" alt="Retail checkout"/></div></div></section>
  <section className="frame-section frame-band"><div className="inner-container"><SectionTitle label="Features" title="Everything You Need. Nothing You Don’t." text="The Aonepos Web POS gives your team the same power as a dedicated terminal, delivered through your browser."/><div className="feature-zigzag">{core.map(([k,t,desc],i)=><article key={t}><div><small>{k}</small><h3>{t}</h3><p>{desc}</p></div><figure><img className="zigzag-blob" src="/assets/why-ellipse-large.png" alt="" aria-hidden="true"/><img className="zigzag-dots" src="/assets/why-dot-grid.png" alt="" aria-hidden="true"/><ZigzagMock kind={i===0?"checkout":i===1?"inventory":"locations"}/></figure></article>)}</div></div></section>
  <section className="frame-section"><div className="inner-container"><SectionTitle label="Core Features" title="Everything You Need Nothing You Don’t"/><div className="frame-grid three">{coreFeatures.map(([icon,t,desc])=><article className="frame-card" key={t}><i><Ico name={icon}/></i><h3>{t}</h3><p>{desc}</p></article>)}</div></div></section>
  <CTA label="Get Started With Aonepos" title="Ready To Upgrade Your Counter?" text="Start managing your business from anywhere in minutes. Book a free demo and see how AONEPOS Web POS gives you full control of your retail or restaurant operation — without being tied to a counter." primary="Start Free 30-Day Trial" secondary="Book A Demo"/><SiteFooter/>
</div>}
