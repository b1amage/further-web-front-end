import React from 'react'
import { Interest } from './Interest';

export const SelectedList = ({array, onChange}) => {
  return (
    <>
        {array.map((selectedInterest, index) => {
          return (
            <Interest
              title={selectedInterest}
              key={index}
              isActive={true}
              className={`!w-fit !h-fit rounded-[100px] !text-base`}
              onChange={(e) => onChange(e)}
            />
          );
        })}
    </>
  )
}
