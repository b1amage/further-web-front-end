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
      <div className="px-6 mt-7 w-full h-screen md:px-32 lg:px-60">
        <HeaderPassword id={`forgot-password`} name={`Forgot Password`}/>

        <DisplaySvg svg={forgotPassword}/>

        <div className="my-6">
          <span>
            Select which contact details should we use to reset your password
          </span>
        </div>

        <Type type={`sms`} value={`+6282******39`} name={`SMS`} icon={chat}/>

        <Type type={`email`} value={`ex***le@yourdomain.com`} name={`Email`} icon={chat}/>
        <Button name={`Continue`}/>
        
      </div>
    </div>
  );
};
