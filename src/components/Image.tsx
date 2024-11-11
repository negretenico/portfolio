import React from "react";

export const Image = ({
  imageProps,
}: {
  imageProps: React.ImgHTMLAttributes<HTMLImageElement> & { alt: string };
}) => {
  return (
    <>
      <div className="overflow-hidden rounded-t-full">
        <img {...imageProps} />
      </div>
    </>
  );
};
