import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '../components/legal-page';

export const metadata: Metadata = {
  title: 'Terms & Conditions — AOne POS',
  description:
    'The agreement between your business and AOne POS: what is included, what you pay, and what each of us is responsible for.',
};

const sections: LegalSection[] = [
  {
    heading: 'The agreement',
    body: [
      'These terms apply when you subscribe to AOne POS or use this website. “You” is the business named on the account. “We” is AOne POS, of 2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234. If you are accepting these terms on behalf of a business, you are confirming you are allowed to.',
    ],
  },
  {
    heading: 'Your account',
    body: [
      'You need an account to use the system. Give every member of staff their own login rather than sharing one, and set roles so each person reaches only what they need. You are responsible for what happens under your account, so tell us as soon as you think a login has been compromised and we will help you close it off.',
    ],
  },
  {
    heading: 'What is included',
    body: [
      'Every plan includes the whole product — checkout, inventory, purchase orders, reporting, employee management, kitchen display and digital menu boards. We do not hold modules back to sell separately, and we take no share of your card volume. What differs between plans is set out on the pricing page.',
    ],
  },
  {
    heading: 'Paying for it',
    body: [
      'Subscriptions are billed in advance, monthly or yearly, at the price shown when you signed up. Yearly billing is discounted. Fees do not include tax.',
      'If a payment fails we will tell you before anything stops working. If we change our prices, you get notice before your next renewal and you can cancel instead of renewing.',
    ],
  },
  {
    heading: 'Cancelling',
    body: [
      'You can cancel at any time. Your subscription then runs to the end of the period you have already paid for; we do not refund part-periods. Take an export of your data before you go — the privacy policy explains how.',
      'We may suspend or close an account for non-payment, or for use that breaks these terms. If we do, we will tell you why first, unless the law stops us.',
    ],
  },
  {
    heading: 'Fair use',
    body: [
      [
        'Do not resell or sublicense the system without our agreement.',
        'Do not copy, decompile or reverse-engineer it.',
        'Do not use it to break the law, or to store anything you are not entitled to hold.',
        'Do not try to reach data belonging to another business on the platform.',
        'Do not use it to store full card numbers. It is not built for that, and it does not need to be.',
      ],
    ],
  },
  {
    heading: 'Your data stays yours',
    body: [
      'You keep ownership of your catalogue, sales, staff and customer records. You are giving us permission to hold and process them so we can run the service for you, and nothing more than that.',
      'We use aggregated, de-identified figures to improve the product. We do not sell your data, and we do not share it with your competitors.',
    ],
  },
  {
    heading: 'Hardware and other companies',
    body: [
      'AOne POS runs with printers, scanners, cash drawers and payment terminals made by other companies, and connects to your card processor through Datacap. Send us your model before you buy anything and we will confirm whether it is supported, then help you set it up.',
      'Those products are covered by their manufacturers’ own warranties and terms, not by ours. The same goes for your card processor: your agreement over rates, settlement and chargebacks is with them.',
    ],
  },
  {
    heading: 'Support',
    body: [
      'Support is included in every plan, from our team in Dallas — the same people who have set up the hardware you are running. Higher plans add priority response and a scheduled onboarding call.',
      'We will help with the system, your setup and the hardware we support. What we cannot do is make your commercial decisions for you: what to charge, what to stock, or what your staff should be allowed to do.',
    ],
  },
  {
    heading: 'Availability',
    body: [
      'We work to keep the service running and we schedule maintenance outside trading hours wherever we can. We cannot promise it will never be unavailable. Interruptions caused by your internet connection, your own hardware, or a third-party service are outside our control.',
    ],
  },
  {
    heading: 'Liability',
    body: [
      'Nothing in these terms limits any liability that cannot be limited by law.',
      'Beyond that, we are not liable for lost profits, lost sales or other indirect losses, and our total liability in any twelve-month period is limited to the fees you paid us in that period. Keep your own records as well: run your shift closes and take your exports.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these terms. If a change matters to you, we will tell you before it takes effect, and the date at the top of this page will change. Carrying on using the system after that means you accept the new terms.',
    ],
  },
  {
    heading: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of Texas, and the courts of Dallas County, Texas have jurisdiction over any dispute. Talk to us first, though — most things get resolved on a call.',
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="The agreement between your business and AOne POS — what you get, what you pay, and what each of us is responsible for."
      updated="3 September 2026"
      sections={sections}
    />
  );
}
