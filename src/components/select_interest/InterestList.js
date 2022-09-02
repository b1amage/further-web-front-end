import React from "react";
import { Interest } from "./Interest";

export const InterestList = ({array, onChange}) => {
  return (
    <div className="flex flex-wrap gap-4 overflow-y-scroll md:justify-center">
      {array.map((interest, index) => {
        return <Interest title={interest} className={`!w-fit rounded-[100px]`} key={index} onChange={onChange}/>
      })}
    </div>
  );
};
