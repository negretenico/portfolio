"use client";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { useRef, useState, useEffect } from "react";
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
        size={64}
        tabIndex={0}
        aria-label={muted ? "Pause audio" : "Play audio"}
        className="cursor-pointer"
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
    <footer className="border-t border-gray-200 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600">
          <div className="flex flex-col lg:flex-row items-center">
            <p>
              &copy; 2025 DevLogs. Built with Next.js and deployed on GitHub
              Pages.
            </p>
            <Speaker />
          </div>
        </div>
      </div>
    </footer>
  );
}
