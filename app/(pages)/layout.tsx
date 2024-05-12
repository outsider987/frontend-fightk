import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import RootContextProvider from "../store";
import clsx from "clsx";
import SessionWrapper from "../provider/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <RootContextProvider>
          <body className={clsx(inter.className, " ")}>
            {/* {<Hedaer />} */}
            <div className="flex w-full">{children}</div>
          </body>
        </RootContextProvider>
      </html>
    </SessionWrapper>
  );
}