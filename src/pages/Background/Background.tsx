import React, { ComponentProps, ReactNode } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { COLORS } from "../../constants";
import { Icon, IconWithChildren } from "../../components/Icon";
export default function Background() {
  const { data } = useCopy({ filePath: "/copy/background.json" });
  const Item = ({
    PassedIcon,
    titleProps,
    subTitleProps,
    timeProps,
  }: {
    PassedIcon: JSX.Element;
    titleProps: ComponentProps<typeof Text>;
    subTitleProps: ComponentProps<typeof Text>;
    timeProps: ComponentProps<typeof Text>;
  }) => {
    return (
      <>
        {PassedIcon}
        <Text {...titleProps} />
        <hr />
        <Text {...subTitleProps} />
        <Text {...timeProps} />
      </>
    );
  };
  const svgProps = {
    fill: COLORS.FUSHIA,
    className: "size-28",
    viewBox: "0 0 24 24",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
  };
  const props: Array<ComponentProps<typeof Item>> = [
    {
      PassedIcon: <IconWithChildren svgProps={svgProps} />,
      titleProps: { text: data?.university?.name },
      subTitleProps: { text: data?.university?.degree },
      timeProps: { text: data?.university?.time },
    },
    {
      PassedIcon: (
        <Icon
          svgProps={svgProps}
          pathProps={{
            d: "M9.774 11.568c.193-1.322.168-2.013-1.768-1.906-2.223.124-4.476.265-7.849 1.027A5.63 5.63 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254 1.06 1.144 2.556 2.095 4.326 2.752a15.48 15.48 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026-1.937-.107-1.962.584-1.768 1.906l.046.298c.65 3.848 1.458 7.16 1.598 7.72C20.595 18.508 24 15.516 24 12c0-.443-.054-.88-.157-1.311m-.491-1.324a7.163 7.163 0 0 0-1.14-1.618c-1.06-1.144-2.555-2.095-4.325-2.752-1.784-.662-3.82-1.011-5.887-1.011-2.068 0-4.103.35-5.887 1.01-1.77.658-3.266 1.61-4.326 2.753A7.17 7.17 0 0 0 .648 9.366c2.304-.557 6.245-1.293 9.904-1.37.353-.008.596.105.756.307.196.248.18 1.128.175 1.522l-.104 10.18a18.507 18.507 0 0 0 1.244 0l-.104-10.18c-.005-.394-.02-1.274.175-1.522.16-.202.403-.315.756-.308 3.658.078 7.597.813 9.902 1.37z",
          }}
        />
      ),
      titleProps: { text: data?.work?.tcs?.title },
      subTitleProps: { text: data?.work?.tcs?.job_title },
      timeProps: { text: data?.work?.tcs?.time },
    },
    {
      PassedIcon: (
        <Icon
          svgProps={svgProps}
          pathProps={{
            d: "M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z",
          }}
        />
      ),
      titleProps: { text: data?.work?.chase?.title },
      subTitleProps: { text: data?.work?.chase?.job_title },
      timeProps: { text: data?.work?.chase?.time },
    },
  ];
  return (
    <div>
      <Text text={data?.title} className={""} />
      <div className="flex flex-row">
        {props.map((prop) => {
          return (
            <>
              <div className="max-w-sm justify-center">
                <Item {...prop} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
