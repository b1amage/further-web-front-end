import React from "react";

export const Type = (props) => {
  const { button, onClickButton, index, activeButtonStyle } = props;
  const { type, value, name, icon } = button;
  return (
    <button
      className={`${activeButtonStyle(
        index
      )} py-6 pl-6 flex text-left w-full bg-white my-6 rounded-[20px] mx-0.5`}
      onClick={() => onClickButton(index)}
    >
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
  );
};
