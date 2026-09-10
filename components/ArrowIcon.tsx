type ArrowDirection = "up-right" | "right" | "left" | "down" | "up";

type ArrowIconProps = {
  className?: string;
  direction?: ArrowDirection;
};

export function ArrowIcon({ className = "", direction = "up-right" }: ArrowIconProps) {
  const classes = ["dl-arrow-icon", `dl-arrow-icon--${direction}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      aria-hidden="true"
      className={classes}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}
