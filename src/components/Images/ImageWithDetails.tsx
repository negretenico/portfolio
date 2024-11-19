import React, { ComponentProps } from "react";
import { Text } from "../Generic/Text";
import { COLORS } from "../../constants";

export const ImageWithDetails = ({
  Image,
  titleProps,
  subTitleProps,
  detailsProps,
}: {
  Image: JSX.Element;
  titleProps: ComponentProps<typeof Text>;
  subTitleProps: ComponentProps<typeof Text>;
  detailsProps: ComponentProps<typeof Text>;
}) => {
  return (
    <>
      <div className="max-w-lg flex flex-col items-center space-y-1">
        {Image}
        <Text {...titleProps} />
        <hr
          className="w-3/4 mx-auto"
          style={{
            border: 0,
            height: ".1rem",
            backgroundColor: COLORS.FUSHIA,
          }}
        />
        <div className={"max-w-sm"}>
          <Text {...subTitleProps} />
          <Text {...detailsProps} />
        </div>
      </div>
    </>
  );
};
