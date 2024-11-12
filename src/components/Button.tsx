import React, { useState } from "react";
import { COLORS } from "../constants";

export const Button = ({
  onClick,
  key,
  isActive,
  label,
}: {
  onClick: () => void;
  key: string;
  isActive: boolean;
  label: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const className = `py-2 px-4 text-left rounded-lg w-full mb-2 transition-colors`;

  // Set the background and text color based on the state
  const backgroundColor = isActive
    ? COLORS.VIOLET
    : isHovered
      ? COLORS.LIGHT_VIOLET // Add hover color
      : COLORS.WHITE;

  const textColor = isActive || isHovered ? COLORS.WHITE : COLORS.BLACK;
  return (
    <button
      style={{
        backgroundColor,
        color: textColor,
      }}
      key={key}
      onClick={onClick}
      onMouseEnter={handleMouseEnter} // Trigger hover effect
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {label}
    </button>
  );
};
