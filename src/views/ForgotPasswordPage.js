import React, { useState } from "react";
import forgotPassword from "../assets/svg/forgotPassword.svg";
import chat from "../assets/svg/chat.svg";
import email from "../assets/svg/email.svg";
import { Button } from "../components/forgot_password/Button";
import { Type } from "../components/forgot_password/Type";
import { HeaderPassword } from "../components/forgot_password/HeaderPassword";
import { DisplaySvg } from "../components/forgot_password/DisplaySvg";
export const ForgotPasswordPage = () => {
  const [selectedType, setSelectedType] = useState(null)
  const onChangeType = (e) => {
    setSelectedType(e.target.value)
  }

  return (
    <div>
      <div className="px-6 mt-7 w-full h-screen sm:px-[100px] md:px-[200px] lg:px-[350px]">
        <HeaderPassword name={`Forgot Password`} />

        <DisplaySvg svg={forgotPassword} />

        <div className="my-6">
          <span>
            Select which contact details should we use to reset your password
          </span>
        </div>

        <div>
          <Type id={"+6282******39"} icon={chat} type={"SMS"} onChangeType={onChangeType}/>
          <Type id={"ex***le@yourdomain.com"} icon={email} type={"Email"} onChangeType={onChangeType}/>
        </div>

        <div>
          {selectedType ? (
            <Button name="Continue" path={`/forgot_password/otp/${selectedType}`} />
          ) : (
            <Button name="Continue" path="/forgot_password" />
          )} 
        </div>
      </div>
    </div>
  );
};
