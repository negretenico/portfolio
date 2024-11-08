import React from "react";
export const Icon = ({
  svgProps,
  pathProps,
}: {
  svgProps: React.SVGProps<SVGSVGElement>;
  pathProps: React.SVGProps<SVGPathElement>;
}) => {
  return (
    <>
      <svg {...svgProps}>
        <path {...pathProps} />
      </svg>
    </>
  );
};
