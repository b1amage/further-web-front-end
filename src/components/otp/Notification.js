import React from 'react'
import { useParams } from 'react-router-dom'

export const Notification = () => {
  const {place} = useParams()
  return (
    <div className='text-center'>
        <span>Code has been send to {place}</span>
    </div>
  )
}
