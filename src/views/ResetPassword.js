import React from 'react'
import { DisplaySvg } from '../components/forgot_password/DisplaySvg'
import { HeaderPassword } from '../components/forgot_password/HeaderPassword'
import { ResetPasswordForm } from '../components/reset_password/ResetPasswordForm'
import resetPasswordFrame from '../assets/svg/resetPasswordFrame.svg'
export const ResetPassword = () => {
  return (
    <div className='mx-6 mt-7 md:mx-32 lg:mx-60'>
        <HeaderPassword  name="Reset Password"/>
        <DisplaySvg svg={resetPasswordFrame}/>
        <ResetPasswordForm />
    </div>
  )
}
