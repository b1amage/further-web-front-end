import React from 'react'
import { OtpBox } from './OtpBox'

export const OtpContainer = () => {
  return (
    <div className='flex gap-4 justify-between my-[60px]'>
        <OtpBox borderColor={`bg-gradient-to-l from-primary-100 to-primary-50`}/>
        <OtpBox borderColor={`bg-gradient-to-l from-primary-100 to-primary-50`}/>
        <OtpBox borderColor={`border border-gray`}/>
        <OtpBox borderColor={`border border-gray`}/>
    </div>
  )
}
