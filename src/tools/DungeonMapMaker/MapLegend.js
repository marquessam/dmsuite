// src/tools/DungeonMapMaker/MapLegend.js
import React from 'react';

export default function MapLegend() {
  const legendItems = [
    { icon: 'A', label: 'Archway', style: 'text-lg' },
    { icon: '┳', label: 'Portcullis', style: 'text-lg font-bold' },
    { icon: '□', label: 'Door', style: 'text-lg' },
    { icon: '■', label: 'Locked', style: 'text-lg' },
    { icon: '⊠', label: 'Trapped', style: 'text-lg' },
    { icon: '⊡', label: 'Secret', style: 'text-lg' },
    { icon: '|||', label: 'Up', style: 'text-lg tracking-tighter font-bold' },
    { icon: '≡', label: 'Down', style: 'text-lg font-bold' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-3 text-amber-100">
      {legendItems.map((item, index) => (
        <div key={index} className="flex items-center px-2 py-1 bg-stone-800 rounded border border-amber-900/30">
          <span className={`${item.style} mr-1`}>{item.icon}</span>
          <span className="text-xs">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
