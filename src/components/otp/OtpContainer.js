import React from "react";
import OTPInput from "otp-input-react";

export const OtpContainer = ({OTP, setOTP}) => {
  return (
    <div className=" gap-4  my-[60px] w-full">      
        <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" secure inputClassName="otp-field !w-[83px] !h-[68px] border border-gray rounded-[20px] text-[29px] outline-primary-100 !m-0" className="w-full flex justify-between gap-4"/>
    </div>
  );
};
