"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import pockets from "./pockets.json";
const BagItem = ({ name, kkey, onClick, isSelected }: any) => {
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
      <a
        key={kkey}
        onClick={onClick}
        className={
          isSelected
            ? "underline decoration-bag-border-underline decoration-3"
            : ""
        }
      >
        <span className="text-bag-text hidden sm:inline">{name}</span>
        <span className="text-bag-text sm:hidden">{name.split(" ")[0]}</span>
      </a>
    </div>
  );
};

const Item = ({ item, isSelected, onClick }: any) => {
  return (
    <div
      key={item.id}
      onClick={onClick}
      className={`p-2 sm:p-3 border-2 rounded cursor-pointer font-mono text-xs sm:text-sm transition-colors ${
        isSelected
          ? "bg-yellow-200 border-yellow-500"
          : "bg-white border-gray-400 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-center justify-between text-bag-text">
        <span className="font-bold truncate pr-2">{item.name}</span>
        <span className="text-xs flex-shrink-0">×1</span>
      </div>
    </div>
  );
};
const Items = ({ pocket, setSelectedItem, selectedId }: any) => {
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  if (pocket.items.length === 0) {
    return (
      <div className="text-center text-gray-500 font-mono mt-4 sm:mt-8 text-sm">
        The {pocket.name} pocket is empty.
      </div>
    );
  }
  return pocket.items.map((item: any) => (
    <Item
      item={item}
      key={item.id}
      isSelected={selectedId === item.id}
      onClick={() => handleItemClick(item)}
    />
  ));
};
const DescriptionBox = ({ description }: any) => {
  if (!description) {
    return (
      <div className="flex-1 bg-white border-2 sm:border-4 border-gray-600 rounded p-2 sm:p-4 sm:mr-4 min-h-16 sm:min-h-24">
        <p className="font-mono text-xs sm:text-sm text-bag-text leading-relaxed">
          Select an item to see its description.
        </p>
      </div>
    );
  }
  return (
    <div className="flex-1 bg-white border-2 sm:border-4 border-gray-600 rounded p-2 sm:p-4 sm:mr-4 min-h-16 sm:min-h-24">
      <p className="font-mono text-xs sm:text-sm leading-relaxed text-bag-text">
        {description}
      </p>
    </div>
  );
};
export default function Bag() {
  const [selectedPocket, setSelectedPocket] = useState("items");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleUseItem = () => {
    if (!selectedItem) return;

    if (selectedItem.action === "download") {
      console.log("Download:", selectedItem.name);
    } else if (selectedItem.action === "link") {
      window.open(selectedItem.link, "_blank");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-6xl bg-bag-beige border-4 sm:border-8 border-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="bg-bag-border border-b-2 sm:border-b-4 border-gray-800 p-2 sm:p-4 flex items-center">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full border-2 border-red-700 mr-2 sm:mr-4"></div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider font-mono">
            BAG
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:h-96">
          <div className="w-full lg:w-1/2 bg-transparent">
            <Image
              src={"/BagSprite.png"}
              alt="Your Sprite"
              width={512}
              height={512}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col min-h-64 lg:min-h-0">
            <div className="bg-bag-border border-b border-gray-400 sm:border-b-2 p-1 sm:p-2">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-1">
                {Object.entries(pockets).map(([key, pocket]) => (
                  <BagItem
                    key={key}
                    onClick={() => setSelectedPocket(key)}
                    kkey={key}
                    name={pocket.name}
                    isSelected={selectedPocket === key}
                  />
                ))}
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 p-2 sm:p-4 overflow-y-auto max-h-48 lg:max-h-none bg-bag-yellow">
              <Items
                pocket={pockets[selectedPocket] as any}
                setSelectedItem={setSelectedItem}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-bag-description border-t-2 sm:border-t-4 border-gray-800 p-2 sm:p-4">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <DescriptionBox description={selectedItem.description} />

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
