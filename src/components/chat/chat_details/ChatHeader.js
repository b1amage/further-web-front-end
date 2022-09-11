import React from 'react'
import Header from '../../header/Header'
import NavButton from '../../navbar/NavButton'
import chatPhone from '../../../assets/svg/chat-phone.svg'
import videoCall from '../../../assets/svg/video-call.svg'
export const ChatHeader = ({opponent}) => {
  return (
    <header className='px-[24px] flex justify-between items-center'>
        <Header title={opponent} />
        <div className='flex items-center gap-4 my-[24px]'>
            <NavButton isActive={false} children={<img src={chatPhone} alt='phone' />} className='!w-[44px] !h-[44px]'/>
            <NavButton isActive={false} children={<img src={videoCall} alt='phone' />} className='!w-[44px] !h-[44px]'/>
        </div>
    </header>
  )
}
