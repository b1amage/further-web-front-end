import React from "react";
import forgotPassword from "../assets/svg/forgotPassword.svg";
import chat from "../assets/svg/chat.svg";
import { Button } from "../components/forgot_password/Button";
import { Type } from "../components/forgot_password/Type";
import { HeaderPassword } from "../components/forgot_password/HeaderPassword";
import { DisplaySvg } from "../components/forgot_password/DisplaySvg";
export const ForgotPasswordPage = () => {
  return (
    <div>
      <div className="mx-6 mt-7">
        <HeaderPassword id={`forgot-password`} name={`Forgot Password`}/>

        <DisplaySvg svg={forgotPassword}/>

        <div className="my-6">
          <span>
            Select which contact details should we use to reset your password
          </span>
        </div>

        <Type borderColor={`bg-gradient-to-l from-primary-100 to-primary-50`} type={`sms`} value={`+6282******39`} name={`SMS`} icon={chat}/>

        <Type borderColor={`border border-gray`} type={`email`} value={`ex***le@yourdomain.com`} name={`Email`} icon={chat}/>
        <Button name={`Continue`}/>
        
      </div>
    </div>
  );
};
