import React from 'react'
import { UserChatBox } from './UserChatBox'

export const UserChatBoxList = ({chatContent}) => {
  return (
    <div className='my-6'>
        {chatContent.map((chat, index) => {
          return <UserChatBox content={chat.content} time={chat.createdAt} key={index}/>
        })}
        {/* <UserChatBox content={"Hi Jenny ..."} time = {"20:00"}/>
        <UserChatBox content={"My name is Adam, I am 24 years old. It seems like we have a lot of similarities and attraction to each other. Can I know you a bit more? 😁"} time = {"20:00"}/> */}
    </div>
  )
}
