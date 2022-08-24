import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { Notification } from './Notification'
import { OtpContainer } from './OtpContainer'
import { TimeResend } from './TimeResend'
import { VerifyButton } from "./VerifyButton";

export const Main = () => {
  const {place} = useParams()
  const [OTP, setOTP] = useState("");
  return (
    <main className="main">
        <div className="mt-[240px] mb-[47.5px]">
            <Notification place={place}/>
            <OtpContainer OTP={OTP} setOTP={setOTP}/>
            <TimeResend />
            {OTP.length === 0 ? "" : OTP.length === 4 ? <VerifyButton name={"Verify"} place={place} data={OTP}/> : ""}
        </div>
      
    </main>
  );
};
