import { Arrow, SiteFooter, SiteHeader } from './inner-pages';
import '../legal.css';

export type LegalSection = { heading: string; body: (string | string[])[] };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="inner-page legal-page">
      <SiteHeader active="" />
      <section className="legal-hero">
        <div className="inner-container">
          <span className="inner-label">Legal</span>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Last updated {updated}</small>
        </div>
      </section>
      <section className="legal-body">
        <div className="inner-container">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2>{heading}</h2>
              {body.map((block, i) =>
                Array.isArray(block) ? (
                  <ul key={i}>
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{block}</p>
                ),
              )}
            </section>
          ))}
          <div className="legal-contact">
            <h3>Anything here you want explained?</h3>
            <p>
              Email info@aonepos.com or call +866-882-4292 and a person in
              Dallas will answer — not a form that goes nowhere.
            </p>
            <address>
              AOne POS, 2727 Lyndon B Johnson Fwy #1050, Dallas, TX 75234
            </address>
            <a className="inner-primary" href="/contact#contact-form">
              Contact us <Arrow />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
