"use client";
import React, { useEffect, useState } from "react";

export default function PokedexBook() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-red-200">
      <div
        className="relative w-[600px] h-[400px] perspective"
        onClick={() => setOpen(!open)}
      >
        {/* Left cover */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full bg-red-500 origin-right transition-transform duration-1000 ease-in-out"
          style={{
            transform: open ? "rotateY(0deg)" : "rotateY(90deg)", // flipped
          }}
        >
          <div className="p-4 text-white font-bold">Inside Left (Info)</div>
        </div>

        {/* Right cover */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-red-700 origin-left transition-transform duration-1000 ease-in-out"
          style={{
            transform: open ? "rotateY(0deg)" : "rotateY(-90deg)", // flipped
          }}
        >
          <div className="p-4 text-white font-bold">Inside Right (Stats)</div>
        </div>
      </div>
    </div>
  );
}
