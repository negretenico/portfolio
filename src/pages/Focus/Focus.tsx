import React, { ComponentProps } from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Generic/Text";
import { ImageWithDetailContainer } from "../../components/Images/ImageWithDetailContainer";
import { ImageWithDetails } from "../../components/Images/ImageWithDetails";
import { Image } from "../../components/Images/Image";

export default function Focus() {
  const { data: copy } = useCopy({ filePath: "/copy/focus.json" });
  const singleImageContainerName = "h-full max-h-72 mb-3";
  const titleProps = {
    className: "text-lg font-semibold",
  };
  const subtitleProps = {
    className: "text-base font-medium",
  };
  const props: Array<ComponentProps<typeof ImageWithDetails>> = [
    {
      Image: (
        <Image
          imageProps={{
            src: "/frontend.webp",
            alt: "frontend",
            className: singleImageContainerName,
          }}
        />
      ),
      titleProps: {
        ...titleProps,
        text: copy?.frontend?.title,
      },
      subTitleProps: {
        ...subtitleProps,
        text: copy?.frontend?.subtitle,
      },
      detailsProps: { text: copy?.frontend?.details },
    },
    {
      Image: (
        <Image
          imageProps={{
            src: "/backend.webp",
            alt: "backend",
            className: singleImageContainerName,
          }}
        />
      ),
      titleProps: { ...titleProps, text: copy?.backend?.title },
      subTitleProps: {
        ...subtitleProps,
        text: copy?.backend?.subtitle,
      },
      detailsProps: { text: copy?.backend?.details },
    },
    {
      Image: (
        <Image
          imageProps={{
            src: "/ai.webp",
            alt: "ai",
            className: singleImageContainerName,
          }}
        />
      ),
      titleProps: { ...titleProps, text: copy?.ai?.title },
      subTitleProps: {
        ...subtitleProps,
        text: copy?.ai?.subtitle,
      },
      detailsProps: {
        text: copy?.ai?.details,
      },
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-20">
      <Text text={copy?.title} className={"text-5xl"} color={"LIGHT_VIOLET"} />
      <ImageWithDetailContainer
        arrayContainer={"flex flex-row  space-x-28 "}
        imgsPorps={props}
      />
    </div>
  );
}
