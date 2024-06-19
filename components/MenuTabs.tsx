"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuTabs() {
  const pathname = usePathname();

  const menuItems = [
    { title: "Overview", path: "/" },
    { title: "Historical Data", path: "/historical-data" },
  ];

  return (
    <div className="flex p-2 my-3 gap-2 border-b border-b-gray-200">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          className={`rounded-md px-2 p-1 text-sm   ${
            item.path === pathname
              ? " bg-black text-white"
              : "text-black hover:bg-gray-100 "
          }`}
          href={item.path}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default MenuTabs;
