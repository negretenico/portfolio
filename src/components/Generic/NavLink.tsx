import React, { useState } from "react";
import { COLORS } from "../../constants";

export const NavLink = ({
  onClick,
  label,
}: {
  onClick: () => void;
  key: string;
  label: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const className = `text-left w-full mx-2 transition-colors `;

  const textColor = isHovered ? COLORS.CREAM : COLORS.WHITE;
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return (
    <a
      className={className}
      style={{
        cursor: "pointer",
        color: textColor,
        backgroundColor: COLORS.LIGHT_VIOLET,
      }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter} // Trigger hover effect
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </a>
  );
};
