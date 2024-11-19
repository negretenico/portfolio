import React, { ReactNode } from "react";
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
export const IconWithChildren = ({
  svgProps,
    children
}: {
  svgProps: React.SVGProps<SVGSVGElement>;
  children: React.ReactNode;
}) => {
  return (
    <>
      <svg {...svgProps}>
        {children}
      </svg>
    </>
  );
};
