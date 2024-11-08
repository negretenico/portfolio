import React, { useContext } from "react";
import { useCopy } from "../../utils/useCopy";
import { Nullish } from "../../types/types";
import { COLORS } from "../../constants";
const Image = () => {
  return (
    <>
      <div className="overflow-hidden rounded-t-full">
        <img src="/pfp.jpg" className="object-cover w-full h-full" />
      </div>
    </>
  );
};
const Text = ({
  text,
  className,
  color,
}: {
  text: Nullish<string>;
  className: string;
  color?: keyof typeof COLORS;
}) => {
  return (
    <>
      <p
        className={className}
        style={{ color: color ? COLORS[color] : COLORS.BLACK }}
      >
        {text}
      </p>
    </>
  );
};
export default function AboutMe() {
  const { data } = useCopy({ filePath: "/copy/aboutme.json" });
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="max-w-lg mr-32 space-y-10">
        <Text
          text={data?.title}
          className="text-6xl text-center inline-block whitespace-nowrap"
          color="LIGHT_VIOLET"
        />
        <Text text={data?.subtitle} className="text-xl text-left" />
      </div>
      <div className="relative w-full max-w-lg">
        <Image />
      </div>
    </div>
  );
}
