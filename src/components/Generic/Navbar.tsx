import React from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants";
import { NavLink } from "./NavLink";

const links = {
  home: {
    link: "",
    copy: "Home",
  },
  background: {
    link: "aboutme",
    copy: "About Me",
  },
  gallery: {
    link: "gallery",
    copy: "Gallery",
  },
  focus: {
    link: "focus",
    copy: "Focus",
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={"flex flex-row sticky top-0 z-40 mb-2"}>
      <nav
        style={{
          backgroundColor: COLORS.LIGHT_VIOLET,
        }}
        className="w-full flex items-center px-4 shadow"
      >
        <div className={"flex items-center w-full"}>
          <a
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            className="flex items-center"
          >
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
              className="rounded-full h-10"
            />
          </a>
          <ul className="flex my-auto">
            {Object.values(links).map((entry) => {
              return (
                <li>
                  <NavLink
                    key={entry.link}
                    label={entry.copy}
                    onClick={() => navigate(`/${entry.link}`)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};
