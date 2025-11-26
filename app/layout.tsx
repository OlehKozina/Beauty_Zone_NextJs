import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { getHeader, getFooter } from "@/sanity/sanity-utils";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Beauty Zone",
  description: "Website for local beauty clinic",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header header={header} />
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
