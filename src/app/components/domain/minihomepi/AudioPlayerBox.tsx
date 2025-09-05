'use client';

import React, { useState } from 'react';

const AudioPlayerBox = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [showMusicList, setShowMusicList] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="absolute top-0 left-[1000px] w-[200px] h-[100px] bg-white">
      <div className="flex flex-col gap-2">
        <div className="w-[200px] flex">
          <div className="w-[90px] text-[12px] border-r border-gray-300">
            친구추천
          </div>
          <div className="bg-[#f2f2f2] pt-[2px] pl-[5px] pb-[2px] w-[100px] text-[12px] border-b border-gray-300">
            팬
          </div>
        </div>
        <div className="w-[200px] h-[50px] flex justify-center items-center gap-[5px]">
          <div id="neighbor-info-text1">우리는</div>
          <div
            className="text-[14px] font-bold p-[5px] text-white bg-[#87cefa] rounded-full"
            id="chonType"
          >
            몇촌
          </div>
          <div id="neighbor-info-text2">일까요?</div>
        </div>
      </div>

      <div className="w-[200px] h-[50px] bg-[#f2f2f2] flex items-center">
        <div className="flex flex-col items-center gap-[5px]">
          <div className="flex items-center ml-[10px] gap-[10px] w-[180px] h-[20px] bg-white">
            <div className="w-[15px] h-[15px] ml-[2px]">♪</div>
            <div className="w-[153px] overflow-hidden">
              <div className="text-[11px] mb-[1px] whitespace-nowrap animate-[scroll-text_8s_linear_infinite]">
                음악이 없습니다
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <button
              className="cursor-pointer text-[20px] flex items-center justify-center text-black border-none bg-transparent"
              onClick={handlePlayPause}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button className="cursor-pointer text-[20px] flex items-center justify-center text-black border-none bg-transparent">
              ⏹
            </button>
            <button className="cursor-pointer text-[20px] flex items-center justify-center text-black border-none bg-transparent">
              ⏮
            </button>
            <button className="cursor-pointer text-[20px] flex items-center justify-center text-black border-none bg-transparent">
              ⏭
            </button>
            <button className="cursor-pointer text-[20px] flex items-center justify-center text-black border-none bg-transparent ml-[2px]">
              🔊
            </button>
            <input
              type="range"
              className="w-[50px] h-[5px] cursor-pointer focus:outline-none"
              value={volume}
              max="100"
              onChange={handleVolumeChange}
            />
            <button
              className="ml-[2px] pl-[3px] pr-[4px] pt-[2px] pb-[2px] w-[11px] bg-gray-600 text-white text-[7px]"
              onClick={() => setShowMusicList(!showMusicList)}
            >
              LIST
            </button>
          </div>
        </div>
      </div>

      {showMusicList && (
        <div className="bg-white border border-gray-300 mt-[4px] p-[5px] w-[190px] text-[12px]">
          <div className="text-center text-gray-600 text-[11px] p-[10px]">
            🎵 등록된 음악이 없습니다.
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioPlayerBox;
