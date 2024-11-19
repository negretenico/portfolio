import React, { ComponentProps } from "react";
import { Icon } from "./Icon";
import { Text } from "./Text";

export const IllustrationText = ({
  text,
  icon,
}: {
  text: ComponentProps<typeof Text>;
  icon: ComponentProps<typeof Icon>;
}) => {
  return (
    <>
      <span className="mx-1 relative inline-block stroke-current">
        <Text {...text} />
        <Icon {...icon} />
      </span>
    </>
  );
};
