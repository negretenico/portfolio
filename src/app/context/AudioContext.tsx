"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type AudioContextType = {
  muted: boolean;
  toggleMute: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => setMuted((prev) => !prev);

  return (
    <AudioContext.Provider value={{ muted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used inside an AudioProvider");
  return ctx;
};
