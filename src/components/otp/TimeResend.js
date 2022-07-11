import React from 'react'

export const TimeResend = ({time}) => {
  return (
    <div className='text-center'>
        <p>Resend code in <span className='text-primary-100'>{time}</span> s</p> 
    </div>
  )
}
