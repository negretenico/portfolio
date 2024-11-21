import React, { ComponentProps } from "react";
import { Icon, IconWithChildren } from "./Icon";

export const ClickableIcon = ({
  a,
  icon,
}: {
  icon: ComponentProps<typeof Icon> | ComponentProps<typeof IconWithChildren>;
  a: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  return (
    <a {...a}>
      {"children" in icon ? (
        <IconWithChildren {...icon} children={icon.children} />
      ) : (
        <Icon {...icon} />
      )}
    </a>
  );
};
