import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { AudioProvider } from "./context/AudioContext";
import GlobalClickSound from "./context/GlobalClickSound";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2p = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nico Negrete — Backend & Distributed Systems Engineer",
  description:
    "Backend and distributed systems engineer with 5 years at JPMorgan Chase. AWS migrations, real-time data pipelines, and monitoring at scale.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2p.className} antialiased`}>
        <AudioProvider>
          <GlobalClickSound />
          {children}
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
