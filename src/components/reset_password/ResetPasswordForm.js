import React, { useState } from "react";
import { RememberPwd } from "./RememberPwd";
import { SubmitFormButton } from "./SubmitFormButton";
import { useNavigate, useParams } from "react-router-dom";
import { InputBox } from "./InputBox";
export const ResetPasswordForm = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const {place} = useParams()
  const [newPwd, setNewPwd] = useState("")
  const [confirmPwd, setConfirmPwd] = useState("")
  const [error, setError] = useState("")
  const onChangeNewPassword = (e) => {
    setNewPwd(e.target.value)
  }

  const onChangeConfirmPassword = (e) => {
    setConfirmPwd(e.target.value)
  }

  const navigate = useNavigate()

  const validatePassword = (e) => {
    e.preventDefault()
    if (newPwd.length < 8){
      setError("* Password must have at least 8 characters")
    } else{
      if (newPwd.length > 20){
        setError("* Password length must not longer than 20 characters")
      } else{
        if (!passwordRegex.test(newPwd)){
          setError("* Invalid password")
        } else{
          if (newPwd !== confirmPwd){
            setError("* Invalid password")
          } else{
            navigate(`/forgot_password/otp/${place}/reset_password/notification`)
          }
        }
      }
    }
  };

  return (
    <div className="mt-[60px]">
      <form onSubmit={validatePassword}>
        <h1 className="font-bold text-[29px]">Create a new password</h1>
        <InputBox id="new-pwd" name="new_pwd" title="New Password" value={newPwd} handleOnChange={onChangeNewPassword}/>
        <InputBox id="confirm-pwd" name="confirm_pwd" title="Confirm New Password" value={confirmPwd} handleOnChange={onChangeConfirmPassword}/>

        <RememberPwd />
        
        <div className="mt-[50px] mb-5">
          {error && <span className="text-required mx-5 py-3 inline-block">{error}</span>}
          <SubmitFormButton name={"Save"} />
        </div>
      </form>
    </div>
  );
};
