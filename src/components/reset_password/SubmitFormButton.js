import React from 'react'

export const SubmitFormButton = ({name}) => {
  return (
    <button
      className={`w-full h-[55px] rounded-[32px] bg-gradient-to-l from-primary-100 to-primary-50 text-white font-semibold font-sourceSansPro text-lg`}
      type="submit"
    >
      {name}
    </button>
  )
}
