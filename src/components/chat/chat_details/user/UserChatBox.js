import React from 'react'

export const UserChatBox = ({ content, time, date}) => {
  return (
    <div className='w-full inline-flex justify-end'>
      <div className='w-3/5 text-right inline-flex justify-end h-auto py-[12px]'>
        <div>
          <div className='py-4 flex w-fit text-left text-white bg-gradient-to-r from-primary-50 to-primary-100 rounded-l-[16px] rounded-br-[16px]'>
            <p className='w-fit break-all flex items-end px-6'>{content}</p> 
            <p className="flex items-end text-sm mx-3">{time}</p>
          </div>
          <span className='my-1 inline-block text-sm'>{date}</span>
        </div>
        
      </div>
    </div>

  )
}
