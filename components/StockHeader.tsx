"use client";
import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

function StockHeader() {
  return (
    <div className=" sm:[&>*]:px-5 lg:[&>*]:px-10 max-sm:gap-5 sm:divide-x shadow-md rounded-md flex flex-col sm:flex-row p-3 md:items-center mt-10 px-10 mx-3">
      <div>
        <div className="text-2xl sm:text-xl font-bold">Apple Inc</div>
        <div className="text-gray-400">APPL (Nasdaq - US)</div>
      </div>

      <div className="relative">
        <div className="flex items-center">
          <div className="text-green-600 max-sm:absolute max-sm:left-[-25px]">
            <IoMdArrowDropup color={"text-green-600"} size={25} />
          </div>
          <div className="text-3xl font-bold">214.16</div>
          <div className="text-green-600 ml-1 whitespace-nowrap">
            +2.4 (-2.4%)
          </div>
        </div>
        <div className="text-xs text-gray-400">
          in USD as of: Jun 18, 2024 11:03 UTC -4
        </div>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        <div>
          <div className="font-bold">Open</div>
          <div>217.59</div>
        </div>
        <div>
          <div className="font-bold">High</div>
          <div>220.59</div>
        </div>
        <div>
          <div className="font-bold">Low</div>
          <div>216.59</div>
        </div>
      </div>
    </div>
  );
}

export default StockHeader;
