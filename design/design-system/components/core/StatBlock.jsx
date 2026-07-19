import React from 'react';

export function StatBlock({ figure, label, onDark = false }) {
  return React.createElement('div', null,
    React.createElement('div', { style: {
      font: "400 60px/.9 'Faculty Glyphic', serif",
      color: onDark ? '#DEDF4D' : '#44063B', letterSpacing: '-.02em',
    } }, figure),
    React.createElement('div', { style: {
      font: "400 13.5px/1.5 'Inter Tight', sans-serif",
      color: onDark ? 'rgba(253,251,240,.66)' : 'rgba(68,6,59,.72)', marginTop: 14,
    } }, label)
  );
}
