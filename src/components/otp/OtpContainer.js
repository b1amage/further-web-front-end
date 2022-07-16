import React from 'react'
import { OtpBox } from './OtpBox'

export const OtpContainer = () => {
  return (
    <div className='flex gap-4 justify-between my-[60px]'>
        <OtpBox />
        <OtpBox />
        <OtpBox />
        <OtpBox />
    </div>
  )
}
