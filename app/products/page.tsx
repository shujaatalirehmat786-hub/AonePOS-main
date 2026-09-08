import { CTA, FrameHero, SectionTitle, SiteFooter } from "../components/inner-pages";

// Icons are the exact Figma assets (node 2059:4): alpha masks painted with the
// design's gradient, linear-gradient(95.6deg,#0CB2E6 16.851%,#2CF49C 95.633%).
// Sizing per icon comes from each layer's mask-size in the design.
function Ico({ name }: { name: string }) {
  return <span className={`pico pico-${name}`} aria-hidden="true" />;
}

const browserFeatures: [string, string, string][] = [
  ["any-device", "Any Device", "Laptop, desktop, tablet or Chrome."],
  ["no-install", "No Installation", "Start without complicated setup."],
  ["cloud", "Cloud Based", "Your business stays connected."],
  ["updated", "Always Updated", "New features roll out automatically."],
];

const checklist: [string, string][] = [
  ["Live Sales Dashboard", "Monitor revenue as it happens."],
  ["Remote Price Updates", "Update prices without being at the store."],
  ["Staff Management", "View shifts, performance and transactions."],
];

const industries: [string, string, string?][] = [
  ["Convenience", "convenience", "Power up your checkout with our POS system, perfectly tuned for the hustle and bustle of retail."],
  ["Grocery", "grocery"],
  ["Liquor", "liquor"],
  ["Smoke Shop", "smoke"],
];

const core: [string, string, string, string][] = [
  ["01 — Smart Checkout", "Smart Checkout Experience",
   "Fast, simple billing from any browser. Give your team an easy-to-use interface designed for busy retail environments.",
   "Give your team an easy-to-use interface designed for busy retail environments. Fast, simple billing from any browser, on the hardware you already own."],
  ["02 — Real-time Inventory", "Real-Time Inventory",
   "Track stock levels, movements and availability across your business, with live updates the moment something changes.",
   "Track stock levels, movements and availability across your business. Know what is running low before it runs out."],
  ["03 — Multi-location", "Multi-Location Management",
   "Monitor every outlet from one login — compare sales, staffing and inventory across all your locations.",
   "Compare sales, staffing and inventory across every location. One login, every outlet, updated in real time."],
];

const coreFeatures: [string, string, string][] = [
  ["anywhere", "Access anywhere, anytime", "Open any browser — Chrome, Safari, Edge — log in and start managing your sales."],
  ["reporting", "Advanced reporting & analytics", "Daily sales, tax reports, profit margins, and performance insights."],
  ["integrations", "Easy integrations", "Connect with accounting software, payment gateways, and third-party tools."],
  ["control", "Centralised business control", "Monitor multiple outlets, track sales, and manage inventory from a single dashboard."],
  ["secure", "Secure cloud-based system", "All your data is encrypted and stored in the cloud with automatic backups so nothing is ever lost."],
  ["roles", "Role-based staff access", "Give each team member only the access they need — cashier, supervisor, or owner."],
];

// The three mock UI cards that sit inside the feature-zigzag panels.
function ZigzagMock({ kind }: { kind: "checkout" | "inventory" | "locations" }) {
  if (kind === "checkout") return <div className="zigzag-mock zm-checkout">
    <div className="zm-head"><span>Checkout</span><small>#ORD-2481</small></div>
    <div className="zm-pills">
      <span className="active"><i/><b>Latte</b></span>
      <span><i/><b>Bagel</b></span>
      <span><i/><b>Juice</b></span>
    </div>
    <div className="zm-rows">
      <div><span>Latte ×1</span><span>$4.50</span></div>
      <div><span>Bagel</span><span>$3.20</span></div>
    </div>
    <div className="zm-total"><span>Total</span><b>$7.70</b></div>
    <div className="zm-pay">CHARGE $7.70</div>
  </div>;
  if (kind === "inventory") return <div className="zigzag-mock zm-inventory">
    <div className="zm-head"><span>Inventory</span><small>Updated just now</small></div>
    <div className="zm-table">
      <div className="zm-thead"><span>ITEM</span><span>STOCK</span><span>STATUS</span></div>
      <div><span>Espresso Beans</span><span>48</span><em className="ok">In Stock</em></div>
      <div><span>Oat Milk</span><span>6</span><em className="low">Low</em></div>
      <div><span>Paper Cups</span><span>210</span><em className="ok">In Stock</em></div>
    </div>
  </div>;
  return <div className="zigzag-mock zm-locations">
    <div className="zm-head"><span>Locations</span><small>6 active</small></div>
    <div className="zm-list">
      <div><i/><b>Downtown Branch</b><span>$2,140</span></div>
      <div><i/><b>Mall Outlet</b><span>$1,860</span></div>
      <div><i/><b>Airport Kiosk</b><span>$980</span></div>
    </div>
  </div>;
}

