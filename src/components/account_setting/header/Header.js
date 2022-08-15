import React from 'react'
import pen from '../../../assets/svg/pen.svg'
import setting from '../../../assets/svg/setting.svg'
export const Header = ({img, title}) => {
  return (
    <div className='flex justify-between px-6'>
        <div className='flex items-center'>
            <div className='w-9 h-9 bg-gradient-to-r from-primary-100 to-primary-50 flex justify-center items-center rounded-[36px] cursor-pointer'>
                <img src={img} alt={img}/>
            </div>
            <h1 className='font-semibold mx-5 text-[26px]'>{title}</h1>
        </div>

        <div className='flex gap-2.5'>
            <div className='flex justify-center items-center w-11 h-11 rounded-[12px] bg-primary-100/10 cursor-pointer'>
                <img src={pen} alt={pen}/>
            </div>

            <div className='flex justify-center items-center w-11 h-11 rounded-[12px] bg-primary-100/10 cursor-pointer'>
                <img src={setting} alt={setting}/>
            </div>
        </div>
    </div>
  )
}
