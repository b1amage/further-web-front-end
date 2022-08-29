import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = ({ name, path, className }) => {
  const navigate = useNavigate();

  const changePage = () => {
    navigate(path);
  };

  return (
    <button
      className={`w-full h-[55px] mt-[80px] mb-5 rounded-[32px] bg-gradient-to-l from-primary-100 to-primary-50 text-white font-semibold font-sourceSansPro text-lg ${className}`}
      onClick={changePage}
    >
      {name}
    </button>
  );
};
