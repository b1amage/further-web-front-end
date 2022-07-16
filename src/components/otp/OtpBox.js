import React, { useState } from 'react'

export const OtpBox = ({borderColor}) => {
  const [isClicked, setIsClicked] = useState(false)
  const handleOtpBox = () => {
    setIsClicked(state => !state)
  }
  return (
    <div className={`${isClicked ? "border border-primary-100" : "border border-gray"} p-px rounded-[10px] w-[83px] h-[68px] flex justify-center items-center box-border`}>
        <input className="opt-field rounded-[9px] w-full h-full bg-white text-center outline-none font-semibold text-[29px] text-black" type="text" pattern="\d*" maxLength="1" onClick={handleOtpBox}/>
    </div>
  )
}
