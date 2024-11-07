import { useEffect } from "react";
import { COLORS } from "../constants";

export const useChangeBackgroundColor = ({
  color,
}: {
  color: keyof typeof COLORS;
}) => {
  useEffect(() => {
    document.body.style.backgroundColor = COLORS[color];
    return () => {
      document.body.style.backgroundColor = COLORS.WHITE;
    };
  }, []);
};
