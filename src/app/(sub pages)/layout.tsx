import { ReactNode } from 'react';

interface SubPagesLayoutProps {
  children: ReactNode;
}

export default function SubPagesLayout({ children }: SubPagesLayoutProps) {
  return (
    <main className="flex flex-col items-center justify-center bg-bgColors-quaternary h-auto">
      {children}
    </main>
  );
}
