import React from 'react'
import { Button } from '../forgot_password/Button'
import { InterestList } from './InterestList'
import { SelectedList } from './SelectedList'

export const SelectedInterestForm = ({onSubmit, array, selectedList, onChangeRemoveSelect,onChangeSelect, error}) => {
  return (
    <form onSubmit={onSubmit} className="h-full md:w-1/2">
        <div className='h-full px-6 py-5'>
          <InterestList array={array} onChange={onChangeSelect} />
        </div>
        <div className='inline-flex w-full h-fit box-border px-6 py-10 gap-4 flex-wrap border-t border-t-gray overflow-y-scroll'>
            <SelectedList array={selectedList} onChange={onChangeRemoveSelect} />
        </div>
        <span className='text-required mx-6 my-2'>{error}</span>
        <div className="pt-2 pb-[40px] px-6 h-fit w-full inline-flex items-center border-t border-t-gray rounded-t-[24px]">
          <Button name={"Next"} className={`!mt-4 md:w-[500px] mx-auto sm:w-[400px]`} type={"submit"}/>
        </div>
    </form>
  )
}
