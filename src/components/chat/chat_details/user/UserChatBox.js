import React from 'react'

export const UserChatBox = ({ content, time }) => {
  return (
    <div className='w-full inline-flex justify-end'>
      <div className='w-3/5 h-auto py-[12px] inline-flex justify-end text-white'>
        <span className='w-fit break-all bg-gradient-to-r from-primary-50 to-primary-100 rounded-l-[16px] rounded-br-[16px] px-6 py-4 inline-block'>{content}</span>
      </div>
    </div>

  )
}
