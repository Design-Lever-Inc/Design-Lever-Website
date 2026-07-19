/**
 * Brand CTA. Square corners, mono uppercase, arrow glyph in the label.
 * @startingPoint section="Core" subtitle="Primary, outline, chartreuse and link CTAs" viewport="700x210"
 */
export interface ButtonProps {
  /** primary = orange fill; secondary = plum outline; chartreuse = on dark sections; link = underline */
  variant?: 'primary' | 'secondary' | 'chartreuse' | 'link';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
