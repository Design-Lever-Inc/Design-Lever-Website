import Link from "next/link";

const OFFERS = [
  { name: "Practice", href: "/practice", line: "#21B58B" },
  { name: "Talent Hub", href: "/talent-hub", line: "#DEDF4D" },
  { name: "Academy", href: "/academy", line: "#FF7D44" },
  { name: "The Lever", href: "/the-lever", line: "#DEDF4D" },
] as const;

const ROWS: ReadonlyArray<readonly [string, readonly [string, string, string, string]]> = [
  ["Who it's for", [
    "Companies that need design led at executive level",
    "Companies hiring a fractional design leader",
    "Senior designers moving into leadership",
    "Senior design leaders",
  ]],
  ["What you get", [
    "An embedded fractional CDO, a defined outcome and a handover",
    "A vetted leader matched to your brief",
    "A leadership programme: Foundation or Executive",
    "A professional community, gatherings and research access",
  ]],
  ["Who does the work", [
    "Design Lever, accountable for the outcome",
    "The leader you hire, contracted directly",
    "You, taught by practising design directors",
    "You and your peers",
  ]],
  ["Cost", [
    "Fixed-term engagement, e.g. ₦24M (≈ $17K) for 4 months",
    "One 20% placement fee, then the leader's fee monthly",
    "From ₦400K / $250",
    "₦100K (≈ $70) a year",
  ]],
  ["Time to start", [
    "Leader in place in about 6 weeks",
    "Matched in about 7 days",
    "Next cohort January 2027",
    "Founding cohort taking requests now",
  ]],
];

/** Side-by-side comparison of the offers that otherwise sound alike. */
export function WhichDoINeed({ id = "which" }: { id?: string }) {
  return (
    <section id={id} className="dl-which" aria-labelledby={`${id}-title`}>
      <span className="dl-which__eyebrow">Which do I need?</span>
      <h2 id={`${id}-title`}>Four ways in, side by side.</h2>
      <div className="dl-which__scroll">
        <table className="dl-which__table">
          <thead>
            <tr>
              <td />
              {OFFERS.map((o) => (
                <th key={o.name} scope="col" style={{ boxShadow: `inset 0 6px 0 ${o.line}` }}>
                  <Link href={o.href}>{o.name}</Link>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, cells]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {cells.map((cell, i) => (
                  <td key={OFFERS[i].name}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
