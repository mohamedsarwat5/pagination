import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-20 bg-sky-500 text-black text-2xl flex items-center justify-center gap-5">
        <NavLink to={"/support"}>Support</NavLink>
        <NavLink to={"/notsupport"}>NotSupport</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
