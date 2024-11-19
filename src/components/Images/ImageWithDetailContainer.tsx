import { ImageWithDetails } from "./ImageWithDetails";
import React, { ComponentProps } from "react";

export const ImageWithDetailContainer = ({
  imgsPorps,
  arrayContainer,
  parentContainer,
}: {
  imgsPorps: Array<ComponentProps<typeof ImageWithDetails>>;
  parentContainer?: string;
  arrayContainer?: string;
}) => {
  return (
    <div className={parentContainer}>
      <div className={arrayContainer}>
        {imgsPorps.map((prop) => {
          return (
            <>
              <ImageWithDetails {...prop} />
            </>
          );
        })}
      </div>
    </div>
  );
};
