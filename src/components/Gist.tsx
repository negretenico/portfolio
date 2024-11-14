import React from "react";

export const Gist = ({
  iframeProps,
}: {
  iframeProps: React.IframeHTMLAttributes<HTMLIFrameElement>;
}) => {
  return <iframe {...iframeProps} />;
};
