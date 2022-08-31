import React from 'react'
import { UserChatBox } from './UserChatBox'

export const UserChatBoxList = () => {
  return (
    <div className='my-6'>
        <UserChatBox content={"Hi Jenny ..."} time = {"20:00"}/>
        <UserChatBox content={"My name is Adam, I am 24 years old. It seems like we have a lot of similarities and attraction to each other. Can I know you a bit more? 😁"} time = {"20:00"}/>
    </div>
  )
}
