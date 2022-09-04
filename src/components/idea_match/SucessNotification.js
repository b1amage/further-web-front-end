import React from 'react'
import { useNavigate } from 'react-router-dom'
import createSucess from '../../assets/svg/create-sucess.svg'
import SectionTitle from '../../utilities/SectionTitle'
import { Button } from '../forgot_password/Button'
export const SucessNotification = ({display}) => {
  const navigate = useNavigate()
  return (
    <div className={`w-full h-screen flex-col justify-center items-center px-8 sm:px-[100px] md:px-[200px] bg-black/70 fixed top-0 z-50 ${display ? 'flex' : 'hidden'}`}>
        <div className='bg-white w-full h-[460px] flex flex-col items-center px-10 rounded-[24px]'>
            <img src={createSucess} alt='notification' className='my-8'/>
            <div className='h-full text-center leading-10 flex flex-col'>
                <SectionTitle children={"Great!"} className='text-primary-100 font-semibold inline-block'/>
                <SectionTitle children={"Your account has been created successfully"} className='text-primary-100 font-semibold inline-block'/>
            </div>
            
            <div className='w-full h-full flex items-center'>
                <Button name={"Go to Home"}  className={'!mt-0 !mb-0'} handleClick={() => navigate("/")}/>
            </div>
        </div>
    </div>
  )
}
