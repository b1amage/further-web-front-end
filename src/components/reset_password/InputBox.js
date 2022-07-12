import React from "react";
import hiddenPasswordButton from "../../assets/svg/hiddenPasswordButton.svg";

export const InputBox = ({id, name, title}) => {
  return (
    <div className="my-6">
      <label htmlFor={id} className=" opacity-80 mx-6">
        {title}<span className="text-required">*</span>
      </label>
      <div className="w-full h-12 flex rounded-[100px] border border-gray px-6 py-3 mt-2">
        <input
          type="password"
          id={id}
          name={name}
          className="w-full h-full outline-none bg-transparent"
          placeholder={title}
        />
        <img src={hiddenPasswordButton} alt="hidden-button" />
      </div>
    </div>
  );
};
