import type { Metadata } from "next";
import { ProductDetailPage, type ProductPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "Tablet POS System for Retail & Restaurants — AOne POS",
  description: "Android tablet POS with EMV payments, kitchen display, shift close and purchase orders. Works with Star, Epson, Zywell and PAX. Keep your own processor.",
};

const data: ProductPageData = {
  hero: {
    eyebrow: "Tablet POS",
    title: "A tablet POS that runs",
    highlight: "the whole trading day.",
    text: "Ring it up, take the card, print the ticket, send it to the kitchen, and close the drawer with the variance already worked out. One Android tablet, no trip to the back office.",
    image: "/assets/products-hero-terminal.jpg",
    stats: [
      ["4 printer brands", "Star, Epson, Zywell, Bixolon"],
      ["EMV certified", "Datacap gateway, PAX terminals"],
      ["One screen", "Shift close with cash variance"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  overview: {
    label: "Your counter, sorted",
    title: "Everything the till needs, on one tablet.",
    text: "The tablet is the register, the print server and the shift report. Plug in the printer you already own and start selling.",
    cards: [
      ["any-device", "Any Android tablet", "Ten inches and up. No proprietary terminal to buy."],
      ["integrations", "Prints to your hardware", "Star, Epson and Zywell over LAN, USB or CloudPRNT."],
      ["secure", "Takes the card", "Datacap EMV and PAX POSLink, semi-integrated."],
      ["control", "Runs the station", "One tablet can drive the printers for the whole floor."],
    ],
  },
  why: {
    label: "Why AOne POS",
    title: "Built for a busy counter, not a demo.",
    text: "Speed at the till is the whole job. Everything else is arranged around not slowing it down.",
    image: "/assets/hero-pos-interface.jpeg",
    imageAlt: "AOne POS tablet checkout screen",
    points: [
      ["Four taps to tender", "Scan, quantity, tender, done. Split across cash and card without leaving the ticket."],
      ["Hold and recall", "Park a ticket, serve the next customer, bring it back by number."],
      ["Close with confidence", "Counted cash against expected, with paid-in and paid-out already applied."],
    ],
  },
  tabs: {
    label: "Built for retail",
    title: "Same tablet, set up differently on day one.",
    text: "Tell us the trade and we configure departments, taxes and the receipt layout before you go live.",
    icons: ["convenience", "liquor", "grocery", "smoke"],
    image: "/assets/products-retail-checkout.jpg",
    imageAlt: "Retail checkout counter",
    items: [
      ["Convenience", "Fast lanes, high SKU count and prices that change weekly. Barcode and alternate-SKU lookup, scheduled sale prices, and a separate card price per item."],
      ["Liquor", "Case breaks, mixed-six deals and distributor invoices. Mix ’N Match applies a group price across different products, so any six bottles hit the deal automatically."],
      ["Grocery", "Departments, tax by item, and shelf labels printed from the same catalogue you sell from. Import the whole range by CSV on day one."],
      ["Smoke shop", "High turnover and frequent promotions. Bulk breaks, time-of-day pricing, and house accounts for the regulars."],
    ],
  },
  features: {
    label: "Features",
    title: "Everything you need. Nothing you don’t.",
    text: "Three things a counter tablet has to get right: the sale, the payment, and the money at the end of the night.",
    blocks: [
      {
        label: "01 — Checkout",
        title: "Checkout that keeps up with the queue",
        short: "Scan, tap, tender, print. Barcode, SKU or alternate SKU, with modifiers and tips where you need them.",
        long: "Split a payment across cash and card. Take a tip on the terminal. Show the customer their total on a second screen as you ring it. New staff pick it up in a shift, not a week.",
        mock: { title: "Order", sub: "#ORD-2481", rows: [["Latte ×1", "$4.50"], ["Bagel", "$3.20"]], total: ["Total", "$7.70"], action: "CHARGE $7.70" },
      },
      {
        label: "02 — Payments",
        title: "Payments on your own terms",
        short: "Datacap-certified EMV and direct PAX POSLink. Tips, refunds, voids and end-of-day batch close.",
        long: "We take no share of your card volume. Bring the processor you already use, keep the terminal you already own, and settle the batch from the same screen you sell on.",
        mock: { title: "Approved", sub: "$47.20 · VISA ••4418", rows: [["AUTH", "042183"], ["Batch open", "38 transactions"]] },
      },
      {
        label: "03 — Shift & cash",
        title: "A shift close that actually balances",
        short: "Starting cash, paid in, paid out, expected, counted, difference — on one screen.",
        long: "Every drawer movement is recorded against the shift, so a variance is explained rather than discovered. Print it at the counter, or pull it later from the back office.",
        mock: { title: "Shift #218", sub: "Closing", rows: [["Expected", "$1,284.50"], ["Counted", "$1,282.00"]], total: ["Variance", "−$2.50"] },
      },
    ],
  },
  core: {
    label: "Core features",
    title: "The rest of the shift, covered.",
    cards: [
      ["integrations", "Kitchen routing", "Tickets reach the kitchen display or kitchen printer the moment they’re sent."],
      ["updated", "Refunds and exchanges", "Line-level refunds, exchanges and voids against the original ticket."],
      ["convenience", "Promotions built in", "Mix ’N Match, quantity breaks, scheduled sale prices and dual pricing."],
      ["cloud", "House accounts", "Let regulars run a tab and settle at month end."],
      ["grocery", "Label printing", "Shelf-edge and product labels from the same catalogue, on Bixolon."],
      ["roles", "Role-based access", "Cashiers ring sales. Managers void, discount and open reports."],
    ],
  },
  closing: {
    label: "Get started",
    title: "See it on your own products.",
    text: "Send a CSV of your catalogue before the call and we’ll load it in. Twenty minutes on a real tablet with your prices, your taxes and your receipt layout.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function TabletPosPage() { return <ProductDetailPage data={data} />; }
