import React, { ReactNode } from 'react';

export interface SideBoxProps {
  children?: ReactNode;
  className?: string;
}

export const SideBox = ({ children, className }: SideBoxProps) => {
  return (
    <div
      className={`w-full flex flex-col bg-white border-[0.2rem] m-b-[20px] p-[15px] ${className}`}
    >
      {children}
    </div>
  );
};

export const SideBoxTitle = ({ children }: SideBoxProps) => {
  return (
    <div className="border-b-bgColors-septenary text-bgColors-septenary text-[15px] pb-[8px] border-b-[2px] border-solid mb-[15px]">
      {children}
    </div>
  );
};

export const SideBoxDescription = ({ children, className }: SideBoxProps) => {
  return <p className={className}>{children}</p>;
};
