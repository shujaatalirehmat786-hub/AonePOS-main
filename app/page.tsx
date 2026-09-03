'use client';

import { useState } from 'react';

const products = [
  ['tablet', 'Tablet POS'],
  ['mobile', 'Mobile POS'],
  ['web', 'Web POS'],
];
const partners = [
  ['Star Micronics', 'Receipt printing, including CloudPRNT'],
  ['Epson', 'ePOS receipt printing'],
  ['Zywell', 'Receipt printing'],
  ['Bixolon', 'Shelf and product labels'],
  ['PAX', 'EMV payment terminals'],
  ['Datacap', 'Payment gateway certification'],
];
const insightCards = [
  [
    '▤',
    'Shift close',
    'Starting cash, paid in, paid out, expected, counted, difference — on one screen.',
  ],
  [
    '▥',
    'Employee sales',
    'Who rang what, what they discounted, and what they voided.',
  ],
  [
    '▦',
    'Inventory',
    'What you are holding, what it cost you, what it is worth today.',
  ],
];
const plans = [
  {
    name: 'BASIC PLAN',
    price: 59,
    featured: false,
    items: [
      'Cloud-Based POS System',
      'Inventory Management',
      'Reports & Analytics',
      'Employee Management',
      'Support & Control',
    ],
  },
  {
    name: 'ENTERPRISE PLAN',
    price: 199,
    featured: true,
    items: [
      'Cloud-Based POS System',
      'Inventory Management',
      'Multi-Location Management',
      'Reports & Analytics',
      'Employee Management',
    ],
  },
  {
    name: 'PREMIUM PLAN',
    price: 149,
    featured: false,
    items: [
      'Cloud-Based POS System',
      'Inventory Management',
      'Multi-Location Management',
      'Reports & Analytics',
      'Employee Management',
    ],
  },
];
const whyBenefits = [
  [
    'Checkout that keeps up with a queue',
    'Scan, tap, tender, done. Barcode, SKU or alternate-SKU lookup, split payments across cash and card, tips, and a customer-facing display that shows the total as you ring it. New cashiers pick it up in a shift, not a week.',
  ],
  [
    'Pricing rules that match how you actually sell',
    'Mix ’N Match deals across different products — any six for $6.99. Bulk breaks, scheduled sale prices, and separate cash and card prices per item. Set it once in the back office and every register follows.',
  ],
  [
    'Purchasing, not just stock counts',
    'Raise a purchase order, receive it against a vendor, and let cost and stock move together. Alternate SKUs for the same product from two distributors. CSV import and export. Shelf labels printed from the same catalogue.',
  ],
  [
    'Your processor. Your hardware.',
    'We are certified with Datacap for EMV and talk to PAX terminals directly. We do not take a share of your card volume, and we will not sell you a terminal you cannot use anywhere else.',
  ],
  [
    'The kitchen and the counter on one system',
    'Orders reach the kitchen display or the kitchen printer the moment they are sent. The order screen tells customers when their food is up. No second subscription, no separate tablet.',
  ],
  [
    'Menu boards, built in',
    'Drag text, images and product lists onto a canvas, then push it to the screens on the wall. Prices come from your catalogue, so changing a price on the register changes the board. Everyone else sells this separately.',
  ],
];
const faqs = [
  [
    'What kind of businesses use AOne POS?',
    'Independent retailers, liquor and convenience stores, grocers, cafés and quick-service restaurants. It fits best where you carry a lot of products, run promotions, and want purchasing and the till on one system. It is not built for full-service restaurants that need table and seat management.',
  ],
  [
    'Do I have to use your payment processing?',
    'No. We are certified with Datacap for EMV and integrate directly with PAX terminals, and we take no share of your card volume. Most POS companies make their margin on processing, which is why they will not let you leave. We would rather sell you software.',
  ],
  [
    'What hardware does AOne POS work with?',
    'Receipt printers from Star Micronics, Epson and Zywell, including Star CloudPRNT. Bixolon label printers. PAX payment terminals. Standard barcode scanners and cash drawers. Android tablets and handhelds, or any modern browser. Send us your model and we will confirm before you buy anything.',
  ],
  [
    'Can I import the products I already have?',
    'Yes. Send a CSV of your catalogue and we will import it, including SKUs, alternate SKUs, barcodes, costs, prices and departments. Most shops are trading on the new system the same week.',
  ],
  [
    'How long does setup take?',
    'A single-register shop is usually live the same day once the catalogue is in. Multiple registers, kitchen printers and menu boards take longer, and we do that with you on a call rather than leaving you with a manual.',
  ],
  [
    'Can I run more than one shop on it?',
    'Each location runs its own back office today, and you can hold as many as you like under one account. Consolidated reporting across locations from a single dashboard is on the roadmap — ask us where it is if that matters to you now.',
  ],
  [
    'Where is my data, and who can see it?',
    'Your catalogue, sales and customer records are held in the cloud and reachable from any browser you sign in to. Staff see only what their role allows — a cashier cannot open reports or delete a day’s sales. You can export everything at any time.',
  ],
  [
    'What does support cost?',
    'Nothing extra. Support is in every plan, from a team in Dallas that has set up the same hardware you are running. Shop Plus adds priority response and a scheduled onboarding call.',
  ],
];

