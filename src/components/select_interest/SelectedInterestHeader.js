import React from "react";
import Header from "../header/Header";

export const SelectedInterestHeader = () => {
  return (
    <div className="px-6 h-full md:w-1/2">
      <Header title={"Select Your Interest"} />
      <div className="h-fit mb-3">
        <p className="mb-3">
          Select your interests to match with users who have similar things in
          common.
        </p>
      </div>
    </div>
  );
};
