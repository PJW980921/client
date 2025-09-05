'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { IlchonMsgProps } from '@/app/api/ilchonMsg';
import { getMiniHompiIlchonMessages } from '@/app/api/api';
import Link from 'next/link';

const IlchonMessages = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { data } = useQuery<IlchonMsgProps[]>({
    queryKey: ['ilchonMessages', id],
    queryFn: () => getMiniHompiIlchonMessages(Number(id)),
  });
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      console.log('댓글 작성:', comment);
      setComment('');
    }
  };

  return (
    <>
      <div className="mt-[10px] text-[#3892a6] text-[14px] font-bold border-b border-gray-300">
        일촌평
      </div>

      <div className="mt-[10px] bg-[#f0f0f0]">
        <div className="flex items-center border border-gray-300">
          <div className="m-[10px] text-[#3892a6] text-[14px] font-bold">
            Friends say
          </div>
          <textarea
            id="commentContent"
            placeholder="일촌과 나누고 싶은 이야기를 남겨보세요~!"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-[350px] h-[25px] mr-[5px] resize-none rounded-[3px]  border border-gray-300"
          />
          <button
            type="button"
            onClick={handleCommentSubmit}
            className="border border-gray-300 rounded-[3px] px-[5px] py-[2px] font-semibold"
          >
            작성
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {data?.map((item) => (
          <div className="flex gap-[10px] border-b border-gray-300">
            <div className="text-[13px] font-['Malgun_Gothic']">
              <span className="text-[13px]">
                {item.content} ({item.relationshipName}{' '}
                <Link
                  href={`/home/${item.writerHomeId}`}
                  className="text-textColors-blue"
                >
                  {item.nickName}
                </Link>
                )
              </span>
              <span className="text-[9px] text-gray-500 leading-[22px] ml-[10px]">
                2025.06.01
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IlchonMessages;
