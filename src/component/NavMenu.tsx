import React from "react";
import { useGlobalContext } from "../store";

const NavMenu = () => {
  const { name } = useGlobalContext();
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>
          <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
            {name?.split("")[0]?.toUpperCase()}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
