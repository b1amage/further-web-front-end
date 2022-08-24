import React from 'react'
import { Main } from '../components/account_setting/body/Main'
import { Footer } from '../components/account_setting/footer/Footer'
import { Header } from '../components/account_setting/header/Header'
import logo from '../assets/svg/logo.svg'

export const AccountSetting = () => {
  return (
    <div className='p-6'>
        <Header img={logo} title={'Profile'}/>
        <Main />
        <Footer />
    </div>
  )
}
