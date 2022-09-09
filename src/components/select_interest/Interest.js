import React from "react";

export const Interest = ({isActive, title, value, className, onChange}) => {
  return (
    <label
      className={`${
        isActive
          ? "bg-gradient-to-br from-primary-50 to-primary-100 text-white"
          : "border border-primary-100 text-primary-100 bg-transparent"
      } rounded-[32px] w-full min-h-[55px] text-xl text-center font-semibold px-4 py-2 ${className} flex justify-center items-center cursor-pointer`}
      htmlFor={title}
    > 
      <input type={"checkbox"} name={title} onChange={(e) => onChange(e)} value={value} id={title} className="hidden"/>
      {title}
    </label>
  );
};
