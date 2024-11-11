import React from "react";
import { useCopy } from "../../utils/useCopy";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";

export default function AboutMe() {
  const { data } = useCopy({ filePath: "/copy/aboutme.json" });
  return (
    <div className="flex flex-row items-center justify-center mt-20">
      <div className="max-w-lg mr-32 space-y-10">
        <Text
          text={data?.title}
          className="text-6xl text-center inline-block whitespace-nowrap"
          color="LIGHT_VIOLET"
        />
        <Text text={data?.subtitle} className="text-xl text-left" />
      </div>
      <div className="relative w-full max-w-lg">
        <Image
          imageProps={{
            src: "/pfp.jpg",
            alt: "pfp",
            className: "object-cover w-full h-full",
          }}
        />
      </div>
    </div>
  );
}
