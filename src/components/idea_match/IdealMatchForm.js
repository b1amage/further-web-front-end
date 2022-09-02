import React from "react";
import { Button } from "../forgot_password/Button";
import { IdealTypeList } from "./IdealTypeList";

export const IdealMatchForm = ({onSubmit, onChange, error}) => {
  return (
    <form onSubmit={onSubmit} className="h-full md:w-3/4 md:mx-auto">
      <IdealTypeList onChangeType={onChange} />
      <span className="text-primary-100 mx-5 my-2">{error}</span>
      <div className="pt-2 pb-[24px] px-6 h-fit flex items-center border-t border-t-gray rounded-t-[24px] relative bottom-0">
        <Button name={"Next"} className={`!mt-4 md:w-[500px] md:mx-auto`} type={"submit"} />
      </div>
    </form>
  );
};
