import React from 'react'

export const OtpBox = ({borderColor}) => {
  return (
    <div className={`${borderColor} p-px rounded-[10px] w-[83px] h-[68px] flex justify-center items-center box-border`}>
        <input className="opt-field rounded-[9px] w-full h-full bg-white text-center outline-none font-semibold text-[29px]" type="text" pattern="\d*" maxLength="1"/>
    </div>
  )
}
