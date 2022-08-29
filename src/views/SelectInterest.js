import React from "react";
import { Button } from "../components/forgot_password/Button";
import Header from "../components/header/Header";
import { InterestList } from "../components/select_interest/InterestList";

export const SelectInterest = () => {
  return (
    <div className="pt-6 h-screen inline-flex flex-col overflow-hidden">
      <div className="px-6 h-full">
        <Header title={"Select Your Interest"} />
        <div className="h-full">
          <p className="my-6">
            Select your interests to match with users who have similar things in
            common.
          </p>
          <InterestList />
        </div>
      </div>
      <div className="pt-6 pb-[48px] px-6 h-fit flex items-center border-t border-t-gray rounded-t-[24px]">
        <Button name={"Next"} className={`!mt-4`} />
      </div>
    </div>
  );
};
