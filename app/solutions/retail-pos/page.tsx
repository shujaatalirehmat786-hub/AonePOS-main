import type { Metadata } from "next";
import { SolutionDetailPage, type SolutionPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "Retail POS System for Independent Shops | AOne POS",
  description: "Retail POS with barcode scanning, purchase orders, Mix ’N Match promotions and dual pricing. Built for convenience, liquor, grocery and smoke shops.",
};

const data: SolutionPageData = {
  hero: {
    eyebrow: "Retail POS",
    title: "Retail POS for shops with a lot of SKUs",
    highlight: "and no spare time.",
    text: "Barcode to shelf label to purchase order, on one system. Built for independent convenience, liquor, grocery and smoke shops.",
    image: "/assets/products-retail-checkout.jpg",
    stats: [
      ["CSV import", "Your whole range on day one"],
      ["4 pricing rules", "Sale, quantity, time-of-day, dual price"],
      ["PO to shelf", "Purchasing and stock in one system"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  capability: {
    label: "Built for retail",
    title: "Every tool an independent shop actually uses.",
    text: "Not a cut-down enterprise system. These are the features that come up on a Tuesday afternoon.",
    cards: [
      ["inventory", "Barcode and alternate SKUs", "Scan anything on the shelf. Keep two distributor codes on one product so either barcode finds it, and both ring at your price."],
      ["pricing", "Promotions that hold together", "Mix ’N Match across different products, quantity breaks, scheduled sale prices and time-of-day pricing. Set them once; every till applies them."],
      ["po", "Purchase orders and receiving", "Raise a PO against a vendor, send the PDF, receive it in, and let cost and stock update together. Return POs cover what goes back."],
      ["invoicing", "Cash and card pricing", "Set a separate card price per product, or a card surcharge across the store. Shown clearly on the ticket and the receipt."],
    ],
  },
  checklist: {
    label: "Day to day",
    title: "The jobs that eat your week.",
    image: "/assets/products-web-dashboard.png",
    imageAlt: "AOne POS retail back office",
    items: [
      "Import your entire range by CSV, including costs and barcodes",
      "Print shelf-edge and product labels from the same catalogue you sell from",
      "Reprice one product or a whole department in a single action",
      "Let regulars run a house account and settle at month end",
      "Close every shift with counted cash against expected, and the variance explained",
    ],
  },
  how: {
    label: "How it works",
    title: "From delivery to shelf to till.",
    steps: [
      ["step-po", "Receive", "Raise a purchase order, book the delivery in, cost updates."],
      ["step-invoice", "Price", "Set the shelf price, the card price and any promotion."],
      ["step-inventory", "Label", "Print shelf-edge labels straight from the catalogue."],
      ["step-delivery", "Sell", "Every till reads the same prices, promotions and stock."],
    ],
  },
  compare: {
    label: "Why AOne POS",
    title: "How AOne POS compares to a basic till.",
    text: "A basic system rings up sales. Running a shop takes more than that.",
    column: "AOne POS Retail",
    rows: [
      ["Mix ’N Match promotions", "— — —", "Any products, one group price"],
      ["Purchase orders", "— — —", "Full PO and return PO"],
      ["Cash and card pricing", "Limited", "Per product or store-wide"],
      ["House accounts", "— — —", "Balances and part payments"],
    ],
  },
  audience: {
    label: "Who it’s for",
    title: "Built for independent retail of every kind.",
    cards: [
      ["goods", "Convenience stores", "High SKU count, fast lanes, weekly price changes."],
      ["food", "Liquor stores", "Case breaks, mixed-six deals, distributor invoices."],
      ["cashcarry", "Grocers and ethnic food", "Departments, per-item tax, shelf labels."],
      ["inventory", "Smoke and vape shops", "Fast turnover, frequent promotions, regulars on account."],
      ["garment", "Gift and general retail", "Product photos, seasonal pricing, quick repricing."],
      ["hardware", "Hardware and trade counters", "Alternate SKUs, quantity breaks, account customers."],
    ],
  },
  visibility: {
    label: "Complete visibility",
    title: "Know what the shop did before you get there.",
    text: "Takings, tax, tender split and stock movement for every till, updated as sales happen. Open it from your phone on the way in.",
    image: "/assets/figma-invoice-dashboard.png",
    imageAlt: "AOne POS sales dashboard",
  },
  closing: {
    label: "Get started",
    title: "See it on your own range.",
    text: "Send a CSV of your products before the call. Twenty minutes, your prices, your promotions, your questions.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function RetailPosPage() { return <SolutionDetailPage data={data} />; }
