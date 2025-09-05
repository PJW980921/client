import React from 'react';
import RecentPosts from './RecentPosts';
import Miniroom from './Miniroom';
import IlchonMessages from './IlchonMessages';

const Contents = () => {
  return (
    <div className="flex flex-col  max-h-[490px] overflow-y-scroll w-[565px]">
      <div className="text-textColors-blue text-[14px] font-bold mb-[10px] pt-[10px]">
        최근게시물
      </div>
      <RecentPosts />
      <Miniroom />
      <IlchonMessages />
    </div>
  );
};

export default Contents;
