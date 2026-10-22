"use client";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { useRef } from "react";
import Link from "next/link";
import { useAudio } from "../context/AudioContext";
const isProd = process.env.NODE_ENV === "production";
const Speaker = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { muted, toggleMute } = useAudio();
  const SpeakerIcon = muted ? HiOutlineSpeakerWave : HiOutlineSpeakerXMark;

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }
    if (muted) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }
    toggleMute();
  };

  return (
    <div>
      <SpeakerIcon
        size={24}
        tabIndex={0}
        aria-label={muted ? "Pause audio" : "Play audio"}
        className="cursor-pointer text-dex-cream hover:text-white transition-colors"
        onClick={togglePlay}
      />
      <audio
        ref={audioRef}
        loop
        src={`/${isProd ? "portfolio/" : ""}background-music.mp3`}
      >
        <track
          kind="captions"
          src="/captions/pokemon_music.vtt"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-dex-red px-6 py-2.5 flex items-center justify-between">
      <p className="text-[8px] text-dex-cream">
        &copy; {new Date().getFullYear()} Nico Negrete. Built with Next.js.
      </p>
      <div className="flex items-center gap-4">
        <Link href="pokemon-center" className="text-[8px] text-dex-cream hover:text-white transition-colors">
          Pokémon Center
        </Link>
        <Speaker />
      </div>
    </footer>
  );
}
