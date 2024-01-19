import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import RecoilRootProvider from "@/atoms/provider";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  preload: false,
  weight: ["400"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "반장창고",
  description: "2024년 (주) 두번째 프론트엔드 개발자 채용 과제",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${roboto.className}`}>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
