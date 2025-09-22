"use client";

import { useState } from "react";
import Image from "next/image";

export default function PokemonCenter() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = (action: string) => {
    setIsProcessing(true);
    // Simulate sending form/email
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Action: ${action} triggered!`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-green-400 font-mono flex flex-col items-center justify-center p-4">
      <div className="border-4 border-green-400 p-6 rounded-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">
          Would you like to save your progress?
        </h1>

        {/* Sprite */}
        <div className="flex justify-center mb-4">
          <Image
            src={
              isProcessing
                ? "/thinking/Nico_Sprite_Thinking.gif"
                : "/thinking/Nico_Sprite_Thinking.png"
            }
            alt="Your Sprite"
            width={64}
            height={64}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="bg-green-700 hover:bg-green-500 text-white py-2 rounded"
            onClick={() => handleClick("GitHub")}
            disabled={isProcessing}
          >
            GitHub
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-500 text-white py-2 rounded"
            onClick={() => handleClick("LinkedIn")}
            disabled={isProcessing}
          >
            LinkedIn
          </button>
          <button
            className="bg-red-700 hover:bg-red-500 text-white py-2 rounded"
            onClick={() => handleClick("Email")}
            disabled={isProcessing}
          >
            Email
          </button>
        </div>

        {isProcessing && (
          <p className="mt-4 text-center animate-pulse">Processing...</p>
        )}
      </div>
    </div>
  );
}