// Decorative circles + dot grid layered behind each zigzag mock card.
function ZigzagDecor() {
  return <><span className="zz-circle zz-circle-tr" aria-hidden="true"/><span className="zz-circle zz-circle-bl" aria-hidden="true"/><img className="zigzag-dots" src="/assets/why-dot-grid.png" alt="" aria-hidden="true"/></>;
}

export default function ProductsPage(){return <div className="inner-page products-page">
  <FrameHero active="products" eyebrow="Web POS" title="Bigger Screen. Faster Billing." highlight="Smart Retail." text="From your browser to full business control — in just seconds. No app to install, no hardware to set up." image="/assets/products-hero-terminal.jpg" stats={[["Any Device","Browser-based access"],["Real-Time","Cloud sync"],["24 / 7","Remote access"]]}/>

  <section className="frame-section" id="details"><div className="inner-container">
    <SectionTitle label="Your Business, Your Way" title="Full POS Power Right From Your Browser" text="Aonepos Web POS delivers every feature of the Tablet POS directly in your browser."/>
    <div className="frame-grid four">{browserFeatures.map(([icon,t,desc])=><article className="frame-card" key={t}><i><Ico name={icon}/></i><h3>{t}</h3><p>{desc}</p></article>)}</div>
  </div></section>

  <section className="frame-section frame-band" id="why"><div className="inner-container frame-split">
    <img className="dashboard-img" src="/assets/products-web-dashboard.png" alt="AONEPOS Web POS dashboard"/>
    <div>
      <span className="inner-label">Why AONEPOS</span>
      <h2>Run Your Store Without Being There</h2>
      <p className="inner-muted left">You don’t need to be at the counter to keep your business running smoothly. Update prices, check today’s sales, pull reports.</p>
      <ul className="check-list detailed">{checklist.map(([title,desc],i)=><li key={title}><b>{`0${i+1}`}</b><div><h4>{title}</h4><p>{desc}</p></div></li>)}</ul>
    </div>
  </div></section>

  <section className="frame-section" id="industries"><div className="inner-container">
    <SectionTitle label="Built For Retail" title="Every Process, Every Business." text="Whether you sell candy, clothes, or fuel, we’ve got you covered."/>
    <div className="industry-split">
      <div>{industries.map(([name,icon,desc],i)=><article className={i===0?"featured":""} key={name}><i><Ico name={icon}/></i><div><b>{name}</b>{desc&&<p>{desc}</p>}</div></article>)}</div>
      <img src="/assets/products-retail-checkout.jpg" alt="Retail checkout"/>
    </div>
  </div></section>

  <section className="frame-section frame-band" id="features"><div className="inner-container">
    <SectionTitle label="Features" title="Everything You Need. Nothing You Don’t." text="The Aonepos Web POS gives your team the same power as a dedicated terminal, delivered entirely through your browser with zero hardware dependency."/>
    <div className="feature-zigzag">{core.map(([k,t,p1,p2],i)=><article key={t}>
      <div><small>{k}</small><h3>{t}</h3><p>{p1}</p><p>{p2}</p></div>
      <figure><div className="zz-panel"><ZigzagDecor/><ZigzagMock kind={i===0?"checkout":i===1?"inventory":"locations"}/></div></figure>
    </article>)}</div>
  </div></section>

  <section className="frame-section" id="core"><div className="inner-container">
    <SectionTitle label="Core features" title="Everything You Need Nothing You Don’t" text="The Aonepos Web POS gives your team the same power as a dedicated terminal, delivered entirely through a browser with zero hardware dependency."/>
    <div className="frame-grid three">{coreFeatures.map(([icon,t,desc])=><article className="frame-card" key={t}><i><Ico name={icon}/></i><h3>{t}</h3><p>{desc}</p></article>)}</div>
  </div></section>

  <CTA label="Get Started With Aonepos" title="Ready To Upgrade Your Counter?" text="Start managing your business from anywhere in minutes. Book a free demo and see how AONEPOS Web POS gives you full control of your retail or restaurant operation — without being tied to a counter." primary="Start Free 30-Day Trial" secondary="Book A Demo"/>
  <SiteFooter/>
</div>}
