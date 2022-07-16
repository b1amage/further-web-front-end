import React from 'react'

export const KeyboardButton = ({type, value}) => {
  return (
    <div className='w-1/3 my-1 text-center'>
        <input type={type} value={value} className="w-[135px] h-[46px] text-black bg-white rounded-[5px] cursor-pointer"/>
    </div>
  )
}
