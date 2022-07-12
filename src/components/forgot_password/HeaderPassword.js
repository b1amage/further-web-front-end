import React from 'react'
import back from '../../assets/svg/back.svg'
export const HeaderPassword = ({name}) => {
  return (
    <header className='header'>
        <div className="flex mt-1 mb-6">
          <img src={back} alt="back-button" className="cursor-pointer"/>
          <span className="mx-6 font-semibold text-[26px] font-sourceSansPro">
            {name}
          </span>
        </div>
    </header>
  )
}
