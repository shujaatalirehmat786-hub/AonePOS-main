import type { Metadata } from "next";
import { SolutionDetailPage, type SolutionPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "Quick Service POS with Kitchen Display | AOne POS",
  description: "QSR POS with kitchen display, kitchen printing, modifiers, order status screen and online ordering — included in the base price, no per-screen fees.",
};

// Counter service only: no floor plan, table assignment, seat-level ordering or
// check splitting by seat exists, so this page carries no table-service copy.
const data: SolutionPageData = {
  hero: {
    eyebrow: "Quick service POS",
    title: "Quick service POS that",
    highlight: "keeps the line moving.",
    text: "Order in, kitchen sees it, customer knows when it’s up. Kitchen display, kitchen printing, modifiers and an order screen — all in the base price.",
    image: "/assets/pos-dashboard.png",
    stats: [
      ["Included", "Kitchen display, no per-screen fee"],
      ["Instant", "Tickets route the moment they’re sent"],
      ["Menu boards", "Designed and pushed from the back office"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  capability: {
    label: "Built for fast food",
    title: "Every tool a quick service kitchen needs.",
    text: "Counter service lives or dies on how fast a ticket gets from the till to the pass. That is what this is arranged around.",
    cards: [
      ["inventory", "Kitchen display and printing", "Route each ticket to the right screen or printer by kitchen. Bump it when it’s done and the customer-facing order screen updates itself."],
      ["pricing", "Modifiers that don’t slow the till", "Modifier groups per product, with required and optional choices. Staff build the order in taps rather than typing free text."],
      ["step-delivery", "Order status screen", "A customer-facing screen showing what’s preparing and what’s ready. Cuts the “is mine done yet” traffic at the counter."],
      ["electronics", "Digital menu boards", "Design your board on a canvas and push it to the screens on the wall. Prices come from the catalogue, so changing a price changes the board."],
    ],
  },
  checklist: {
    label: "Service",
    title: "Built around the rush.",
    image: "/assets/solutions-hero-hardware.jpg",
    imageAlt: "Counter service hardware running AOne POS",
    items: [
      "Dine-in and to-go on the same ticket",
      "Hold and recall an order without losing the customer’s place in the queue",
      "Split a payment across cash and card, and take a tip on the terminal",
      "Text or email the receipt instead of printing one",
      "Take pickup and delivery orders from your own online storefront",
    ],
  },
  how: {
    label: "How it works",
    title: "From counter to collection.",
    steps: [
      ["step-po", "Order", "Staff build the ticket with modifiers in a few taps."],
      ["step-inventory", "Kitchen", "It lands on the kitchen display, or prints in the kitchen."],
      ["step-invoice", "Ready", "The kitchen bumps it and the order screen tells the customer."],
      ["step-delivery", "Close", "Payment, receipt, and the day’s numbers update as you go."],
    ],
  },
  compare: {
    label: "Why AOne POS",
    title: "How AOne POS compares to a basic till.",
    text: "Most systems charge for the parts a kitchen actually needs. Ours are in the price.",
    column: "AOne POS Quick Service",
    rows: [
      ["Kitchen display", "Paid add-on, per screen", "Included"],
      ["Order status screen", "— — —", "Included"],
      ["Digital menu boards", "Separate vendor", "Included, with designer"],
      ["Online ordering", "Add-on plus commission", "Included, your own storefront"],
    ],
  },
  audience: {
    label: "Who it’s for",
    title: "Built for counter service of every kind.",
    cards: [
      ["food", "Takeaways and fast food", "High volume, short tickets, counter service."],
      ["goods", "Coffee shops and cafés", "Milk options, syrups, and a morning rush."],
      ["cashcarry", "Pizza and sub shops", "Build-your-own with required modifier groups."],
      ["step-delivery", "Food trucks", "Handheld ordering and a portable printer."],
      ["inventory", "Bakeries and dessert bars", "Fast tickets, display cases, seasonal menus."],
      ["hardware", "Ghost kitchens", "Several kitchens, routed tickets, online orders."],
    ],
  },
  visibility: {
    label: "Complete visibility",
    title: "See the rush before it hits.",
    text: "Sales by hour, by product and by staff member — so you can staff the counter for when it’s actually busy, not when you think it is.",
    image: "/assets/figma-invoice-dashboard.png",
    imageAlt: "AOne POS sales dashboard",
  },
  closing: {
    label: "Get started",
    title: "See it with your own menu.",
    text: "Send your menu before the call and we’ll build it — modifiers, kitchens and all — so you can watch a real ticket land on a real kitchen screen.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function QuickServicePosPage() { return <SolutionDetailPage data={data} />; }
