import { ImageSlot } from "@/components/ImageSlot";
import type { ReactNode } from "react";

type PersonRevealCardProps = {
  id: string;
  src?: string;
  name: string;
  role: string;
  country: string;
  company?: string;
  bio?: string;
  className?: string;
  tone?: "light" | "dark";
  placeholder?: string;
  dataExec?: string;
  children?: ReactNode;
};

export function PersonRevealCard({
  id,
  src,
  name,
  role,
  country,
  company,
  bio,
  className = "",
  tone = "light",
  placeholder = "Portrait",
  dataExec,
  children,
}: PersonRevealCardProps) {
  const roleLine = company ? `${role} · ${company}` : role;
  const frameHeight = 380;

  return (
    <article className={`dl-facultycard dl-person-card dl-person-card--${tone} ${className}`.trim()} data-exec={dataExec}>
      <div
        className="dl-facphoto"
        tabIndex={0}
        role="button"
        aria-label={`Read profile for ${name}`}
        style={{ height: `${frameHeight}px` }}
      >
        <ImageSlot id={id} src={src} style={{ width: "100%", height: `${frameHeight}px`, display: "block", border: "none" }} placeholder={placeholder} />
        <div className="dl-facbio" aria-hidden="true">
          <div className="dl-facbio__inner">
            <div className="dl-facbio__name">{name}</div>
            <div className="dl-facbio__role">{roleLine}</div>
            {bio ? <p className="dl-facbio__text">{bio}</p> : null}
          </div>
        </div>
      </div>
      <div className="dl-fac-name dl-person-card__name">{name}</div>
      <div className="dl-person-card__role">{role}</div>
      <div className="dl-person-card__country">{country}</div>
      {children}
    </article>
  );
}
