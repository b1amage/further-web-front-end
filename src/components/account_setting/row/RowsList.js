import React from 'react'
import { RowFeature } from './RowFeature'
import profile from "../../../assets/svg/profile.svg"
import next from "../../../assets/svg/next.svg"
import { DarkModeRow } from './DarkModeRow'
import lock from "../../../assets/svg/lock.svg"
import eye from "../../../assets/svg/eyes.svg"
import friends from "../../../assets/svg/friends.svg"
import bell from "../../../assets/svg/bell.svg"
import logout from "../../../assets/svg/logout.svg"
import { LogoutRow } from './LogoutRow'


export const RowsList = () => {
  return (
    <div className={'px-6'}>
      <RowFeature icon={profile} title={"Edit profile"} buttonIcon={next}/>
      <RowFeature icon={bell} title={"Notification"} buttonIcon={next}/>
      <RowFeature icon={lock} title={"Security"} buttonIcon={next}/>
      {/* <RowFeature icon={profile} title={"Dark Mode"} buttonIcon={next}/> */}
      <DarkModeRow icon={eye} title={"Dark Mode"}/>
      <RowFeature icon={friends} title={"Invite Friend"} buttonIcon={next}/>
      <LogoutRow icon={logout} title={"Logout"}/>
    </div>
  )
}
