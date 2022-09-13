import React from 'react'

export const UserChatBox = ({ content, time }) => {
  return (
    <div className='w-full h-auto inline-flex justify-end'>
      <div className='md:w-1/3 w-3/4 h-auto py-[12px] inline-flex justify-end text-white'>
        <span className='pr-5 break-words bg-gradient-to-r from-primary-50 to-primary-100 rounded-l-[16px] rounded-br-[16px] px-4 w-full py-6  inline-block'>{content}</span>
      </div>
    </div>

  )
}
