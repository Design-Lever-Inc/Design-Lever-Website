import type { ReactNode } from "react";

type Row = readonly [label: string, value: ReactNode];

/** The fact card used on the right of a page hero: a titled list of key facts,
 *  an optional highlighted row (price, total) and an optional action. Modelled
 *  on the Foundation/Executive fact cards so every offer reads the same way. */
export function HeroFactCard({
  title,
  rows,
  highlight,
  children,
}: {
  title: string;
  rows: ReadonlyArray<Row>;
  highlight?: { label: string; value: ReactNode; note?: string };
  children?: ReactNode;
}) {
  return (
    <aside className="dl-hero-card" aria-label={title}>
      <div className="dl-hero-card__title">{title}</div>
      {rows.map(([label, value]) => (
        <div key={label} className="dl-hero-card__row">
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
      {highlight && (
        <div className="dl-hero-card__highlight">
          <span>{highlight.label}</span>
          <span>
            {highlight.value}
            {highlight.note && <small>{highlight.note}</small>}
          </span>
        </div>
      )}
      {children && <div className="dl-hero-card__foot">{children}</div>}
    </aside>
  );
}
