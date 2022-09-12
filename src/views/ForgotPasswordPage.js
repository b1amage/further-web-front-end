import React, { useState } from "react";
import forgotPassword from "../assets/svg/forgotPassword.svg";
import email from "../assets/svg/email.svg";
import { Button } from "../components/forgot_password/Button";
import { Type } from "../components/forgot_password/Type";
import { DisplaySvg } from "../components/forgot_password/DisplaySvg";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import forgotPasswordApi from "../api/forgotPasswordApi";

export const ForgotPasswordPage = () => {
	const [selectedType, setSelectedType] = useState(null);

	const [message, setMessage] = useState("");
	const onChangeType = (e) => {
		setSelectedType(e.target.value);
	};

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		forgotPasswordApi.forgotPassword(selectedType, navigate).then((res) => {
			setMessage(res.data.msg);
		});
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="px-6 py-7 w-full h-screen sm:px-[100px] md:px-[200px] lg:px-[350px]"
			>
				<Header title={"Forgot Password"} />

				<DisplaySvg svg={forgotPassword} />

				<div className="my-6">
					<span>
						Select which contact details should we use to reset your
						password
					</span>
				</div>

				<div>
					<Type
						id={JSON.parse(localStorage.getItem("user")).email}
						icon={email}
						type={"Email"}
						onChangeType={onChangeType}
					/>
				</div>

				<div className="mt-[80px]">
					<Button
						type={"submit"}
						name={"Continue"}
						message={message}
					/>
				</div>
			</form>
		</div>
	);
};
