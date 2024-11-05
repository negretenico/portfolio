import React from "react";
import { useCopy } from "../utils/useCopy";
import { COLORS } from "../constants";

export default function Home() {
  const { data: copy, isLoading } = useCopy({ filePath: "/copy/home.json" });
  if (isLoading) {
    return <p>Spinner</p>;
  }
  const [beforeComma, afterComma] = copy.title.split(",");
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* TODO: add svg for our logo*/}
        <span className="text-5xl mb-5" style={{ color: COLORS.BLACK }}>
          {beforeComma},
          <span style={{ color: COLORS.LIGHT_VIOLET }} className="font-bold">
            {afterComma}
          </span>
        </span>
        <div className="max-w-lg mx-auto">
          <p className="text-lg text-wrap text-center truncate">
            {copy.subtitle}
          </p>
        </div>
        {/* TODO: add clickable link to take us to the contact you page */}
        <span
          style={{ color: COLORS.LIGHT_VIOLET }}
          className="mx-1 font-extrabold relative inline-block stroke-current mt-32"
        >
          {copy.footer}
          <svg
            className="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              strokeWidth="2"
            ></path>
          </svg>
        </span>
      </div>
    </>
  );
}
