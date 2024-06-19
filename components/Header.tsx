import React from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="bg-black text-white p-2 px-6 h-12 flex gap-10 max-md:justify-between max-md:items-center">
      <div className="text-2xl font-semibold">Stock Viewer</div>
      <div className="hidden md:flex items-center rounded-full px-2 border w-72">
        <input
          className="bg-black text-sm p-2 placeholder:text-white outline-none border-none h-6 w-full"
          placeholder="Search..."
        />
        <CiSearch className="cursor-pointer" size={20} />
      </div>

      <div className="md:hidden">
        <CiSearch className="cursor-pointer" size={20} />
      </div>
    </div>
  );
}

export default Header;
