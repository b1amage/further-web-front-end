import React from 'react'
import { ChatDetailsContent } from '../components/chat/chat_details/ChatDetailsContent'
import { ChatHeader } from '../components/chat/chat_details/ChatHeader'
import { ChatFooter } from '../components/chat/chat_details/ChatFooter'
export const ChatDetails = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
        <ChatHeader />
        <ChatDetailsContent date={"Today"} />
        <ChatFooter />
    </div>
  )
}
