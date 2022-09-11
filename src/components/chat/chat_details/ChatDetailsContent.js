import React from 'react'
import { OpponentChatBox } from './opponent/OpponentChatBox'
import { UserChatBox } from './user/UserChatBox'

export const ChatDetailsContent = ({date, chatContent}) => {
  return (
    <div className='px-[24px] h-full overflow-y-scroll'>
        <div className='text-center'>
            <h1 className='inline-block px-3 py-2 bg-gray rounded-[8px]'>{date}</h1>
        </div>
        
        {chatContent.map((chat, index) => {
          if (chat.user === JSON.parse(localStorage.getItem("user")).userId){
            return <UserChatBox content={chat.content} key={index}/>
          } else{
            return <OpponentChatBox content={chat.content} key={index}/>
          }
        })}
    </div>
  )
}
