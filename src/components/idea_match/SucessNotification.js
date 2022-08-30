import React from 'react'
import createSucess from '../../assets/svg/create-sucess.svg'
import SectionTitle from '../../utilities/SectionTitle'
import { Button } from '../forgot_password/Button'
export const SucessNotification = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center px-8 bg-black/70'>
        <div className='bg-white w-full h-[460px] flex flex-col items-center px-6 rounded-[24px]'>
            <img src={createSucess} alt='notification' className='my-8'/>
            <div className='h-full text-center leading-10'>
                <SectionTitle children={"Great!"} className='text-primary-100 inline-block'/>
                <SectionTitle children={"Your account has been created successfully"} className='text-primary-100 inline-block'/>
            </div>
            
            <div className='w-full h-full flex items-center'>
                <Button name={"Go to Home"}  className={'!mt-0 !mb-0'}/>
            </div>
        </div>
    </div>
  )
}
