import React from "react";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="bg-white sticky top-0 px-20 h-20 border-b shadow flex items-center justify-between">
      <div>Logo</div>
      <NavMenu />
    </div>
  );
};

export default Header;