function Arrow({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`hf-arrow${dark ? ' dark' : ''}`} aria-hidden="true">
      →
    </span>
  );
}

function Receipt({ restaurant = false }: { restaurant?: boolean }) {
  const rows = restaurant
    ? [
        ['Grilled Salmon', '$24.00', 'product-salad.png'],
        ['Caesar Salad', '$11.00', 'product-salad.png'],
        ['Iced Tea (2)', '$7.00', 'product-drink.png'],
      ]
    : [
        ['Shirt — Slim Fit', '$42.00', 'product-shirt.png'],
        ['Product: Sneakers', '$42.00', 'product-shoes.png'],
        ['Socks × 2', '1 X — $42.00', 'product-bag.png'],
      ];
  return (
    <div className="hf-receipt">
      {rows.map(([name, price, image]) => (
        <div className="hf-receipt-row" key={name}>
          <img src={`/assets/${image}`} alt="" />
          <span>{name}</span>
          <strong>{price}</strong>
        </div>
      ))}
      <div className="hf-receipt-total">
        <b>TOTAL</b>
        <strong>{restaurant ? '$42.00' : '$145.00'}</strong>
      </div>
    </div>
  );
}

export default function Page() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [productMenu, setProductMenu] = useState(false);
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState(1);
  const [openBenefit, setOpenBenefit] = useState(0);

  return (
    <div className="home-frame" id="home">
      <header className="hf-header">
        <div className="hf-container hf-nav">
          <a className="hf-logo" href="/" aria-label="AOnePOS home">
            <img src="/assets/aonepos-logo.png" alt="AOnePOS" />
          </a>
          <button
            className="hf-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenu}
          >
            ☰
          </button>
          <nav
            className={mobileMenu ? 'open' : ''}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={() => setMobileMenu(false)}>
              Home
            </a>
            <div className={`hf-products${productMenu ? ' open' : ''}`}>
              <button
                onClick={() => setProductMenu(!productMenu)}
                aria-haspopup="true"
                aria-expanded={productMenu}
              >
                Products⌄
              </button>
              <div className="hf-product-dropdown">
                {products.map(([icon, label]) => (
                  <a
                    href={`/products#${icon}`}
                    key={icon}
                    onClick={() => {
                      setProductMenu(false);
                      setMobileMenu(false);
                    }}
                  >
                    <img src={`/assets/product-${icon}-icon.png`} alt="" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/solutions" onClick={() => setMobileMenu(false)}>
              Solutions⌄
            </a>
            <a href="/pricing" onClick={() => setMobileMenu(false)}>
              Pricing
            </a>
            <a href="/about" onClick={() => setMobileMenu(false)}>
              About
            </a>
            <a href="/contact" onClick={() => setMobileMenu(false)}>
              Contact
            </a>
          </nav>
          <a className="hf-button hf-header-cta" href="/contact#contact-form">
            Book a demo <Arrow dark />
          </a>
        </div>
      </header>

      <main>
        <section className="hf-hero">
          <div className="hf-container hf-hero-inner">
            <div className="hf-hero-copy">
              <span className="hf-pill">
                Retail &amp; restaurant POS <Arrow />
              </span>
              <h1>
                One POS for the register,
                <br />
                the stockroom and <span>the kitchen.</span>
              </h1>
              <p>
                Checkout, inventory, purchase orders, kitchen display and
                digital menu boards — in one price, running on the printers and
                card terminals you already own.
              </p>
              <div className="hf-actions">
                <a
                  className="hf-button hf-primary"
                  href="/contact#contact-form"
                >
                  Book a 20-minute demo <Arrow dark />
                </a>
                <a className="hf-button hf-secondary" href="#pricing">
                  See what’s included <Arrow />
                </a>
              </div>
              <div className="hf-hero-stats">
                <div>
                  <strong>4+ printer brands</strong>
                  <span>Star, Epson, Zywell, Bixolon</span>
                </div>
                <div>
                  <strong>3 ways to ring up</strong>
                  <span>Tablet, handheld, web browser</span>
                </div>
                <div>
                  <strong>1 price</strong>
                  <span>Every module included</span>
                </div>
              </div>
            </div>
            <div
              className="hf-hero-art"
              aria-label="AONEPOS point of sale preview"
            >
              <img
                className="hf-circle-large"
                src="/assets/hero-ellipse-large.png"
                alt=""
              />
              <img
                className="hf-circle-small"
                src="/assets/hero-ellipse-small.png"
                alt=""
              />
              <img
                className="hf-dots"
                src="/assets/hero-dot-frame.png"
                alt=""
              />
              <div className="hf-hero-tablet">
                <img
                  className="hf-hero-tablet-frame"
                  src="/assets/hero-tablet-frame.png"
                  alt=""
                />
                <img
                  className="hf-hero-tablet-screen"
                  src="/assets/hero-pos-interface.jpeg"
                  alt="AONEPOS point of sale checkout screen"
                />
              </div>
              <img
                className="hf-hero-payment"
                src="/assets/hero-payment-card.png"
                alt="Payment successful confirmation"
              />
              <img
                className="hf-hero-assessment"
                src="/assets/hero-assessment-chart.png"
                alt="Assessment score analytics card"
              />
            </div>
          </div>
        </section>

        <section className="hf-partners">
          <h2>Works with the hardware already on your counter.</h2>
          <p className="hf-partners-copy">
            Star Micronics, Epson, Zywell and Bixolon printers. PAX
            terminals. Datacap-certified EMV. Star CloudPRNT for printers
            that live on the far side of the building. If it is already on
            your counter, there is a good chance it already works.
          </p>
          <a className="hf-partners-cta" href="/contact#contact-form">
            Ask us about your model <span aria-hidden="true">→</span>
          </a>
          <div className="hf-partner-window">
            <div className="hf-partner-track">
              {[0, 1].map((copy) => (
                <div
                  className="hf-partner-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {partners.map(([name, line], index) => (
                    <span
                      className={`hf-partner hf-partner-${index + 1}`}
                      key={`${name}-${index}`}
                    >
                      <b>{name}</b>
                      <small>{line}</small>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="hf-why">
          <div className="hf-container hf-why-grid">
            <div className="hf-why-copy">
              <span className="hf-label">Why AOne POS</span>
              <h2>
                Why independent shops
                <br />
                switch to AOne POS.
              </h2>
              <p>
                Most POS companies sell you cheap software and make it back on
                your card volume and a list of add-ons. We sell one system with
                everything already in it, and we do not touch your processing.
                Here is what that actually gets you.
              </p>
              {whyBenefits.map(([title, body], index) => (
                <div className="hf-benefit" key={title}>
                  <i>{String(index + 1).padStart(2, '0')}</i>
                  <div>
                    <button
                      className="hf-benefit-head"
                      onClick={() =>
                        setOpenBenefit(openBenefit === index ? -1 : index)
                      }
                      aria-expanded={openBenefit === index}
                    >
                      <h3>{title}</h3>
                      <span className="hf-benefit-toggle">
                        {openBenefit === index ? '−' : '+'}
                      </span>
                    </button>
                    {openBenefit === index && <p>{body}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="hf-why-art" aria-label="AONEPOS checkout preview">
              <img
                className="hf-why-ellipse-large"
                src="/assets/why-ellipse-large.png"
                alt=""
              />
              <img
                className="hf-why-ellipse-small"
                src="/assets/why-ellipse-small.png"
                alt=""
              />
              <img
                className="hf-why-dots"
                src="/assets/why-dot-grid.png"
                alt=""
              />
              <img
                className="hf-why-payment"
                src="/assets/why-payment-success.png"
                alt="Payment successful"
              />
              <img
                className="hf-why-checkout"
                src="/assets/why-checkout.png"
                alt="AONEPOS checkout receipt"
              />
              <img
                className="hf-why-earnings"
                src="/assets/why-earnings.png"
                alt="Earnings summary"
              />
            </div>
          </div>
        </section>

        <section className="hf-insights">
          <div className="hf-container">
            <div className="hf-section-heading">
              <span className="hf-label">Reporting</span>
              <h2>
                The numbers your accountant asks for,
                <br />
                without the spreadsheet.
              </h2>
              <p>
                Close the day and get the day. Sales by department, by hour, by
                cashier. Cash counted against cash expected, with the variance
                called out rather than buried. Tax collected, broken out by
                rate. Export any of it to PDF or CSV and send it on.
              </p>
            </div>
            <div className="hf-insight-grid">
              {insightCards.map(([icon, value, copy]) => (
                <article key={value}>
                  <i>{icon}</i>
                  <strong>{value}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hf-dashboard">
          <div className="hf-container">
            <div className="hf-section-heading">
              <span className="hf-label">Back office</span>
              <h2>
                Every till in the shop,
                <br />
                on one back office.
              </h2>
              <p>
                Every register, tablet and handheld reports into the same place.
                Open it on a laptop at home and you are looking at the same
                numbers your manager sees on the floor — updated as sales
                happen, not overnight in a batch.
              </p>
            </div>
            <figure>
              <img
                src="/assets/figma-invoice-dashboard.png"
                alt="AONEPOS business dashboard"
              />
            </figure>
            <p className="hf-dashboard-copy">
              Add a register, change a price, or move a product between
              departments from the same screen. The change is live on the
              floor before you close the tab.
            </p>
            <a className="hf-dashboard-cta" href="/contact#contact-form">
              See the back office <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="hf-solutions">
          <div className="hf-container">
            <div className="hf-section-heading">
              <span className="hf-label">By business type</span>
              <h2>Built for the counter you actually run.</h2>
              <p>
                A liquor store and a taqueria do not need the same till. Same
                platform underneath, set up differently on day one.
              </p>
            </div>
            <div className="hf-solution-grid">
              <article>
                <h3>
                  <img src="/assets/solution-retail.png" alt="" />
                  Retail
                </h3>
                <p>For shops with a lot of SKUs and not a lot of spare time.</p>
                <ul>
                  {[
                    'Barcode and alternate-SKU lookup',
                    'Purchase orders and vendor receiving',
                    'Shelf-edge and re-pricing labels',
                    'Scheduled sale, bulk and time-based pricing',
                  ].map((item) => (
                    <li key={item}>
                      <img src="/assets/icon-check.png" alt="" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Receipt />
              </article>
              <article>
                <h3>
                  <img src="/assets/solution-restaurant.png" alt="" />
                  Restaurants
                </h3>
                <p>
                  Ticket in, ticket out, and the kitchen never waits on the
                  till.
                </p>
                <ul>
                  {[
                    'Kitchen display and kitchen printer routing',
                    'Modifiers and modifier groups',
                    'Order screen so customers know when food is up',
                    'Dine-in and to-go on the same ticket',
                  ].map((item) => (
                    <li key={item}>
                      <img src="/assets/icon-check.png" alt="" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Receipt restaurant />
              </article>
              <article>
                <h3>
                  <img src="/assets/solution-liquor.png" alt="" />
                  Liquor &amp; convenience
                </h3>
                <p>
                  For counters where the margin lives in the promotion and the
                  pricing.
                </p>
                <ul>
                  {[
                    'Mix ’N Match — any six for $6.99, across different products',
                    'Separate cash and card prices, per item',
                    'Case-level receiving against distributor invoices',
                    'House accounts for regulars who settle at month end',
                  ].map((item) => (
                    <li key={item}>
                      <img src="/assets/icon-check.png" alt="" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="hf-pricing" id="pricing">
          <div className="hf-container">
            <div className="hf-section-heading">
              <span className="hf-label">Pricing</span>
              <h2>One price. Every module. No cut of your card volume.</h2>
              <p>
                Most POS companies publish a low monthly figure and recover it
                on processing and add-ons. Kitchen display is extra. Online
                ordering is extra. Menu boards are a different vendor entirely.
                Ours is one number, and this is the whole of it.
              </p>
              <div className="hf-toggle" aria-label="Billing frequency">
                <button
                  className={billing === 'monthly' ? 'active' : ''}
                  onClick={() => setBilling('monthly')}
                  aria-pressed={billing === 'monthly'}
                >
                  Monthly
                </button>
                <button
                  className={billing === 'yearly' ? 'active' : ''}
                  onClick={() => setBilling('yearly')}
                  aria-pressed={billing === 'yearly'}
                >
                  Yearly
                </button>
              </div>
            </div>
            <div className="hf-plan-grid">
              {plans.map((plan) => (
                <article
                  className={plan.featured ? 'featured' : ''}
                  key={plan.name}
                >
                  <div className="hf-plan-top">
                    <small>{plan.name}</small>
                    <strong>
                      $
                      {billing === 'yearly'
                        ? Math.round(plan.price * 0.8)
                        : plan.price}
                      <em>/ Per Monthly</em>
                    </strong>
                    <a href="/contact#contact-form">Get Started</a>
                  </div>
                  <h3>This Package Includes:</h3>
                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <span>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hf-faq">
          <div className="hf-container">
            <div className="hf-section-heading">
              <span className="hf-label">FAQ</span>
              <h2>Questions we get asked on every demo call.</h2>
              <p>
                Unlock real-time insights that help you grow smarter and faster.
                From sales trends to inventory performance, AONEPOS gives you
                the clarity.
              </p>
            </div>
            <div className="hf-faq-list">
              {faqs.map(([question, answer], index) => (
                <button
                  className={openFaq === index ? 'active' : ''}
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  key={question}
                  aria-expanded={openFaq === index}
                >
                  <span>
                    {question}
                    <i>{openFaq === index ? '−' : '+'}</i>
                  </span>
                  {openFaq === index && <small>{answer}</small>}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="hf-cta">
          <div className="hf-container hf-cta-box">
            <span className="hf-label">Get started</span>
            <h2>See it running on your own products.</h2>
            <p>
              Send us a CSV of your catalogue before the call and we will load
              it in. Twenty minutes, your products, your prices, your questions
              — and a straight answer on whether we fit.
            </p>
            <div className="hf-actions">
              <a className="hf-button hf-primary" href="/contact#contact-form">
                Book a 20-minute demo <Arrow dark />
              </a>
              <a
                className="hf-button hf-secondary"
                href="/contact#contact-form"
              >
                Start a 30-day trial <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="hf-footer">
        <div className="hf-container">
          <div className="hf-footer-brand">
            <img src="/assets/aonepos-footer-logo.png" alt="AOnePOS" />
          </div>
          <div className="hf-footer-grid">
            <div>
              <h3>Social Links</h3>
              <div className="hf-social">
                <a href="#" aria-label="Instagram">
                  ◎
                </a>
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="Twitter">
                  ♥
                </a>
                <a href="#" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>
            <div>
              <h3>About</h3>
              <p>
                AOne POS is a point-of-sale system for independent retailers and
                restaurants. One system covers the register, inventory,
                purchasing, the kitchen and the menu boards on the wall — on the
                printers and card terminals you already own, with the payment
                processor you already use. Built and supported from Dallas,
                Texas.
              </p>
            </div>
            <div>
              <h3>Link</h3>
              <nav>
                <a href="#home">Home</a>
                <a href="/products">Products</a>
                <a href="/solutions">Solutions</a>
                <a href="/pricing">Pricing</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>
            <div className="hf-contact">
              <h3>Contact</h3>
              <p>
                <img src="/assets/footer-location.png" alt="" />
                2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234
              </p>
              <p>
                <img src="/assets/footer-phone.png" alt="" />
                +866-882-4292
              </p>
              <p>
                <img src="/assets/footer-email.png" alt="" />
                info@aonepos.com
              </p>
            </div>
          </div>
        </div>
        <div className="hf-copyright">
          <div className="hf-container">
            <span>© Copyright © 2026 Aonepos. All Rights Reserved.</span>
            <nav>
              <a href="/privacy-policy">Privacy Policy</a>
              <i />
              <a href="/terms">Terms &amp; conditions</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
