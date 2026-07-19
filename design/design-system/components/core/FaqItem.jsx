import React from 'react';

export function FaqItem({ question, answer, group = 'dlfaq', defaultOpen = false }) {
  return React.createElement('details', { name: group, open: defaultOpen || undefined,
      style: { borderBottom: '1px solid rgba(68,6,59,.16)' } },
    React.createElement('summary', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '22px 0', listStyle: 'none' } },
      React.createElement('span', { style: { font: "400 22px 'Faculty Glyphic', serif", color: '#44063B' } }, question),
      React.createElement('span', { style: { font: "400 22px 'Inter Tight', sans-serif", color: '#FF6D35' } }, '+')
    ),
    React.createElement('p', { style: { font: "400 15.5px/1.65 'Inter Tight', sans-serif", color: 'rgba(68,6,59,.7)', margin: '0 0 22px', maxWidth: 640 } }, answer)
  );
}
