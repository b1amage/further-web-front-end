import React from 'react'

export const UserChatBox = ({content, time}) => {
  return (
    <div className='my-3 ml-[40px] h-auto bg-gradient-to-r from-primary-50 to-primary-100 py-[12px] flex justify-between px-6 rounded-l-[16px] rounded-br-[16px] text-white items-end'>
      <span className='pr-5'>{content}</span>
      <span>{time}</span>
    </div>
  )
}
