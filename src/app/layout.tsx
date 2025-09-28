import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Image from "next/image";
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
  title: "Portfolio",
  description: "Nico's Portfolio",
};

// Hidden preloader component
function ImagePreloader() {
  return (
    <div style={{ display: "none" }}>
      {/* Preload critical images */}
      <Image
        src="/celebration/Nico_Sprite_Sheet_Celebration.gif"
        width={128}
        height={128}
        alt=""
        priority
      />
      <Image
        src="/greeting/Nico_Sprite_Sheet_Greeting.gif"
        width={128}
        height={128}
        alt=""
        priority
      />
      <Image
        src="/thinking/Nico_Sprite_Sheet_Thinking.gif"
        width={128}
        height={128}
        alt=""
        priority
      />
    </div>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2p.className} antialiased`}>
        <AudioProvider>
          <ImagePreloader />
          <GlobalClickSound />
          {children}
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
