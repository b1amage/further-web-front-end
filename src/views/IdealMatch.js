import React from "react";
import { Button } from "../components/forgot_password/Button";
import Header from "../components/header/Header";
import { IdealTypeList } from "../components/idea_match/IdealTypeList";
import { SucessNotification } from "../components/idea_match/SucessNotification";

export const IdealMatch = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col">
        <div className='px-5'>
          <Header title={"Ideal Match"} />
          <div className="my-4">
            <span>What are you hoping to find on the Kencan dating app?</span>
          </div>
        </div>
        
        <div className='h-full px-5'>
          <IdealTypeList />
        </div>
        <div className="pt-6 pb-[48px] px-6 h-fit flex items-center border-t border-t-gray rounded-t-[24px] relative bottom-0">
          <Button name={"Next"} className={`!mt-4`} />
        </div>
      </div>

      <div>
        <SucessNotification />
      </div>
    </>
    
  );
};