'use client';

import React from 'react';
import AudioPlayerBox from './AudioPlayerBox';
import UserProfileBox from './UserProfileBox';
import Contents from './Content/Contents';
import RightNavBox from './RightNavBox';

interface HomeLayoutProps {
  homeId?: string;
  isMyAuth?: boolean;
  todayCount?: number;
  totalCount?: number;
  homepageTitle?: string;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({
  homeId = '1',
  isMyAuth = false,
  todayCount = 2,
  totalCount = 2351,
  homepageTitle = '배준오님의 미니홈피',
}) => {
  return (
    <div className="relative w-[90%] top-[10%] max-w-[1200px] mx-auto">
      {/* 배경 이미지 */}
      <div className="relative">
        <img
          src="/images/diary_8.png"
          width="980"
          height="640"
          alt="미니홈피 배경"
          className="block"
        />

        {/* 오디오 플레이어와 친구추천/팬 박스 */}
        <AudioPlayerBox />

        {/* 큰 박스 컨테이너 */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* 왼쪽 영역 */}
          <div className="absolute top-[50px] left-[63px]">
            {/* 방문자 정보 */}
            <div className="flex justify-center items-center w-[220px] h-[35px] p-[5px] gap-[10px] mb-[20px]">
              <div className="text-center text-[11px]">TODAY</div>
              <div className="text-center text-[11px] text-red-500">
                {todayCount}
              </div>
              <div>
                <svg
                  width="2"
                  height="10"
                  viewBox="0 0 2 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="20"
                    stroke="black"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div className="text-center text-[11px]">TOTAL</div>
              <div className="text-center text-[11px]">{totalCount}</div>
            </div>

            {/* 홈페이지 제목과 소셜 기능 */}
            <div className="mb-[20px]">
              <div className="flex items-center mb-[25px] gap-[10px] max-w-[400px] overflow-hidden">
                <div
                  className="text-[20px] font-bold text-[#3892a6] leading-none overflow-hidden text-ellipsis whitespace-nowrap"
                  data-home-id={homeId}
                >
                  {homepageTitle}
                </div>
                {isMyAuth && (
                  <button
                    className="h-[15px] text-white bg-[#b6b8ba] border border-[#a7a8a9] rounded-[3px] cursor-pointer text-[12px] font-['Malgun_Gothic']"
                    data-mode="edit"
                  >
                    수정
                  </button>
                )}
              </div>

              <div className="flex flex-col mb-[30px] min-w-[150px] mr-0 items-start">
                <div className="flex gap-[10px] mb-[10px]">
                  <div className="flex items-center gap-[1px] text-[13px] text-[#e66a00] cursor-pointer">
                    <div>+</div>
                    <div className="text-[13px] font-bold text-[#e66a00] cursor-pointer">
                      일촌 맺기
                    </div>
                  </div>
                  <div className="flex items-center gap-[1px]">
                    <div>+</div>
                    <div className="text-[13px] font-bold text-[#e66a00]">
                      팬 되기
                    </div>
                  </div>
                </div>
                <div className="text-[12px] text-black">
                  <a
                    className="no-underline hover:text-red-500 visited:text-inherit"
                    href="https://cyworld-a.duckdns.org/cyworld/"
                  >
                    https://cyworld-a.duckdns.org/cyworld/
                  </a>
                </div>
              </div>
            </div>

            {/* 사용자 프로필 */}
            <UserProfileBox isMyAuth={isMyAuth} />
          </div>

          {/* 오른쪽 영역 - 메인 콘텐츠 */}
          <div className="absolute top-[50px] right-[100px]">
            <Contents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
