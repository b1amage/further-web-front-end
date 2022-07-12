import React from "react";
import { RememberPwd } from "./RememberPwd";
import {Button} from "../forgot_password/Button"
import { InputBox } from "./InputBox";
export const ResetPasswordForm = () => {
  return (
    <div className="mt-[60px]">
      <form action="">
        <h1 className="font-bold text-[29px]">Create a new password</h1>
        <InputBox id="new-pwd" name="new_pwd" title="New Password"/>
        <InputBox id="confirm-pwd" name="confirm_pwd" title="Confirm New Password"/>
        <RememberPwd />
        <Button name="Save"/>
      </form>
    </div>
  );
};
