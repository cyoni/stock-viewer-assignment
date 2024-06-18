import React from "react";
import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="bg-black text-white p-2 h-12 flex">
      <div>Logo</div>
      <div className="hidden ml-5 sm:flex gap-5 items-center rounded-full px-2 border ">
        <Input className=" bg-black placeholder:text-white outline-none border-none h-5 " placeholder="Search..." />
        <CiSearch className="cursor-pointer " size={20} />
      </div>
    </div>
  );
}

export default Header;
