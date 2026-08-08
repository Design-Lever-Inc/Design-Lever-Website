import { ImageSlot } from "@/components/ImageSlot";

const ARCHIVED_CLIENT_LOGOS = [
  ["1", "Terragon"],
  ["2", "Rise"],
  ["3", "Interswitch"],
  ["4", "Traction"],
  ["5", "Nomba"],
  ["6", "Moniepoint"],
  ["7", "Lemfi"],
] as const;

/**
 * Archived homepage logo marquee retained for possible later reuse.
 * The live homepage now moves directly from the hero into "Why we exist".
 */
export function ArchivedMovingLogoStrip() {
  return (
    <section className="dl-corp-logo-strip" aria-label="Companies our leadership experience spans">
      <div className="dl-marq">
        <div className="dl-marq-track">
          {[...ARCHIVED_CLIENT_LOGOS, ...ARCHIVED_CLIENT_LOGOS].map(([id, name], index) => (
            <ImageSlot
              key={`${id}-${index}`}
              className="dl-marq-item"
              src={`/images/logos/client-${id}.svg`}
              fit="contain"
              style={{ width: "184px", height: "69px", display: "block" }}
              placeholder={name}
              alt={index < ARCHIVED_CLIENT_LOGOS.length ? name : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
