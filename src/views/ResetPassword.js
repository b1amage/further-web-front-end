import React, { useEffect } from "react";
import { DisplaySvg } from "../components/forgot_password/DisplaySvg";
import { ResetPasswordForm } from "../components/reset_password/ResetPasswordForm";
import resetPasswordFrame from "../assets/svg/resetPasswordFrame.svg";
import Header from "../components/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import resetPasswordApi from "../api/resetPasswordApi";
import { useState } from "react";

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export const ResetPassword = () => {
	const query = useQuery();

	const navigate = useNavigate();

	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/;
	const [newPwd, setNewPwd] = useState("");
	const [confirmPwd, setConfirmPwd] = useState("");
	const [error, setError] = useState("");

	const onChangeNewPassword = (e) => {
		setNewPwd(e.target.value);
	};

	const onChangeConfirmPassword = (e) => {
		setConfirmPwd(e.target.value);
	};

	const validatePassword = (e) => {
		e.preventDefault();
		if (newPwd.length < 8) {
			setError("* Password must have at least 8 characters");
		} else {
			if (newPwd.length > 20) {
				setError(
					"* Password length must not longer than 20 characters"
				);
			} else {
				if (!passwordRegex.test(newPwd)) {
					setError("* Invalid password");
				} else {
					if (newPwd !== confirmPwd) {
						setError("* Invalid password");
					} else {
						resetPasswordApi
							.resetPassword(
								newPwd,
								JSON.parse(localStorage.getItem("resetToken")),
								navigate
							)
							.then((res) => {
								localStorage.setItem(
									"message",
									JSON.stringify(res.data.msg)
								);
								navigate("/reset-password/notification");
							});
					}
				}
			}
		}
	};

	useEffect(() => {
		const saveToken = async () => {
			localStorage.setItem(
				"resetToken",
				JSON.stringify(query.get("token"))
			);
		};
		saveToken();
	}, [query, navigate]);

	return (
		<div
			// className="mx-6 mt-7 sm:mx-[100px] md:mx-[200px] lg:mx-[350px]"
			className="page-container"
		>
			<Header title={"Forgot Password"} />
			<DisplaySvg svg={resetPasswordFrame} />
			<ResetPasswordForm
				validatePassword={validatePassword}
				newPwd={newPwd}
				onChangeNewPassword={onChangeNewPassword}
				confirmPwd={confirmPwd}
				onChangeConfirmPassword={onChangeConfirmPassword}
				error={error}
			/>
		</div>
	);
};
