'use client';

import React, { useState } from 'react';

interface UserProfileBoxProps {
  isMyAuth?: boolean;
}

const UserProfileBox: React.FC<UserProfileBoxProps> = ({
  isMyAuth = false,
}) => {
  const [currentEmotion, setCurrentEmotion] = useState('🌷 행복');

  const handleEmotionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentEmotion(e.target.value);
  };

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="border-2 border-gray-300 rounded-[2px] flex h-[22px] gap-[5px] justify-start w-[170px] ml-[20px] pl-[6px] pt-[5px]">
        <div className="text-[11px] font-bold text-[#84c1d9]">TODAY IS ..</div>
        {isMyAuth ? (
          <select
            className="today-emotion-select-box"
            value={currentEmotion}
            onChange={handleEmotionChange}
          >
            <option value="🌷 행복">🌷 행복</option>
            <option value="🎵 즐거움">🎵 즐거움</option>
            <option value="🩷 설레임">🩷 설레임</option>
            <option value="💧 슬픔">💧 슬픔</option>
          </select>
        ) : (
          <div className="text-[15px] leading-[17px] text-center">
            {currentEmotion}
          </div>
        )}
      </div>

      <img
        className="ml-[20px] w-[180px] h-[180px]"
        src="/images/default-profile.jpg"
        alt="프로필 이미지"
      />

      <div className="w-[180px] h-[130px] text-[14px] ml-[20px] font-['Malgun_Gothic'] whitespace-pre-line overflow-y-auto">
        9월은 열심히
      </div>

      <div className="flex flex-col w-[180px] ml-[20px]">
        <div className="flex gap-[5px] border-b-2 border-dotted border-black pb-[2px] mb-[10px]">
          {isMyAuth && (
            <div className="flex cursor-pointer">
              <div>▶</div>
              <div className="text-[10px] font-bold leading-[10px]">EDIT</div>
            </div>
          )}
          <div className="flex">
            <div>▶</div>
            <div className="text-[10px] font-bold leading-[10px]">HISTORY</div>
          </div>
        </div>

        <div className="flex gap-[2px] justify-start">
          <div className="text-[17px] font-[900] text-blue-800">배준오</div>
          <div>♂</div>
          <div className="text-[10px] text-gray-400 pt-[7px]">1998.04.08</div>
        </div>

        <div className="text-[13px] text-[#ff7f00]">뉴비 개발자 오비</div>
      </div>

      <div className="w-[180px] text-[15px] ml-[20px]">
        <select id="fadoSelect">
          <option selected>★ 파도타기 ~</option>
          <optgroup label="일촌목록">
            <option value="/home/1">친구1</option>
            <option value="/home/2">친구2</option>
            <option value="/home/3">친구3</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};

export default UserProfileBox;
