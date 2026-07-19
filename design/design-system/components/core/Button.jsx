import React from 'react';

export function Button({ variant = 'primary', children, href = '#', onClick }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 9,
    font: "400 12px 'Spline Sans Mono', monospace",
    letterSpacing: '.06em', textTransform: 'uppercase',
    textDecoration: 'none', cursor: 'pointer',
    transition: 'background .15s, color .15s, border-color .15s',
  };
  const variants = {
    primary:    { color: '#FDFBF0', background: '#FF6D35', padding: '15px 26px', border: 0 },
    secondary:  { color: '#44063B', background: 'transparent', padding: '13px 24px', border: '1px solid #44063B' },
    chartreuse: { color: '#44063B', background: '#DEDF4D', padding: '15px 26px', border: 0 },
    link:       { color: '#44063B', background: 'transparent', padding: '0 0 4px', border: 0, borderBottom: '1px solid rgba(68,6,59,.4)' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: '#44063B' },
    secondary: { background: '#44063B', color: '#FDFBF0' },
    chartreuse: { background: '#FDFBF0' },
    link: { color: '#FF6D35' },
  };
  const style = { ...base, ...variants[variant], ...(hover ? hoverStyles[variant] : {}) };
  return React.createElement('a', { href, onClick, style,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }, children);
}
