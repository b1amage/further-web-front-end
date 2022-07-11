import React from "react";

export const Type = ({borderColor, type, value, name, icon}) => {
  return (
    <div className={`p-0.5 rounded-[20px] my-6 ${borderColor}`}>
      <div className="flex py-6 pl-6 rounded-[20px] bg-white">
        <div className="w-fit h-auto p-6 rounded-full bg-primary-100 bg-opacity-10">
          <img src={icon} alt={`${icon}`} />
        </div>

        <div className="mx-5 my-2">
          <span className=" text-gray2 text-sm" id={type}>via {name}:</span>
          <h1 className="font-semibold text-lg">{value}</h1>
        </div>
      </div>
    </div>
  );
};
