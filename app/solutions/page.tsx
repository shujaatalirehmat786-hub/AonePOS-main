import { CTA, FrameHero, SectionTitle, SiteFooter } from "../components/inner-pages";

// Icons are the exported Figma assets (node 2106:8): alpha masks painted with the
// design's gradient, linear-gradient(95.6deg,#0CB2E6 16.851%,#2CF49C 95.633%).
function Ico({ name }: { name: string }) {
  return <span className={`sico sico-${name}`} aria-hidden="true" />;
}

const tools: [string, string, string][] = [
  ["po", "Purchase Order Management", "Create, approve, and track bulk purchase orders with supplier and customer details, delivery dates, and payment terms — all in one place."],
  ["pricing", "Multi-Tier B2B Pricing", "Set distinct price levels for different customer groups — walk-in buyers, regional distributors, long-term accounts — and the system applies the right price automatically."],
  ["inventory", "Real-Time Inventory Tracking", "Monitor stock levels in every warehouse and outlet in real time. Get low-stock alerts before you run out — and reorder directly from the back office."],
  ["invoicing", "Automated Invoicing", "Generate professional invoices instantly from confirmed orders with your branding, payment terms, and delivery details — email them to clients in one click."],
];

const workflow: [string, string, string][] = [
  ["step-po", "Purchase Order", "Create and manage purchase orders from one."],
  ["step-inventory", "Inventory", "Track incoming stock and warehouse availability."],
  ["step-invoice", "Order & Invoice", "Apply customer-specific pricing & generate invoices"],
  ["step-delivery", "Delivery", "Coordinate dispatch, delivery schedules and order."],
];

const compare: [string, string, string][] = [
  ["Purchase Order Management", "— — —", "Full PO lifecycle"],
  ["Multi-Tier B2B Pricing", "— — —", "Unlimited price groups"],
  ["Automated Invoicing", "Limited", "Branded & emailed"],
  ["Multi-Warehouse Stock", "— — —", "Real-time sync"],
];

const markets: [string, string, string][] = [
  ["food", "Food & Beverage Distributors", "Streamline orders, inventory, and deliveries."],
  ["goods", "Wholesale Goods & Import Traders", "Manage imports, stock, and supplier orders."],
  ["hardware", "Hardware & Building Supplies", "Keep products, inventory, and sales organized."],
  ["garment", "Garment & Textile Wholesalers", "Simplify stock, orders, and wholesale operations."],
  ["electronics", "Electronics Parts Distributors", "Track parts, inventory, and supplier orders."],
  ["cashcarry", "Cash-and-Carry & B2B Retail", "Manage bulk sales, stock, and customer orders."],
];

const workflowPoints = [
  "Fast barcode scanning for receiving & dispatch",
  "Audited stock transfers between warehouses",
  "Supplier PO tracking from request to delivery",
  "Automated delivery scheduling & dispatch",
  "Mobile POS for field sales & orders",
];

export default function SolutionsPage(){return <div className="inner-page solutions-page">
  <FrameHero active="solutions" eyebrow="Web POS" title="Manage Inventory, Orders &" highlight="Invoicing" text="Wholesale distributors & B2B sellers need one platform to manage purchase orders, pricing, client accounts, & warehouse stock." image="/assets/solutions-hero-devices.png" stats={[["50%","Less time on invoicing"],["Real-Time","Stock visibility all"],["10+","Modules available"]]}/>

  <section className="frame-section" id="details"><div className="inner-container">
    <SectionTitle label="Built for B2B Sellers" title="Every tool a wholesale business needs" text="From purchase orders to multi-tier client pricing, AONEPOS handles the complexity of wholesale so your team can focus on moving product."/>
    <div className="frame-grid two numbered">{tools.map(([icon,t,desc],n)=><article className="frame-card" key={t}><i><Ico name={icon}/></i><b>{`0${n+1}`}</b><h3>{t}</h3><p>{desc}</p></article>)}</div>
  </div></section>

  <section className="frame-section frame-band" id="warehouse"><div className="inner-container frame-split">
    <img className="photo-img" src="/assets/solutions-warehouse.jpg" alt="Warehouse and distribution system"/>
    <div>
      <span className="inner-label">Warehouse &amp; Distribution</span>
      <h2>One System Warehouse to Doorstep</h2>
      <p className="inner-muted left">We connect your purchasing, stock, sales, and delivery workflow so nothing falls through the cracks — even across multiple warehouses or fulfillment partners.</p>
      <ul className="check-list">{workflowPoints.map(x=><li key={x}>{x}</li>)}</ul>
    </div>
  </div></section>

  <section className="frame-section" id="how"><div className="inner-container">
    <SectionTitle label="How It Works" title="From Purchase Order to Final Delivery" text="Keep every wholesale transaction connected from the moment an order is placed to the moment products reach your customer."/>
    <div className="process-row">
      {workflow.map(([icon,t,desc])=><article key={t}><i><Ico name={icon}/></i><b>{t}</b><small>{desc}</small></article>)}
      <span className="process-hub" aria-hidden="true"><img src="/assets/sol-logo-mark.png" alt=""/></span>
    </div>
  </div></section>

  <section className="frame-section frame-band" id="compare"><div className="inner-container">
    <SectionTitle label="Why Aonepos" title="How AONEPOS compares to a basic POS" text="Wholesale is complex. A generic retail POS won’t cut it — here’s what sets AONEPOS apart for B2B operations."/>
    <div className="compare-table">
      <div className="ct-col">
        <div className="ct-head">Feature</div>
        {compare.map(r=><div key={r[0]}>{r[0]}</div>)}
      </div>
      <div className="ct-col ct-basic">
        <div className="ct-head">Basic POS</div>
        {compare.map(r=><div key={r[0]}>{r[1]}</div>)}
      </div>
      <div className="ct-col ct-aone">
        <span className="ct-ribbon">popular</span>
        <div className="ct-head">AONEPOS Wholesale</div>
        {compare.map(r=><div key={r[0]}><em>✓</em>{r[2]}</div>)}
      </div>
    </div>
  </div></section>

  <section className="frame-section" id="markets"><div className="inner-container">
    <SectionTitle label="Who It’s For" title="Built for wholesale businesses of every kind" text="If you sell in bulk, manage accounts, or distribute to other businesses, AONEPOS was designed for you."/>
    <div className="frame-grid three">{markets.map(([icon,t,desc])=><article className="frame-card center-card" key={t}><i><Ico name={icon}/></i><h3>{t}</h3><p>{desc}</p></article>)}</div>
  </div></section>

  <section className="frame-section frame-band" id="visibility"><div className="inner-container frame-split">
    <div>
      <span className="inner-label">Complete Visibility</span>
      <h2>Know what’s happening across your business.</h2>
      <p className="inner-muted left">Get a clearer view of inventory, orders, pricing and operations across your wholesale business — so your team can make faster, more informed decisions.</p>
    </div>
    <img className="dashboard-img" src="/assets/products-web-dashboard.png" alt="AONEPOS business dashboard"/>
  </div></section>

  <CTA label="Get Started With Aonepos" primary="Start Free 30-Day Trial" secondary="Book A Demo"/>
  <SiteFooter/>
</div>}
