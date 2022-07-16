import React from 'react'
import { HeaderPassword } from '../components/forgot_password/HeaderPassword'
import { Keyboard } from '../components/keyboard/Keyboard'
import { Main } from '../components/otp/Main'

export const TypeOtp = () => {
  return (
    <div className='w-full h-screen'>
        <div className="mx-6 mt-7 md:mx-44 lg:mx-64">
            <HeaderPassword id={`forgot-password`} name={`Forgot Password`}/>
            <Main />
        </div>
        <Keyboard />
    </div>
  )
}
