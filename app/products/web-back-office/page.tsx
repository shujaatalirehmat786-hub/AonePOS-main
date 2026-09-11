import type { Metadata } from "next";
import { ProductDetailPage, type ProductPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "POS Back Office Software — Cloud Dashboard | AOne POS",
  description: "Run pricing, purchasing, staff and reporting from any browser. Change a price and every till follows. No install, no VPN, no back-office PC.",
};

const data: ProductPageData = {
  root: "web-back-office-page",
  hero: {
    eyebrow: "Web back office",
    title: "Run the shop from a browser,",
    highlight: "not the back room.",
    text: "Pricing, purchasing, staff, taxes and reporting in one cloud back office. Change a price here and every till on the floor follows.",
    image: "/assets/web-back-office-dashboard.jpg",
    stats: [
      ["Any browser", "Chrome, Safari, Edge — nothing to install"],
      ["Live", "Changes reach the floor as you save"],
      ["Every till", "Tablet, handheld and web on one catalogue"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  overview: {
    label: "Your business, your way",
    title: "One catalogue, every till.",
    text: "Products, prices, taxes and promotions live in one place. Every register reads from it, so there’s no version to sync and nothing to push.",
    cards: [
      ["no-install", "No installation", "Sign in and work. No back-office PC to maintain."],
      ["cloud", "Live to the floor", "A price change reaches the tills as you save it."],
      ["anywhere", "Works anywhere", "Laptop at home, phone on the road, tablet in the stockroom."],
      ["updated", "Always current", "New features arrive without an upgrade weekend."],
    ],
  },
  why: {
    label: "Why AOne POS",
    title: "Run the store without being in it.",
    text: "The jobs that used to need a trip to the shop — repricing, receiving, checking the day — all happen from wherever you are.",
    image: "/assets/figma-invoice-dashboard.png",
    imageAlt: "AOne POS web back office dashboard",
    points: [
      ["Live sales dashboard", "Today’s takings as they happen, not tomorrow morning."],
      ["Remote price updates", "Reprice one product or a whole department from a laptop."],
      ["Staff oversight", "Shifts, sales by employee, and every void and discount on record."],
    ],
  },
  tabs: {
    label: "Built for retail",
    title: "Every process, every trade.",
    icons: ["convenience", "liquor", "grocery", "smoke"],
    image: "/assets/products-retail-checkout.jpg",
    imageAlt: "Independent retail counter",
    items: [
      ["Convenience", "Import thousands of lines by CSV, set tax per item, and reprice a whole department in one action."],
      ["Liquor", "Build Mix ’N Match groups, schedule weekend deals, and receive distributor orders against a purchase order."],
      ["Grocery", "Departments, per-item tax, and shelf labels generated straight from the catalogue."],
      ["Smoke shop", "Quantity breaks, time-of-day pricing and house accounts, all managed from one screen."],
    ],
  },
  features: {
    label: "Features",
    title: "The three screens you’ll live in.",
    text: "Stock, purchasing and the numbers at the end of the day.",
    blocks: [
      {
        label: "01 — Inventory",
        title: "Real-time inventory",
        short: "Stock moves as you sell. Cost moves as you receive.",
        long: "Alternate SKUs so the same product scans under two distributor barcodes. CSV import and export for the whole range. Photos, departments, categories and vendors on one record.",
        mock: {
          title: "Inventory", sub: "updated just now",
          table: {
            head: ["ITEM", "STOCK", "STATUS"],
            rows: [
              ["Espresso Beans", "48", "In stock", "ok"],
              ["Oat Milk", "6", "Low", "low"],
              ["Paper Cups", "210", "In stock", "ok"],
            ],
          },
        },
      },
      {
        label: "02 — Purchasing",
        title: "Purchase orders, start to finish",
        short: "Raise a PO against a vendor, send the PDF, receive it in, and let cost and stock update together.",
        long: "Return purchase orders handle what goes back. Last purchase price is kept per product, so your margin reflects what you actually paid rather than what the list said.",
        mock: { title: "PO-1043", sub: "Open", rows: [["Vendor", "Lone Star Distributors"], ["24 lines", "$3,180.00"]], action: "Receive" },
      },
      {
        label: "03 — Reporting",
        title: "Reporting your accountant will accept",
        short: "Sales by department, by hour and by cashier. Tax collected, broken out by rate.",
        long: "Shift reports with cash counted against cash expected. Inventory valued at cost and at retail. Export any of it to PDF or CSV and send it on.",
        mock: { title: "Today", sub: "Net sales", rows: [["Net sales", "$4,182.60"], ["Tax", "$318.40"], ["Cash", "$1,284.50"], ["Card", "$2,898.10"]] },
      },
    ],
  },
  core: {
    label: "Core features",
    title: "The rest of the back office.",
    cards: [
      ["roles", "Role-based access", "Cashier, manager, owner — each sees only their own scope."],
      ["convenience", "Promotions manager", "Mix ’N Match, quantity, scheduled and time-of-day pricing in one place."],
      ["cloud", "Customers and house accounts", "Balances, part payments and settlement history."],
      ["control", "Hardware setup", "Add stations, printers, terminals and displays without a site visit."],
      ["any-device", "Digital menu boards", "Design the board, push it to the screens, prices pulled from the catalogue."],
      ["integrations", "Online ordering", "Publish a pickup and delivery storefront from the same catalogue."],
    ],
  },
  closing: {
    label: "Get started",
    title: "See your own catalogue in it.",
    text: "Send us a CSV before the call. We’ll load your products, prices and departments so you’re looking at your shop, not a demo store.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function WebBackOfficePage() { return <ProductDetailPage data={data} />; }
