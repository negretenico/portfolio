import React, { useState } from "react";
import { Nullish } from "../types/types";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<Nullish<number>>(null); // Tracks the active (expanded) section

  const toggleSection = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle section
  };

  const sections = [
    { title: "Section 1", content: "This is the content of Section 1." },
    { title: "Section 2", content: "This is the content of Section 2." },
    { title: "Section 3", content: "This is the content of Section 3." },
  ];

  return (
    <div className="space-y-2">
      {sections.map((section, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection(index)} // Toggle the active section
            className="w-full px-4 py-2 bg-blue-600 text-white text-left focus:outline-none"
          >
            {section.title}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              activeIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
            style={{
              transitionProperty: "max-height", // Only animate max-height for the content
            }}
          >
            <div className="p-4 bg-gray-100">
              <p>{section.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
