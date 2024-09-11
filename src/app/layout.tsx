import {Anek_Latin} from 'next/font/google'
import Navbar from './components/Navbar';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const anek_latin = Anek_Latin ({
  weight: ["100", "200", "400", "600"],
  subsets: ['latin'],
  variable: '--font-anek_latin',

})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Oscar Meza's Website",
  description: "Oscar Meza's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>*/}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anek_latin.className} antialiased`}
      > 
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
