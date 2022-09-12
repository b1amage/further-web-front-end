import React from "react";
import { RememberPwd } from "./RememberPwd";
import { SubmitFormButton } from "./SubmitFormButton";

import { InputBox } from "./InputBox";

export const ResetPasswordForm = ({
	validatePassword,
	newPwd,
	onChangeNewPassword,
	confirmPwd,
	onChangeConfirmPassword,
	error,
}) => {
	return (
		<div className="mt-[60px]">
			<form onSubmit={validatePassword}>
				<h1 className="font-bold text-[29px]">Create a new password</h1>
				<InputBox
					id="new-pwd"
					name="new_pwd"
					title="New Password"
					value={newPwd}
					handleOnChange={onChangeNewPassword}
				/>
				<InputBox
					id="confirm-pwd"
					name="confirm_pwd"
					title="Confirm New Password"
					value={confirmPwd}
					handleOnChange={onChangeConfirmPassword}
				/>

				<RememberPwd />

				<div className="mt-[50px] mb-5">
					{error && (
						<span className="inline-block py-3 mx-5 text-required">
							{error}
						</span>
					)}
					<SubmitFormButton name={"Save"} />
				</div>
			</form>
		</div>
	);
};
