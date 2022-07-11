import React from "react";
import { Notification } from './Notification'
import { OtpContainer } from './OtpContainer'
import { TimeResend } from './TimeResend'

export const Main = () => {
  return (
    <main className="main">
        <div className="mt-[240px] mb-[47.5px]">
            <Notification place="+6282******39" />
            <OtpContainer />
            <TimeResend time="56" />
        </div>
      
    </main>
  );
};
