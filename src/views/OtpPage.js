import React from 'react'
import { HeaderPassword } from '../components/forgot_password/HeaderPassword'
import { Main } from '../components/otp/Main'

export const OtpPage = () => {
  return (
    <div className='w-full h-screen'>
        <div className="mx-6 mt-7 sm:mx-[100px] md:mx-[200px] lg:mx-[350px]">
            <HeaderPassword name={`Forgot Password`} path={-1}/>
            <Main/>
        </div>
    </div>
  )
}
