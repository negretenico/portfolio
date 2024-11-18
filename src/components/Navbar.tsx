import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const goToPage = (route: string) => {
    navigate(route);
  };
  const links = {
    home: {
      link: "",
      copy: "Home",
    },
    background: {
      link: "background",
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
  const NavLink = ({ copy, link }: { copy: string; link: string }) => {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a onClick={() => navigate(`/${link}`)}>{copy}</a>;
  };
  return (
    <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        {Object.values(links).map((entry) => {
          return <NavLink copy={entry.copy} link={entry.link} />;
        })}
      </div>
    </nav>
  );
};
