import React from 'react';

export function Eyebrow({ children, onDark = false }) {
  return React.createElement('span', { style: {
    font: "400 11px 'Spline Sans Mono', monospace",
    color: '#FF6D35', letterSpacing: '.14em', textTransform: 'uppercase',
  } }, children);
}
