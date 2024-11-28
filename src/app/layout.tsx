import Gnb from '@/components/common/gnb';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'UI 요소 모음',
  description: 'Vanilla / React로 UI 요소 만들기',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex">
        <Gnb />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
