import React from 'react';
import Image from 'next/image';
import MiniroomImage from '@/../public/images/miniroom.png';
const Miniroom = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-[#3892a6] text-[14px] font-bold">Miniroom</div>
        <div className="text-[#3892a6] text-[16px] font-bold">싸이월드</div>
      </div>

      <Image src={MiniroomImage} alt="미니룸" className="w-full h-[260px]" />
    </>
  );
};

export default Miniroom;
