import React from 'react'
import Button from '../../utilities/Button'

export const InterestList = () => {
  return (
    <div className='flex flex-wrap gap-4'>
        <Button children={"🎮 Gaming"} value={"Gaming"} className={`!w-fit rounded-[100px] border border-primary-100`} primary={true}/>
        <Button children={"💃🏻 Dancing"} value={"Dancing"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"🗣 Language"} value={"Language"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"🎵 Music"} value={"Music"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"🎬 Movie"} value={"Movie"} className={`!w-fit rounded-[100px] border border-primary-100`} primary={true}/>
        <Button children={"📸 Photography"} value={"Photography"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"👗 Fashion"} value={"Fashion"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"📚 Book"} value={"Book"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"✍🏻 Writing"} value={"Writing"} className={`!w-fit rounded-[100px] border border-primary-100`} primary={true}/>
        <Button children={"⚽️ Football"} value={"Football"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"💪 Gym & Fitness"} value={"Gym & Fitness"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
        <Button children={"🍔 Food & Drink"} value={"Food & Drink"} className={`!w-fit rounded-[100px] border border-primary-100`} secondary={true}/>
    </div>
  )
}
