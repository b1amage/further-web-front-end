import React from 'react'
import { KeyboardButton } from './KeyboardButton'
import removedButton from '../../assets/svg/removedButton.svg'
import clear from '../../assets/svg/clear.svg'

export const Keyboard = () => {
  return (
    <div className='flex flex-wrap justify-between bg-gray3 relative bottom-0 backdrop-blur-[70px] md:mx-32 lg:mx-52'>
        <KeyboardButton type="button" value="1" />
        <KeyboardButton type="button" value="2" />
        <KeyboardButton type="button" value="3" />
        <KeyboardButton type="button" value="4" />
        <KeyboardButton type="button" value="5" />
        <KeyboardButton type="button" value="6" />
        <KeyboardButton type="button" value="7" />
        <KeyboardButton type="button" value="8" />
        <KeyboardButton type="button" value="9" />
        <div className="w-1/3 my-1 flex justify-center text-center">
            <button className="flex justify-center items-center rounded-[5px] bg-white  w-[135px] h-[46px]"> <img src={clear} alt="removed-button"/> </button>
        </div>
        <KeyboardButton type="button" value="0" />
        <div className="w-1/3 my-1 flex justify-center text-center">
            <button className="flex justify-center items-center rounded-[5px] bg-white  w-[135px] h-[46px]"> <img src={removedButton} alt="removed-button"/> </button>
        </div>
        
        <div className='underline w-full flex justify-center'>
          <div className='w-[135px] h-[5px] bg-black rounded-[5px] mt-[65px] mb-2'></div>
        </div>
        
    </div>
  )
}
