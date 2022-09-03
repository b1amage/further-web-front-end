import React from 'react'
import { Button } from '../forgot_password/Button'
import { InterestList } from './InterestList'
import { SelectedList } from './SelectedList'

export const SelectedInterestForm = ({onSubmit, array, selectedList, onChangeRemoveSelect,onChangeSelect, error}) => {
  return (
    <form onSubmit={onSubmit} className="h-full">
        <div className='md:h-1/2 h-3/5 px-6 py-5 md:mb-5 lg:mb-1 md:py-3'>
          <InterestList array={array} onChange={onChangeSelect} />
        </div>
        <div className='inline-flex w-full md:h-1/5 h-2/5 my-10 md:my-0 px-6 md:mt-4 mt-8 py-5 gap-4 flex-wrap border-t border-t-gray overflow-y-scroll'>
            <SelectedList array={selectedList} onChange={onChangeRemoveSelect} />
        </div>
        <span className='text-required mx-6 my-2'>{error}</span>
        <div className="pt-2 pb-[40px] px-6 h-fit w-full inline-flex items-center border-t border-t-gray rounded-t-[24px]">
          <Button name={"Next"} className={`!mt-5 md:w-[500px] mx-auto sm:w-[400px]`} type={"submit"}/>
        </div>
    </form>
  )
}
