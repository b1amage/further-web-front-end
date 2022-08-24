import React from 'react'
export const RowFeature = ({icon, title, buttonIcon, func}) => {
  return (
    <div className={`w-full flex items-center border-t border-t-gray py-3`}>
      <div className={'bg-primary-100/10 w-[56px] h-[56px] flex justify-center items-center rounded-[100px]'}>
        <img src={icon} alt="undefined" className=""/>
      </div>
      <h1 className={"w-[300px] px-4 text-left font-semibold"}>{title}</h1>
      <button onClick={func} className={"w-[44px] flex justify-end items-center"}> <img src={buttonIcon} alt="undefined"/> </button>
    </div>
  )
}
