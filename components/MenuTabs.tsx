import Link from "next/link";
import React from "react";

function MenuTabs() {
  return (
    <div className="flex p-2 my-2">
      <Link
        className="bg-black text-white rounded-md px-2 p-1 text-sm"
        href={"/"}
      >
        Overview
      </Link>

      <Link className="rounded-md px-2 p-1 text-sm" href={"/historical-data"}>
        Historical Data
      </Link>
    </div>
  );
}

export default MenuTabs;
