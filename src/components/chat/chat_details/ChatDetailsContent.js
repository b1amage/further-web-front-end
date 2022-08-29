import React from 'react'
import { OpponentChatBoxList } from './opponent/OpponentChatBoxList'
import { UserChatBoxList } from './user/UserChatBoxList'


export const ChatDetailsContent = ({date}) => {
  return (
    <div className='px-[24px] h-full overflow-y-scroll'>
        <div className='text-center'>
            <h1 className='inline-block px-3 py-2 bg-gray rounded-[8px]'>{date}</h1>
        </div>
        <UserChatBoxList />
        <OpponentChatBoxList />
    </div>
  )
}
