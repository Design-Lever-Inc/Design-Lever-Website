import React from 'react';

export function FilterPill({ active = false, children, onClick }) {
  const [hover, setHover] = React.useState(false);
  const style = {
    font: "400 11px 'Spline Sans Mono', monospace",
    letterSpacing: '.08em', textTransform: 'uppercase',
    padding: '11px 20px', cursor: 'pointer', whiteSpace: 'nowrap',
    transition: 'border-color .15s, color .15s, background .15s',
    background: active ? '#FF6D35' : 'transparent',
    color: active ? '#FDFBF0' : (hover ? '#FF6D35' : '#44063B'),
    border: '1px solid ' + (active ? '#FF6D35' : (hover ? '#FF6D35' : 'rgba(68,6,59,.35)')),
  };
  return React.createElement('button', { onClick, style,
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) }, children);
}
