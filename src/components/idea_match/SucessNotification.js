import React from 'react'
import { useNavigate } from 'react-router-dom'
import createSucess from '../../assets/svg/create-sucess.svg'
import SectionTitle from '../../utilities/SectionTitle'
import { Button } from '../forgot_password/Button'
export const SucessNotification = ({display}) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full h-screen flex-col justify-center items-center px-8 bg-black/70 absolute top-0 z-50 ${display ? 'flex' : 'hidden'}`}>
        <div className='bg-white w-full h-[460px] flex flex-col items-center px-6 rounded-[24px]'>
            <img src={createSucess} alt='notification' className='my-8'/>
            <div className='h-full text-center leading-10'>
                <SectionTitle children={"Great!"} className='text-primary-100 inline-block'/>
                <SectionTitle children={"Your account has been created successfully"} className='text-primary-100 inline-block'/>
            </div>
            
            <div className='w-full h-full flex items-center'>
                <Button name={"Go to Home"}  className={'!mt-0 !mb-0'} handleClick={() => navigate("/")}/>
            </div>
        </div>
    </div>
  )
}
