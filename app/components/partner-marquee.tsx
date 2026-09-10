// Single source of truth for the partner strip, shared by the homepage and the
// about page so the two can never drift apart.
export const partners: [string, string][] = [
  ['Star Micronics', 'Receipt printing, including CloudPRNT'],
  ['Epson', 'ePOS receipt printing'],
  ['Zywell', 'Receipt printing'],
  ['Bixolon', 'Shelf and product labels'],
  ['PAX', 'EMV payment terminals'],
  ['Datacap', 'Payment gateway certification'],
  ['HANASIS', 'Innovative, Leading Technology'],
  ['SUNMI', 'Smarter Payments'],
];

// The track holds two identical groups: the second is the seam the marquee
// scrolls into, so it is hidden from assistive tech.
export function PartnerMarquee() {
  return (
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
  );
}
