import type { Metadata } from "next";
import { ProductDetailPage, type ProductPageData } from "../../components/detail-pages";

export const metadata: Metadata = {
  title: "Mobile POS for Android — Sell Anywhere | AOne POS",
  description: "Handheld Android POS for aisle checkout, field sales and events. Tap to pay on the device itself, Bluetooth receipts, barcode scanning and shift close.",
};

const data: ProductPageData = {
  root: "mobile-pos-page",
  artDots: true,
  hero: {
    eyebrow: "Mobile POS",
    title: "Mobile POS for the aisle, the van",
    highlight: "and the market stall.",
    text: "Scan, charge and print from an Android handheld. Tap to pay runs on the device itself — no separate card reader — or pair a PAX terminal if you already have one.",
    image: "/assets/mobile-pos-hero.png",
    stats: [
      ["Tap to pay", "On the device, no extra reader"],
      ["Bluetooth", "Receipts without cables"],
      ["One catalogue", "Shared with every other till"],
    ],
    ctaPrimary: "Book a 20-minute demo",
    ctaSecondary: "See pricing",
  },
  overview: {
    label: "Sell anywhere",
    title: "The full ticket, on a handheld.",
    text: "Not a companion app. The mobile POS writes real orders against the same catalogue, stock and shift as the counter.",
    cards: [
      ["any-device", "Scan with the camera", "No sled, no dongle. Barcodes straight from the handset."],
      ["secure", "Tap to pay built in", "Contactless on the device itself, via Datacap SureTap."],
      ["integrations", "Print over Bluetooth", "Pair a portable printer, or skip paper and text the receipt."],
      ["cloud", "Same shift, same books", "Sales land in the same day’s takings as the counter."],
    ],
  },
  why: {
    label: "Why AOne POS",
    title: "Made for selling on your feet.",
    text: "Queue-busting, aisle sales, field orders and market stalls — anywhere the customer isn’t standing at a counter.",
    image: "/assets/pos-dashboard.png",
    imageAlt: "AOne POS mobile order screen",
    points: [
      ["Queue busting", "Take the payment in the aisle before the customer reaches the till."],
      ["Field sales", "Take the order at the customer’s premises and put it on their account."],
      ["Stock in your pocket", "Check a price, check stock, or add a product without walking to the office."],
    ],
  },
  tabs: {
    label: "Where it earns its keep",
    title: "Wherever the counter isn’t.",
    icons: ["convenience", "anywhere", "integrations", "grocery"],
    image: "/assets/products-retail-checkout.jpg",
    imageAlt: "Selling away from the counter",
    items: [
      ["Events and markets", "One handheld, one printer, one battery pack. Tap to pay means you can trade without a card machine or a cash float."],
      ["Field sales", "Take the order on the round, apply the customer’s price, and let the paperwork follow from the back office."],
      ["Curbside and delivery", "Charge at the door with contactless, then text the receipt instead of printing one."],
      ["Shop floor", "Answer a price question, check the stockroom, and close the sale where the customer is standing."],
    ],
  },
  features: {
    label: "Features",
    title: "A full till, minus the counter.",
    text: "Everything a sale needs, sized for one hand.",
    blocks: [
      {
        label: "01 — Checkout",
        title: "Cart to charge in seconds",
        short: "Scan or search, adjust the quantity, take the payment. The same modifiers and pricing rules as the counter.",
        long: "Open-amount sales for anything not in the catalogue. Tips where you take them. Custom tenders for the payment types your trade actually uses.",
        mock: { title: "Cart", sub: "3 items", rows: [["Cola 500ml ×2", "$4.00"], ["Sandwich", "$6.40"]], total: ["Total", "$10.40"], action: "CHARGE" },
      },
      {
        label: "02 — Payments",
        title: "Tap to pay, no extra hardware",
        short: "Datacap SureTap turns the handset into the reader. Contactless cards and wallets, straight onto the phone.",
        long: "Already running PAX terminals? Pair one over the network and the handheld drives it exactly the way the counter does.",
        mock: { title: "Tap to pay", sub: "Present card or phone", rows: [["Amount", "$10.40"], ["Approved", "AUTH 118904"]] },
      },
      {
        label: "03 — Inventory",
        title: "Add and edit stock from the floor",
        short: "Create a product, scan its barcode, set the price — and it’s live on every till.",
        long: "Print a shelf or product label from the same screen. Pull the inventory report without walking back to the office.",
        mock: { title: "New product", sub: "Scan barcode", rows: [["Barcode", "0641 2200 3311"], ["Price", "$6.99"]], action: "Save & print label" },
      },
    ],
  },
  core: {
    label: "Core features",
    title: "Small device, full job.",
    cards: [
      ["any-device", "Barcode scanning", "Camera-based, with alternate-SKU lookup."],
      ["grocery", "Label printing", "Product and shelf labels straight from the handheld."],
      ["reporting", "Shift open and close", "Start the drawer, pay in, pay out, close with variance."],
      ["updated", "Order history", "Find any ticket to reprint, refund or text the receipt."],
      ["anywhere", "Reports on the move", "Daily takings and employee sales without a laptop."],
      ["integrations", "Device linking", "Pair a handheld to a station in about a minute."],
    ],
  },
  closing: {
    label: "Get started",
    title: "Try it on the shop floor.",
    text: "We’ll set up a handheld with your catalogue and let your team run a shift on it. If it doesn’t earn its place, tell us.",
    primary: "Book a 20-minute demo",
    secondary: "Start a 30-day trial",
  },
};

export default function MobilePosPage() { return <ProductDetailPage data={data} />; }
