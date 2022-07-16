import React, { useState } from "react";
import forgotPassword from "../assets/svg/forgotPassword.svg";
import chat from "../assets/svg/chat.svg";
import { Button } from "../components/forgot_password/Button";
import { Type } from "../components/forgot_password/Type";
import { HeaderPassword } from "../components/forgot_password/HeaderPassword";
import { DisplaySvg } from "../components/forgot_password/DisplaySvg";
export const ForgotPasswordPage = () => {
  const [buttons, setButtons] = useState({
    activeButton: null,
    buttonList: [
      { type: "sms", value: "+6282******39", name: "SMS", icon: chat },
      {
        type: "email",
        value: "ex***le@yourdomain.com",
        name: "Email",
        icon: chat,
      },
    ],
  });

  const onClickButton = (index) => {
    setButtons({ ...buttons, activeButton: buttons.buttonList[index] });
  };

  const activeButtonStyle = (index) => {
    if (buttons.activeButton === buttons.buttonList[index]) {
      return "border-2 border-primary-100";
    } else {
      return "border border-gray";
    }
  };

  return (
    <div>
      <div className="px-6 mt-7 w-full h-screen md:px-32 lg:px-60">
        <HeaderPassword id={`forgot-password`} name={`Forgot Password`} />

        <DisplaySvg svg={forgotPassword} />

        <div className="my-6">
          <span>
            Select which contact details should we use to reset your password
          </span>
        </div>

        {buttons.buttonList.map((btn, index) => {
          return (
            <Type
              key={index}
              index={index}
              type={btn.type}
              button={btn}
              value={btn.value}
              name={btn.name}
              icon={btn.icon}
              onClickButton={onClickButton}
              activeButtonStyle={activeButtonStyle}
            />
          );
        })}
        {buttons.activeButton !== null ? (
          <Button name={`Continue`} path="/forgot_password/otp" />
        ) : (
          <Button name={`Continue`} path="/forgot_password" />
        )}
      </div>
    </div>
  );
};
