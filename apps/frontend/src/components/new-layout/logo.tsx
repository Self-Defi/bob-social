'use client';

export const Logo = () => (
  <div className="mt-[8px] flex flex-col items-center gap-[4px] min-w-[60px]">
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" role="img" aria-label="B.O.B Social">
      <rect x="2" y="2" width="56" height="56" rx="15" fill="#0f766e" />
      <text x="30" y="36" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="800" fill="white">B.O.B</text>
    </svg>
    <a href="https://github.com/gitroomhq/postiz-app" target="_blank" rel="noopener noreferrer" className="text-[9px] leading-[12px] text-center text-textItemBlur" aria-label="Powered by Postiz — view upstream source">
      Powered by<br />Postiz
    </a>
    <a href="https://github.com/Self-Defi/bob-social" target="_blank" rel="noopener noreferrer" className="text-[9px] leading-[12px] text-center text-textItemBlur">Source</a>
  </div>
);
