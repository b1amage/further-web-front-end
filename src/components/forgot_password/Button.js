import React from 'react'

export const Button = ({name}) => {
  return (
    <button className={`w-full h-[55px] mt-[80px] mb-5 rounded-[32px] bg-gradient-to-l from-primary-100 to-primary-50 text-white font-semibold font-sourceSansPro text-lg`}>
        {name}
    </button>
  )
}
