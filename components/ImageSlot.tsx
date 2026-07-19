import type { CSSProperties } from "react";

/**
 * Square-cornered image placeholder, per the design system: photography is
 * user-supplied, so slots render as flat framed containers with a mono label.
 * Pass `src` to fill a slot with a real image (object-fit: cover).
 */
export function ImageSlot({
  id,
  placeholder,
  src,
  alt,
  fit = "cover",
  className,
  style,
}: {
  id?: string;
  placeholder?: string;
  src?: string;
  alt?: string;
  /** cover for photography (default); contain for logos/wordmarks */
  fit?: "cover" | "contain";
  className?: string;
  style?: CSSProperties;
}) {
  if (src) {
    return (
      <img
        id={id}
        src={src}
        alt={alt ?? placeholder ?? ""}
        className={className}
        style={{ objectFit: fit, display: "block", ...style }}
      />
    );
  }
  return (
    <div
      id={id}
      className={className}
      role="img"
      aria-label={placeholder}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(68,6,59,.06)",
        border: "1px dashed rgba(68,6,59,.3)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <span
        style={{
          font: "400 11px 'Spline Sans Mono',monospace",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "rgba(68,6,59,.55)",
          padding: "0 16px",
          textAlign: "center",
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}
