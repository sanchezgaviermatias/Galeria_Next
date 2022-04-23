import React from "react";

import products from "../utils";

export default function Cards() {
  return (
    <div className="">
      <h1 className="text-5xl text-center mt-10 text-red-300 font-medium">
        Colections
      </h1>
      <div className="max-w-6xl mx-auto py-24 px-4 ">
        <div className="mt-5 ">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-16 lg:grid-cols-3 ">
            {products.map(({ id, imageSrc, name, price, description }) => (
              <div>
                <div className="col-span-1 rounded-lg">
                  <img
                    className="object-center object-cover "
                    src={imageSrc}
                    alt={id}
                  />
                </div>
                <div className="mt-4 px-5 flex items-start justify-between text-base font-medium text-gray-900">
                  <h3>{name}</h3>
                  <p>{price}</p>
                </div>
                <p className="mt-1 px-5  text-sm italic text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
