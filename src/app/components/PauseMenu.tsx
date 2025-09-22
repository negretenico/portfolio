"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
const WavyText = ({ text }: { text: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Chevron cursor (shows only on hover) */}
      <motion.span
        initial={{ opacity: 0, x: -5 }}
        animate={hovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -5 }}
        transition={{ duration: 0.2 }}
        className="text-purple-700 font-bold text-lg"
      >
        ▶
      </motion.span>

      <div className="flex space-x-0.5">
        {text.split("").map((letter, i) => (
          <motion.span
            key={i}
            className="text-xl font-bold"
            animate={{
              y: [0, -4, 0], // bounce up/down
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.1, // stagger for wave effect
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default function PauseMenu() {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-[calc(100vw-8rem)] rounded overflow-hidden shadow-lg border-indigo-blue border-3">
      <div className="flex flex-col md:flex-row px-2">
        <Link href="pokedex">
          <WavyText text={"Pokédex"} />
        </Link>
        <Link href="bag">
          <WavyText text={"Bag"} />
        </Link>
        <Link href="pokemon-center">
          <WavyText text={"Pokémon Center"} />
        </Link>
        <Link href="options">
          <WavyText text={"Options"} />
        </Link>
      </div>
    </div>
  );
}
