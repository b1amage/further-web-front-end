import React from 'react'
import { ResendOTP} from "otp-input-react";

export const TimeResend = () => {
  const resendButton = (buttonProps) => {
    return <button {...buttonProps}>Resend code {buttonProps.remainingTime !== 0 ? <label>in <span className='text-primary-100'>{buttonProps.remainingTime}</span> sec</label> : <span className='text-primary-100'>Resend</span>}  </button> 
  }

  const renderTime = () => React.Fragment;
  return (
    <div className='text-center'>
        {/* <p>Resend code {time > 0 ? <label>in <span className='text-primary-100'>{time}</span> s</label>: <button onClick={tryAgainButton} className="text-primary-100">Try Again</button>} </p>  */}
        <ResendOTP onResendClick={() => console.log("Resend clicked")} renderButton={resendButton} renderTime={renderTime} className="!flex !justify-center !items-center"/>
    </div>
  )
}
