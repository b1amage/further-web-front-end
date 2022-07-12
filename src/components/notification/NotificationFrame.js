import React from 'react'
import { DisplaySvg } from '../forgot_password/DisplaySvg'
import notification from "../../assets/svg/notification.svg";
import { Button } from '../forgot_password/Button';

export const NotificationFrame = () => {
  return (
    <>
        <DisplaySvg svg={notification}/>
        <h1 className="text-center mt-6 text-primary-100 text-[32px]">Congratulations!</h1>
        <p className="text-center mt-3.5 text-lg">Your account is ready to use</p>
        <Button name="Go to Homepage"/>
    </>
  )
}
