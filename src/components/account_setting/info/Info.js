import React from 'react'
import { Link } from 'react-router-dom'
import girl from "../../../assets/img/girl.png"
import edit from "../../../assets/svg/circleEditButton.svg"
export const Info = () => {
  return (
    <div className='mt-6 w-full text-center'>
      <div className="w-fit mx-auto relative">
        <img src={girl} alt="undefined" className={'w-[120px] h-[120px] rounded-[64px]'}/>
        <Link to={"/account"} className="absolute bottom-0 right-0"> <img src={edit} alt="edit"/> </Link>
      </div>
      <h1 className="w-full text-center my-3 font-semibold text-[26px]">Kyle's Wife</h1>
    </div>
  )
}
