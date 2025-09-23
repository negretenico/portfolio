"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
const BagItem = ({ name, key, onClick, isSelected }: any) => {
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
        className="text-bag-selection font-bold text-lg"
      >
        ▶
      </motion.span>
      <a key={key} onClick={onClick}>
        <span className="text-bag-text hidden sm:inline">{name}</span>
        <span className="text-bag-text sm:hidden">{name.split(" ")[0]}</span>
      </a>
    </div>
  );
};
export default function Bag() {
  const [selectedPocket, setSelectedPocket] = useState("items");
  const [selectedItem, setSelectedItem] = useState(null);

  const pockets = {
    items: {
      name: "ITEMS",
      items: [],
    },
    keyItems: {
      name: "KEY ITEMS",
      items: [
        {
          id: 1,
          name: "TOWN MAP",
          description:
            "A detailed map showing Nico's professional journey and career milestones.",
          action: "download",
          link: "#",
        },
        {
          id: 2,
          name: "GITHUB CARD",
          description:
            "A special card that grants access to Nico's code repositories.",
          action: "link",
          link: "https://github.com",
        },
      ],
    },
    pokeballs: {
      name: "TM CASE",
      items: [
        {
          id: 3,
          name: "TM47 GITHUB ACTIONS",
          description:
            "Contains the move AUTOMATE. Streamlines deployment processes.",
          action: "link",
          link: "#",
        },
        {
          id: 4,
          name: "TM83 SPRING BOOT",
          description:
            "Contains the move RAPID DEV. Creates robust applications quickly.",
          action: "link",
          link: "#",
        },
      ],
    },
    berries: {
      name: "QUEST LOG",
      items: [
        {
          id: 5,
          name: "FIGHTIQ PROJECT",
          description:
            "An ongoing quest to revolutionize combat sports analytics.",
          action: "link",
          link: "#",
        },
        {
          id: 6,
          name: "PROTOTYPE ITEMS",
          description: "Various experimental projects in active development.",
          action: "link",
          link: "#",
        },
      ],
    },
    tmCase: {
      name: "WRITINGS",
      items: [
        {
          id: 7,
          name: "DEV JOURNAL",
          description:
            "A collection of technical insights and coding adventures.",
          action: "link",
          link: "#",
        },
        {
          id: 8,
          name: "CODE GUIDES",
          description: "Detailed tutorials crafted from real-world experience.",
          action: "link",
          link: "#",
        },
      ],
    },
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleUseItem = () => {
    if (!selectedItem) return;

    if (selectedItem.action === "download") {
      console.log("Download:", selectedItem.name);
    } else if (selectedItem.action === "link") {
      window.open(selectedItem.link, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 via-white to-blue-300 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-6xl bg-white border-4 sm:border-8 border-gray-800 rounded-lg shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="bg-bag-border border-b-2 sm:border-b-4 border-gray-800 p-2 sm:p-4 flex items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full border-2 border-red-700 mr-2 sm:mr-4"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider font-mono">
            BAG
          </h1>
        </div>

        {/* Main Content - Stack on mobile, side by side on desktop */}
        <div className="flex flex-col lg:flex-row lg:h-96">
          {/* Left Side - Bag Sprite */}
          <Image
            className="bg-bag-background"
            src={"/BagSprite.png"}
            alt="Your Sprite"
            width={512}
            height={512}
          />

          {/* Right Side - Menu */}
          <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col min-h-64 lg:min-h-0">
            {/* Pocket Tabs - Responsive grid */}
            <div className="bg-bag-border border-b border-gray-400 sm:border-b-2 p-1 sm:p-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1">
                {Object.entries(pockets).map(([key, pocket]) => (
                  <BagItem
                    onClick={() => setSelectedPocket(key)}
                    key={key}
                    name={pocket.name}
                    isSelected={selectedPocket === key}
                  />
                ))}
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 p-2 sm:p-4 overflow-y-auto max-h-48 lg:max-h-none bg-bag-yellow">
              {pockets[selectedPocket].items.length === 0 ? (
                <div className="text-center text-gray-500 font-mono mt-4 sm:mt-8 text-sm">
                  The {pockets[selectedPocket].name} pocket is empty.
                </div>
              ) : (
                <div className="space-y-1 sm:space-y-2">
                  {pockets[selectedPocket].items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={`p-2 sm:p-3 border-2 rounded cursor-pointer font-mono text-xs sm:text-sm transition-colors ${
                        selectedItem?.id === item.id
                          ? "bg-yellow-200 border-yellow-500"
                          : "bg-white border-gray-400 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between text-bag-text">
                        <span className="font-bold truncate pr-2">
                          {item.name}
                        </span>
                        <span className="text-xs flex-shrink-0">×1</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-bag-description border-t-2 sm:border-t-4 border-gray-800 p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            {/* Description Box */}
            <div className="flex-1 bg-white border-2 sm:border-4 border-gray-600 rounded p-2 sm:p-4 sm:mr-4 min-h-16 sm:min-h-24">
              {selectedItem ? (
                <p className="font-mono text-xs sm:text-sm leading-relaxed text-bag-text">
                  {selectedItem.description}
                </p>
              ) : (
                <p className="font-mono text-xs sm:text-sm text-bag-text leading-relaxed">
                  Select an item to see its description.
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
              <button
                onClick={handleUseItem}
                disabled={!selectedItem}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 font-bold font-mono border-2 sm:border-4 rounded transition-colors text-sm ${
                  selectedItem
                    ? "bg-green-500 text-white border-green-700 hover:bg-green-600 active:bg-green-700"
                    : "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
                }`}
              >
                USE
              </button>
              <button
                disabled={!selectedItem}
                className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 font-bold font-mono border-2 sm:border-4 rounded transition-colors text-sm ${
                  selectedItem
                    ? "bg-blue-500 text-white border-blue-700 hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
                }`}
              >
                INFO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
