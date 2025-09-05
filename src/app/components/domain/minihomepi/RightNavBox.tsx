'use client';

import React from 'react';

interface RightNavBoxProps {
  currentPage?: string;
}

const RightNavBox: React.FC<RightNavBoxProps> = ({ currentPage = 'home' }) => {
  const navigationItems = [
    { id: 'home', label: '홈' },
    { id: 'diary', label: '다이어리' },
    { id: 'jukebox', label: '쥬크박스' },
    { id: 'guestbook', label: '방명록' },
  ];

  return (
    <div className="flex flex-col gap-[3px] max-h-[500px]">
      {navigationItems.map((item) => (
        <div
          key={item.id}
          id={item.id}
          className={`flex items-center justify-center w-[63px] h-[35px] z-10 rounded-tr-[10px] rounded-br-[10px] border border-black cursor-pointer ${
            currentPage === item.id
              ? 'bg-white text-black border-l-0'
              : 'bg-[#3892a6] text-white'
          }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default RightNavBox;
