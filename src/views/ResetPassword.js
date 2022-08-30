import React from 'react'
import { DisplaySvg } from '../components/forgot_password/DisplaySvg'
import { ResetPasswordForm } from '../components/reset_password/ResetPasswordForm'
import resetPasswordFrame from '../assets/svg/resetPasswordFrame.svg'
import Header from '../components/header/Header'
export const ResetPassword = () => {
  return (
    <div className='mx-6 mt-7 sm:mx-[100px] md:mx-[200px] lg:mx-[350px]'>
        <Header title={"Forgot Password"} />
        <DisplaySvg svg={resetPasswordFrame}/>
        <ResetPasswordForm />
    </div>
  )
}
