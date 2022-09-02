import React from "react";
import Header from "../header/Header";

export const IdealMatchHeader = () => {
  return (
    <div className="px-5 md:w-3/4 md:mx-auto">
      <Header title={"Ideal Match"} />
      <div className="my-4">
        <span>What are you hoping to find on the Kencan dating app?</span>
      </div>
    </div>
  );
};
