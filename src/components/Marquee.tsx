import React from 'react';

export default function Marquee() {
  const marqueeText = "MONGODB ✦ EXPRESS.JS ✦ REACT ✦ NODE.JS ✦ PIXEL-PERFECT UI ✦ JAVASCRIPT ✦ ";
  
  // Multiply the text to cover full width and ensure seamless scrolling
  const repeatedText = Array(6).fill(marqueeText).join("");

  return (
    <div className="bg-surface-container-highest dark:bg-inverse-surface border-b-4 border-brand-dark dark:border-brand-light py-5 overflow-hidden flex whitespace-nowrap font-mono font-black text-brand-dark dark:text-inverse-on-surface tracking-widest text-lg md:text-xl select-none">
      <div className="animate-marquee flex gap-8">
        <span className="uppercase">{repeatedText}</span>
        <span className="uppercase">{repeatedText}</span>
      </div>
    </div>
  );
}
