import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { getHeader, getFooter, getTopBar } from "@/sanity/sanity-utils";
import TopBar from "./components/TopBar";
import CallButton from "./components/CallButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Beauty Zone",
  description: "Website for local beauty clinic",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer, topBar] = await Promise.all([
    getHeader(),
    getFooter(),
    getTopBar(),
  ]);
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TopBar topBar={topBar} />
        <Header header={header} />
        {children}
        <Footer footer={footer} />
        <CallButton form={header.form} />
      </body>
    </html>
  );
}
