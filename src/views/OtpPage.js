import React from 'react'
import Header from '../components/header/Header'
import { Main } from '../components/otp/Main'

export const OtpPage = () => {
  return (
    <div className='w-full h-screen'>
        <div className="mx-6 mt-7 sm:mx-[100px] md:mx-[200px] lg:mx-[350px]">
            <Header title={"Forgot Password"} />
            <Main/>
        </div>
    </div>
  )
}
