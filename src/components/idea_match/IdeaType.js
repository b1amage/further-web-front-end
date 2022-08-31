import React from 'react'

export const IdeaType = ({id, icon, type, onChangeType, iconClassName, className}) => {
  return (
    <div>
      <input type={"radio"} name="type" id={id} className="hidden peer" value={id} onChange={e => onChangeType(e)}/>
      <label htmlFor={id} className={`flex flex-col justify-center items-center text-left bg-white rounded-[20px] border border-gray peer-checked:border-primary-100 ${className} w-[200px] h-[200px]`}>
        <div className={`!mx-0 w-[80px] h-[80px] inline-flex justify-center items-center rounded-full bg-primary-100 bg-opacity-10 ${iconClassName}`}>
          <img src={icon} alt={`${icon}`} />
        </div>
        <div className="mx-0 my-2 text-center">
          <span className=" text-black text-lg font-semibold">{type}</span>
        </div>
      </label>
    </div>
  )
}
