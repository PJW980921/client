import React from 'react';

const RecentPosts = () => {
  const recentPosts = [
    { type: '동영상', title: '맘에 드는 아이템은 소망', color: '#84C1D9' },
    { type: '사진첩', title: '2008년 그시절', color: 'dodgerblue' },
    {
      type: '게시판',
      title: '스킨, 메뉴효과 예약기능 좋아',
      color: 'aquamarine',
    },
    { type: '갤러리', title: '더욱 편리해진 사용중 아이템', color: '#E66A00' },
  ];

  const contentCounts = [
    { name: '쥬크박스', today: 0, total: 28, hasNew: false },
    { name: '다이어리', today: 0, total: 76, hasNew: false },
    { name: '방명록', today: 0, total: 81, hasNew: false },
    { name: '사진첩', today: '-', total: '', hasNew: false },
  ];

  return (
    <div className="flex w-full gap-[40px] mb-[20px]">
      <table className="border-t border-gray-300">
        <tbody className="flex flex-col gap-[2px]">
          {recentPosts.map((post, index) => (
            <tr key={index}>
              <td
                className="text-[14px] text-white rounded-[3px]"
                style={{ backgroundColor: post.color }}
              >
                {post.type}
              </td>
              <td className="text-[15px]">{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex w-[250px] gap-[30px] min-h-[100px]">
        <div className="flex flex-col gap-[2px] w-full border-t-2 border-dotted border-gray-300">
          <div className="flex flex-col w-full">
            {contentCounts.map((item, index) => (
              <div
                key={index}
                className="flex gap-[15px] border-b-2 border-dotted border-gray-300 justify-between pr-[10px]"
              >
                <div className="flex gap-[10px] items-center w-full whitespace-nowrap">
                  <div className="text-[15px] whitespace-nowrap">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-blue-800">
                    {item.today}/{item.total}
                  </div>
                  {item.hasNew && (
                    <img
                      src="/images/new.jpg"
                      width="13"
                      height="13"
                      alt="new"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
