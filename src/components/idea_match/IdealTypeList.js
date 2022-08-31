import React from 'react'
import { IdeaType } from './IdeaType'
import heart from '../../assets/svg/heart.svg'
import friends from '../../assets/svg/friends.svg'
import fling from '../../assets/svg/fling.svg'
import business from '../../assets/svg/business.svg'
export const IdealTypeList = ({onChangeType}) => {
   
  return (
    <div className='w-full flex flex-wrap gap-5 h-full'>
        <IdeaType icon={heart} type={"Love"} id={"love"} onChangeType={onChangeType}/>
        <IdeaType icon={friends} type={"Friends"} id={"friends"} onChangeType={onChangeType}/>
        <IdeaType icon={fling} type={"Fling"} id={"fling"} onChangeType={onChangeType}/>
        <IdeaType icon={business} type={"Business"} id={"business"} onChangeType={onChangeType}/>
    </div>
  )
}
