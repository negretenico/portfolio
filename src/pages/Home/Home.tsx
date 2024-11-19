import React from "react";
import { useCopy } from "../../utils/useCopy";
import { COLORS } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const { data: copy } = useCopy({ filePath: "/copy/home.json" });
  const [beforeComma, afterComma] = copy.title.split(",");
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="logo"
            className="w-64 h-64 rounded-full"
          />
        </div>
        <div className="mt-8">
          <span className="text-6xl mb-5" style={{ color: COLORS.BLACK }}>
            {beforeComma},
            <span style={{ color: COLORS.LIGHT_VIOLET }} className="font-bold">
              {afterComma}
            </span>
          </span>
          <div className="max-w-lg mx-auto mt-4 text-xl">
            <p className="text-lg text-wrap text-center">{copy.subtitle}</p>
          </div>
          <span
            style={{ color: COLORS.LIGHT_VIOLET, cursor: "pointer" }}
            onClick={() => navigate("contact")}
            className="mx-1 text-lg font-extrabold relative inline-block stroke-current mt-32"
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
      </div>
    </>
  );
}
