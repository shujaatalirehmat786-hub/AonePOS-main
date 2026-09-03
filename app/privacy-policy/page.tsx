import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '../components/legal-page';

export const metadata: Metadata = {
  title: 'Privacy Policy — AOne POS',
  description:
    'What AOne POS collects, what we do with it, who else sees it, and how you get your data back.',
};

const sections: LegalSection[] = [
  {
    heading: 'Who this covers',
    body: [
      'AOne POS is a point-of-sale system built and run from Dallas, Texas. This policy covers the software, this website, and the support we give you with them.',
      'Two different kinds of information run through the system, and the difference matters. There is information about you as our customer — the business that holds the subscription. And there is the information you put in while you trade: your catalogue, your sales, your staff and your own customers. The second kind is yours. We hold it for you, and we handle it under this policy and the agreement you have with us.',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      [
        'Account and billing details — business name, address, the name and contact details of whoever manages the account, and which plan you are on.',
        'The trading data you enter — products, costs, prices, purchase orders, sales, shift closes and till counts, staff accounts and the roles you give them.',
        'Customer records you choose to keep — house-account names, contact details and balances.',
        'Technical data — device and browser type, IP address, sign-in times and error logs, so we can tell a broken register from a broken network.',
        'What you send us — demo requests, emails, support tickets, and the notes we take on a call with you.',
      ],
    ],
  },
  {
    heading: 'What we do with it',
    body: [
      [
        'Run the system: ring sales, price items, track stock, produce your reports.',
        'Keep your account: bill you, verify sign-ins, and tell you about changes that affect your service.',
        'Support you: reproduce a fault, restore a mis-priced item, get a printer or terminal talking to the till.',
        'Improve the product, using aggregated figures — which reports get opened, where setup goes slowly.',
        'Meet obligations we cannot opt out of, such as tax records and lawful requests.',
      ],
      'We do not sell your data. We do not rent it, and we do not pass it to advertisers or data brokers. Your sales figures are not a product we trade in.',
    ],
  },
  {
    heading: 'Card payments',
    body: [
      'We do not process your card payments, and we do not want to. Card data goes from the terminal to your processor through Datacap and PAX. AOne POS receives the outcome of a transaction — approved or declined, the card brand, the last four digits — and never the full card number, the magnetic stripe or the PIN.',
      'That is also why we take no share of your card volume. Use whichever processor you like; our margin is on software.',
    ],
  },
  {
    heading: 'Who else sees it',
    body: [
      'Only the people and services that have to:',
      [
        'Our own staff, and only for support, billing, or a fault they are working on.',
        'The hosting, backup and email providers that run the service for us.',
        'Your card processor and hardware partners, where you have connected them.',
        'Professional advisers, or a regulator or court where the law requires it.',
      ],
      'Anyone we use is bound to handle your data only on our instructions, and only for the job we gave them.',
    ],
  },
  {
    heading: 'Who can see it inside your shop',
    body: [
      'Staff see only what their role allows. A cashier can ring sales without being able to open reports, edit costs, or delete a day’s sales. You set those roles and you can change them whenever you like. Sign-in activity is recorded, so you can see who did what and when.',
    ],
  },
  {
    heading: 'Where it is kept, and how',
    body: [
      'Your catalogue, sales and customer records are held in the cloud so they are reachable from any browser you sign in to. Data is encrypted in transit between your registers and our servers, and access to production systems is restricted to the staff who need it to do their job.',
      'No system is perfect. If there is ever a breach that affects your data, we will tell you, and we will tell you what actually happened.',
    ],
  },
  {
    heading: 'How long we keep it, and getting it back',
    body: [
      'We hold your trading data for as long as your account is open, because your reporting and your stock figures depend on the history.',
      'You can export your catalogue, sales and customer records at any time, in a format you can open somewhere else. If you close your account, take an export with you first. After that we delete or anonymise what we no longer need, apart from records we are required to keep for tax and accounting.',
    ],
  },
  {
    heading: 'This website',
    body: [
      'The site uses only what it needs to work and to count visits. There are no advertising trackers on it.',
    ],
  },
  {
    heading: 'What you can ask us to do',
    body: [
      [
        'Tell you what we hold about you.',
        'Correct anything that is wrong.',
        'Send you an export of your data.',
        'Delete an account you no longer use.',
        'Stop sending you anything that is not about your service.',
      ],
      'Email info@aonepos.com and say which one you want.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'If we change this policy, the date at the top of this page changes with it. If a change affects how we handle your data, we will tell you directly rather than leaving you to notice.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What we collect when you use AOne POS, what we do with it, who else ever sees it, and how you get it back."
      updated="3 September 2026"
      sections={sections}
    />
  );
}
