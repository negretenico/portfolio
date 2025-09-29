"use client";
import { useEffect, useRef, useCallback } from "react";
import { useAudio } from "./AudioContext";
const isProd = process.env.NODE_ENV === "production";
const playClickSound = (muted: boolean) => {
  if (muted) return;

  const audio = new Audio("/pokemon-select.wav");
  audio.volume = 1;
  audio.play().catch((err) => console.warn("Sound failed:", err));
};
export default function GlobalClickSound() {
  const { muted } = useAudio();
  const initialized = useRef(false);

  useEffect(() => {
    const initializeAndHandle = (e: Event) => {
      console.log("Event fired on:", e.target, "Type:", e.type);

      if (!initialized.current) {
        // First interaction - initialize audio context
        const initAudio = new Audio(
          `/${isProd ? "portfolio/" : ""}pokemon-select.wav`
        );
        initAudio.volume = 0;
        initAudio
          .play()
          .then(() => {
            initAudio.pause();
            initialized.current = true;
            console.log("Audio initialized");
          })
          .catch(() => {});
      }

      playClickSound(!muted);
    };

    document.addEventListener("click", initializeAndHandle, { capture: true });
    return () => {
      document.removeEventListener("click", initializeAndHandle, {
        capture: true,
      });
    };
  }, [playClickSound, muted]);

  return null;
}
