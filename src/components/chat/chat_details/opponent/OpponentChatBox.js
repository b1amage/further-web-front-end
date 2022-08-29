import React from 'react'

export const OpponentChatBox = ({content, time}) => {
  return (
    <div className='my-3 mr-[40px] py-[12px] bg-gray flex justify-between px-6 rounded-r-[16px] rounded-bl-[16px] text-black items-end'>
        <span className='pr-2'>{content}</span>
        <span>{time}</span>
    </div>
  )
}
