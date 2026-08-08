import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

type OperatingLine = {
  readonly slug: string;
  readonly name: string;
  readonly proposition: string;
  readonly description: string;
  readonly cta: string;
};

/**
 * Archived homepage treatment retained for possible later reuse.
 * The live homepage currently presents these lines through the flywheel.
 */
export function ArchivedOperatingLinesGrid({ lines }: { lines: readonly OperatingLine[] }) {
  return (
    <section id="system" className="dl-corp-system" aria-labelledby="corporate-system-title">
      <div className="dl-corp-section-head">
        <span className="dl-corp-eyebrow">One company, four operating lines</span>
        <h2 id="corporate-system-title">We work on the problem from four sides.</h2>
      </div>
      <div className="dl-corp-lines-grid">
        {lines.map((line) => (
          <article key={line.slug} className={`dl-corp-line-card dl-corp-line-card--${line.slug}`}>
            <div className="dl-corp-line-card__head">
              <span>Design Lever</span>
              <span>{line.name}</span>
            </div>
            <h3>{line.proposition}</h3>
            <p>{line.description}</p>
            <Link href={`/${line.slug}`}>{line.cta}<ArrowIcon /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
