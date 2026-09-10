import type { Metadata } from "next";
import { SolutionDetailPage, type SolutionPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "Wholesale & Trade Counter POS System | AOne POS",
  description: "POS for cash-and-carry and trade counters. Purchase orders, quantity-break pricing, customer accounts with balances, and bulk order entry.",
};

// Positioned on what exists today — purchase orders, quantity breaks, customer
// accounts and bulk entry. No multi-tier B2B price groups, multi-warehouse
// transfers, low-stock alerts or delivery scheduling are claimed here.
const data: SolutionPageData = {
  hero: {
    eyebrow: "Wholesale POS",
    title: "Wholesale POS for the trade counter",
    highlight: "and cash-and-carry.",
    text: "Purchase orders, quantity-break pricing and customers who buy on account — with a till that can handle a pallet-sized order without slowing down.",
    image: "/assets/solutions-warehouse.jpg",
    stats: [
      ["PO to receipt", "Purchasing and stock in one system"],
      ["On account", "Balances, part payments, settlement"],
      ["Bulk entry", "Key a whole order in one pass"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  capability: {
    label: "Built for B2B sellers",
    title: "Every tool a trade counter needs.",
    text: "Wholesale runs on purchasing, quantity pricing, and knowing who owes what. That is what this is built around.",
    cards: [
      ["po", "Purchase order management", "Create a PO against a vendor with lines, costs and delivery detail, send it as a branded PDF, and receive it in. Return POs handle what goes back."],
      ["pricing", "Quantity-break pricing", "Set a price that applies from a minimum quantity — buy ten, buy a case, buy a pallet. The till picks the right break automatically."],
      ["invoicing", "Customer accounts and balances", "Let approved customers take goods on account. Track the balance, take part payments, and see the settlement history against every order."],
      ["inventory", "Bulk order entry", "Key a whole order from a phone call or a paper docket in one pass, instead of ringing it through the till line by line."],
    ],
  },
  checklist: {
    label: "Counter and stockroom",
    title: "From goods-in to goods-out.",
    image: "/assets/solutions-warehouse.jpg",
    imageAlt: "Warehouse and trade counter operation",
    items: [
      "Scan on receiving, with barcode and alternate-SKU lookup",
      "Keep last purchase price per product so margin reflects what you paid",
      "Import and export the whole range by CSV",
      "Print product and shelf labels for anything you re-pack or re-price",
      "Take orders in the yard or on the road with the mobile POS",
    ],
  },
  how: {
    label: "How it works",
    title: "From purchase order to paid.",
    steps: [
      ["step-po", "Purchase order", "Raise it against a vendor and send the PDF."],
      ["step-inventory", "Receive", "Book it in; stock and cost update together."],
      ["step-invoice", "Sell on account", "Apply the quantity break, put it on the customer’s balance."],
      ["step-delivery", "Settle", "Take part payments and clear the account."],
    ],
  },
  compare: {
    label: "Why AOne POS",
    title: "How AOne POS compares to a basic till.",
    text: "Wholesale is not retail with bigger numbers. A basic till has nowhere to put a purchase order or an account balance.",
    column: "AOne POS Wholesale",
    rows: [
      ["Purchase order management", "— — —", "Full PO and return PO"],
      ["Quantity-break pricing", "— — —", "Minimum-quantity price breaks"],
      ["Customer accounts", "— — —", "Balances and part payments"],
      ["Bulk order entry", "Limited", "A whole order in one pass"],
    ],
  },
  audience: {
    label: "Who it’s for",
    title: "Built for wholesale businesses of every kind.",
    cards: [
      ["cashcarry", "Cash-and-carry", "Trade customers buying by the case off the floor."],
      ["food", "Food and beverage distributors", "Repeat orders, account customers, case pricing."],
      ["goods", "Convenience wholesalers", "High SKU count and frequent price changes."],
      ["hardware", "Building and hardware supplies", "Trade accounts and quantity breaks."],
      ["garment", "Garment and textile wholesalers", "Bulk lines, repeat accounts, seasonal ranges."],
      ["electronics", "Electronics and parts", "Alternate SKUs and supplier-coded stock."],
    ],
  },
  visibility: {
    label: "Complete visibility",
    title: "Know what’s owed and what’s on the shelf.",
    text: "Outstanding account balances, stock on hand at cost and at retail, and what each customer has bought — from one back office.",
    image: "/assets/products-web-dashboard.png",
    imageAlt: "AOne POS wholesale back office",
  },
  closing: {
    label: "Get started",
    title: "See it with your own price list.",
    text: "Send us a CSV of your range and your account customers before the call, and we’ll show you your own numbers moving through it.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function WholesalePosPage() { return <SolutionDetailPage data={data} />; }
