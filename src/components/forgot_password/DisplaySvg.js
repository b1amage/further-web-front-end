import React from "react";

export const DisplaySvg = ({ svg }) => {
  return (
    <div className="flex justify-center">
      <img src={svg} alt={svg} />
    </div>
  );
};
