import checked from "../../assets/svg/checked.svg";
import React from "react";

export const RememberPwd = () => {
  return (
    <div className="mx-6 flex items-center">
      <label htmlFor="remember-pwd" className="flex items-center font-semibold cursor-pointer text-sm">
        <input type="checkbox" id="remember-pwd" className="appearance-none w-4 h-4 border border-primary-100 rounded mr-3" />
        <img src={checked} alt="checked" className="absolute opacity-0 check-box"/>
        Remember me
      </label>
    </div>
  );
};
