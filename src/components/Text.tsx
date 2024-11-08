import React from "react";
import { COLORS } from "../constants";
import { Nullish } from "../types/types";

export const Text = ({
  text,
  className,
  color,
}: {
  text: Nullish<string>;
  className?: string;
  color?: keyof typeof COLORS;
}) => {
  return (
    <>
      <p
        className={className}
        style={{ color: color ? COLORS[color] : COLORS.BLACK }}
      >
        {text}
      </p>
    </>
  );
};
