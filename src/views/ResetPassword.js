import React from 'react'
import { DisplaySvg } from '../components/forgot_password/DisplaySvg'
import { HeaderPassword } from '../components/forgot_password/HeaderPassword'
import { ResetPasswordForm } from '../components/reset_password/ResetPasswordForm'
import resetPasswordFrame from '../assets/svg/resetPasswordFrame.svg'
export const ResetPassword = () => {
  return (
    <div className='mx-6 mt-7 sm:mx-[100px] md:mx-[200px] lg:mx-[350px]'>
        <HeaderPassword  name="Reset Password" path={-1}/>
        <DisplaySvg svg={resetPasswordFrame}/>
        <ResetPasswordForm />
    </div>
  )
}
