import React, { useState } from "react";

export const Type = ({type, value, name, icon }) => {
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsActive(state => !state)
  }

  return (
    // <div className={`   w-full h-full flex   `}>
      <button className={`${isActive ? "border-2 border-primary-100" : "border border-gray"} py-6 pl-6 flex text-left w-full bg-white my-6 rounded-[20px] mx-0.5`} onClick={handleActive}>
        <div className="w-fit h-auto p-6 rounded-full bg-primary-100 bg-opacity-10">
          <img src={icon} alt={`${icon}`} />
        </div>

        <div className="mx-5 my-2">
          <span className=" text-gray2 text-sm" id={type}>
            via {name}:
          </span>
          <h1 className="font-semibold text-lg text-black">{value}</h1>
        </div>
      </button>
    // </div>
  );
};
