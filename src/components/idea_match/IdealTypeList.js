import React from 'react'
import { IdeaType } from './IdeaType'
import { idealTypes } from '../../content/idealTypeMatch'
export const IdealTypeList = ({onChangeType}) => {
   
  return (
    <div className='w-full flex flex-wrap gap-5 h-fit px-6 md:justify-center'>
        {idealTypes.map((ideal, index) => {
          return <IdeaType icon={ideal.icon} type={ideal.type} id={ideal.id} onChangeType={onChangeType} key={index} />
        })}
    </div>
  )
}
