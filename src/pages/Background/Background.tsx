import React, { ComponentProps } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { COLORS } from "../../constants";
import { Icon, IconWithChildren } from "../../components/Icon";
import { ImageWithDetails } from "../../components/ImageWithDetails";
import { ImageWithDetailContainer } from "../../components/ImageWithDetailContainer";

export default function Background() {
  const { data } = useCopy({ filePath: "/copy/background.json" });

  const svgProps = {
    fill: COLORS.LIGHT_VIOLET,
    className: "size-28",
    viewBox: "0 0 24 24",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
  };
  const props: Array<ComponentProps<typeof ImageWithDetails>> = [
    {
      Image: (
        <IconWithChildren
          svgProps={{
            ...svgProps,
            version: "1.1",
            id: "Capa_1",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 247 243.31",
          }}
          children={
            <g transform="matrix(1.3333 0 0 -1.3333 -391.72 660.3)">
              <g>
                <path d="m380.64 445.3-5.1357-5.0478v-34.279l5.5767-5.2983h9.3677v-31.244h-7.4663v21.016h-7.478v-22.967l5.1489-5.0654 12.517-0.07764 5.0845 5.1431v36.649l-5.6279 5.2573-9.457-0.00586-0.02344 28.132 7.3022-0.03369v-18.04h7.7036l0.02344 20.836-5.042 5.0244h-12.494zm19.178-11 0.01172-7.1558c2.0416-0.19882 5.1577-0.55078 5.1577-0.55078l-0.00586-48.354c2.5447-0.36734 4.9698-0.69351 7.2817-1.1045v48.567s2.8418-0.39832 5.4302-0.84082v7.2202c-6.1684 1.0899-11.674 1.67-17.875 2.2192zm-34.666-0.89795c-3.2382-0.43159-6.4977-0.82161-9.7661-1.4326l-4.0606-5.3379v-47.499l3.7383-3.3076c4.1607 1.0014 7.276 1.5084 11.292 2.1255l3.5215 4.4282v46.383l-4.7256 4.6406zm58.739-2.4551-4.5278-4.1411v-51.161c2.2865-0.59405 4.5475-1.0594 6.7588-1.771v25.499l4.4224-1.2627v-25.752c2.284-0.84258 4.5214-1.5738 6.7061-2.54v52.03l-3.8789 6.9771c-3.2939 0.88864-6.1841 1.417-9.4805 2.1226zm-76.252-0.45263c-2.2743-0.52131-4.6902-0.96052-6.9609-1.5703v-57.311c2.2937 0.76983 4.4138 1.4962 6.9609 2.2588v56.622zm-10.554-2.5737c-2.3604-0.68375-4.7125-1.1977-7.062-2.0669v-23.301l-4.6802-1.7607v23.647c-2.375-0.85591-4.5828-1.4895-6.9287-2.4448v-61.481c2.4926 1.7215 3.9321 2.6461 6.9302 4.4634v28.091s2.6505 1.1493 4.6787 1.8428v-27.511c2.2877 1.1081 4.6603 1.8442 7.0547 2.8564l0.00733 57.665zm102.45-0.74414v-7.459c0.52252-0.14912 5.5635-1.7051 5.5635-1.7051l0.01465-51.557c2.4707-1.2354 4.6271-2.3937 6.8408-3.8291v52.988s6.1071-2.3585 6.5508-2.5562v7.6948c-6.0859 2.5871-12.708 4.5078-18.97 6.4233zm-76.601-1.6318v-40.932l-4.7695-0.89355v41.186l4.7695 0.64014zm63.188-2.4126 4.4224-1.04v-16.408l-4.4224 1.0562v16.392zm34.868-3.2915v-78.12c5.0918-3.8722 12.564-9.7925 17.243-13.759v9.3662c-3.1921 2.5847-9.7632 7.8779-9.7632 7.8779v28.506s6.7481-3.6657 9.7632-5.4976v8.8901c-2.9411 1.8367-10.059 5.6177-10.059 5.6177l0.01172 25.931s6.6218-3.2859 10.05-5.228v8.2251c-5.5052 3.2539-11.411 5.574-17.246 8.1914zm-152.23-1.582c-3.66-1.713-7.1705-3.3141-10.68-5.2793l-3.5757-6.8262v-72.935l5.6616-3.7925c0.94562 0.5904 9.8345 5.9743 10.402 6.2871l3.3911 7.1265v71.621l-5.1987 3.7983zm-1.7783-8.6997-0.01026-67.677-5.1958-3.5376v68.486l5.2061 2.729z" />
                <path
                  d="m364.8 483.92-27.97-27.541v-23.887c7.9602 2.2258 15.605 3.5914 23.481 4.7783v9.4263l14.178 13.83h24.979l13.904-13.92v-9.2769c7.8705-1.159 15.474-2.6099 23.438-4.8091v23.732l-27.669 27.668h-44.341zm48.608-111.12-0.02051-11.612-13.789-14.105h-25.223l-14.079 14.071v11.568c-8.3069-1.6439-16.446-4.0022-23.418-7.0064v-14.385l27.814-27.743h44.555l27.576 27.872 0.00439 14.279c-7.3346 3.1072-14.799 5.3657-23.42 7.0606z"
                  fill={COLORS.LIGHT_VIOLET}
                />
                <path
                  d="m360.5 494.28-33.948-33.33 0.0542-26.158c-10.599-3.3921-21.72-7.4408-31.991-12.973v-5.5137c11.294 6.5175 28.166 12.147 37.321 14.836v27.346l30.891 30.385h48.397l30.527-30.174-0.03955-27.46c10.564-2.9666 26.365-8.963 36.539-14.637v5.5137c-10.237 5.4931-20.37 9.174-31.184 12.633l-0.03516 26.098-33.514 33.434h-53.019zm16.059-38.65-11.329-11.093v-6.5772c1.9264 0.24853 3.4236 0.31843 5.3306 0.50391v3.9009l8.1211 7.9175h16.477l7.9277-7.8838v-3.8452c1.907-0.17942 3.5275-0.41938 5.4551-0.66064v6.6387l-11.127 11.099h-20.855zm26.681-81.324v-8.8433l-7.9175-7.9541h-16.702l-8.0478 7.8149v8.9458c-1.9385-0.24974-3.4462-0.29503-5.3423-0.62842v-10.503l11.183-11.109h20.953l11.174 11.237v10.252c-1.8961 0.3237-3.3613 0.54683-5.2998 0.78809zm-71.287-10.673c-5.6046-2.7229-9.5277-5.1336-13.545-8.0772v-6.3486c2.4186 1.9252 5.4146 4.4541 8.1387 6.0483v-8.0654l34.043-33.895h52.724l33.722 33.747-0.00146 7.9087c3.8116-2.2877 7.1903-4.5904 10.324-7.2539v6.2329c-4.5899 3.5097-9.7392 6.9305-15.595 9.7031l-0.0293-14.222-30.476-30.766h-48.574l-30.731 30.593v14.395z"
                  fill={COLORS.LIGHT_VIOLET}
                />
              </g>
            </g>
          }
        />
      ),
      titleProps: { text: data?.university?.name },
      subTitleProps: {
        text: data?.university?.degree,
        className: "text-base font-medium",
      },
      detailsProps: { text: data?.university?.time },
    },
    {
      Image: (
        <Icon
          svgProps={svgProps}
          pathProps={{
            d: "M9.774 11.568c.193-1.322.168-2.013-1.768-1.906-2.223.124-4.476.265-7.849 1.027A5.63 5.63 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254 1.06 1.144 2.556 2.095 4.326 2.752a15.48 15.48 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026-1.937-.107-1.962.584-1.768 1.906l.046.298c.65 3.848 1.458 7.16 1.598 7.72C20.595 18.508 24 15.516 24 12c0-.443-.054-.88-.157-1.311m-.491-1.324a7.163 7.163 0 0 0-1.14-1.618c-1.06-1.144-2.555-2.095-4.325-2.752-1.784-.662-3.82-1.011-5.887-1.011-2.068 0-4.103.35-5.887 1.01-1.77.658-3.266 1.61-4.326 2.753A7.17 7.17 0 0 0 .648 9.366c2.304-.557 6.245-1.293 9.904-1.37.353-.008.596.105.756.307.196.248.18 1.128.175 1.522l-.104 10.18a18.507 18.507 0 0 0 1.244 0l-.104-10.18c-.005-.394-.02-1.274.175-1.522.16-.202.403-.315.756-.308 3.658.078 7.597.813 9.902 1.37z",
          }}
        />
      ),
      titleProps: { text: data?.work?.tcs?.title },
      subTitleProps: {
        text: data?.work?.tcs?.job_title,
        className: "text-base font-medium",
      },
      detailsProps: { text: data?.work?.tcs?.time },
    },
    {
      Image: (
        <Icon
          svgProps={svgProps}
          pathProps={{
            d: "M0 15.415c0 .468.38.85.848.85h5.937V.575L0 7.72v7.695m15.416 8.582c.467 0 .846-.38.846-.849v-5.937H.573l7.146 6.785h7.697M24 8.587a.844.844 0 0 0-.847-.846h-5.938V23.43l6.782-7.148L24 8.586M8.585.003a.847.847 0 0 0-.847.847v5.94h15.688L16.282.003H8.585Z",
          }}
        />
      ),
      titleProps: { text: data?.work?.chase?.title },
      subTitleProps: {
        text: data?.work?.chase?.job_title,
        className: "text-base font-medium",
      },
      detailsProps: { text: data?.work?.chase?.time },
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-24">
      <Text text={data?.title} className={"text-5xl"} color={"LIGHT_VIOLET"} />
      <ImageWithDetailContainer
        parentContainer="flex flex-col justify-center items-center"
        arrayContainer={"flex flex-row justify-center space-x-28 mr-28"}
        imgsPorps={props}
      />
    </div>
  );
}
