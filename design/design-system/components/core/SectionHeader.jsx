import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

export function SectionHeader({ eyebrow, title, note, onDark = false }) {
  return React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' } },
    React.createElement('div', null,
      React.createElement(Eyebrow, null, eyebrow),
      React.createElement('h2', { style: {
        font: "400 46px/1.08 'Faculty Glyphic', serif",
        color: onDark ? '#FDFBF0' : '#44063B', margin: '18px 0 0', letterSpacing: '-.01em',
      } }, title)
    ),
    note ? React.createElement('span', { style: {
      font: "400 13px/1.5 'Inter Tight', sans-serif",
      color: onDark ? 'rgba(253,251,240,.6)' : 'rgba(68,6,59,.6)', maxWidth: 300, textAlign: 'right',
    } }, note) : null
  );
}
