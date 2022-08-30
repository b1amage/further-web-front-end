import React, { useState } from "react";
import Header from "../components/header/Header";

import NavBar from "../components/navbar/NavBar";
import Input from "../utilities/Input";
import LogoLg from "../utilities/LogoLg";
import eyeOpen from "../assets/svg/eye-open.svg";
import eyeClose from "../assets/svg/eye-close.svg";
import Button from "../utilities/Button";

const RegisterPage = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

	return (
		<div className="page-container">
			<Header title="Register" />
			<LogoLg />

			<form className="flex flex-col gap-5 my-10 lg:gap-8">
				<Input label="Email" placeholder="Email" required />

				<Input
					iconOnClick={() => setIsShowPassword(!isShowPassword)}
					type={isShowPassword ? "text" : "password"}
					label="Password"
					placeholder="Password"
					required
					icon={isShowPassword ? eyeOpen : eyeClose}
				/>

				<Input
					iconOnClick={() =>
						setIsShowConfirmPassword(!isShowConfirmPassword)
					}
					type={isShowConfirmPassword ? "text" : "password"}
					label="Confirm Password"
					placeholder="Confirm Password"
					required
					icon={isShowConfirmPassword ? eyeOpen : eyeClose}
				/>

				<Button
					type="submit"
					primary
					className="mt-4 md:w-1/2 md:mx-auto lg:text-2xl lg:h-[65px]"
				>
					Sign in
				</Button>

				<p className="p-4 pt-0 text-center text-gray2 md:text-xl lg:text-2xl">
					Already has an account?{" "}
					<span className="text-primary-100">Sign in</span>
				</p>
			</form>

			<NavBar />
		</div>
	);
};

export default RegisterPage;
