/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Buttons() {
  return (
    <div>
      <h1 className="text-5xl text-center text-orange-300 font-medium">
        {" "}
        Botones{" "}
      </h1>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl text-center mt-3 font-light">
          Tipo Simple Boton
        </h2>
        <div
          className="mt-6  flex flex-col space-y-6 items-center 
    justify-start xl:space-y-0 xl:flex-row xl:space-x-12  xl:flex-wrap    "
        >
          <a
            className="text-white bg-gray-900  
      rounded font-medium  hover:bg-gray-700
       divide-x shadow
      cursor-pointer px-6 py-4  transition-colors  "
          >
            <span className="pr-6"> Get Pricing</span>
            <span className="pl-6">$199</span>
          </a>

          <a
            className="text-white bg-orange-500  
      rounded font-medium  hover:bg-orange-400
       divide-x shadow
      cursor-pointer px-6 py-4 transition-colors  "
          >
            <span className="pr-6"> Get Pricing</span>
            <span className="pl-6">$199</span>
          </a>

          <a
            className="text-white bg-indigo-500  
      rounded font-medium  hover:bg-indigo-400
       divide-x shadow
      cursor-pointer px-6 py-4 transition-colors  "
          >
            <span className="pr-6"> Get Pricing</span>
            <span className="pl-6">$199</span>
          </a>

          <a
            className="text-white bg-emerald-500  
      rounded font-medium  hover:bg-emerald-400
       divide-x shadow
      cursor-pointer px-6 py-4   "
          >
            <span className="pr-6"> Get Pricing</span>
            <span className="pl-6">$199</span>
          </a>
        </div>
      </div>
    </div>
  );
}
