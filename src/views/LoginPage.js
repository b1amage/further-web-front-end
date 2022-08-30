import React, { useState } from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Input from "../utilities/Input";
import LogoLg from "../utilities/LogoLg";

import eyeClose from "../assets/svg/eye-close.svg";
import eyeOpen from "../assets/svg/eye-open.svg";
import Button from "../utilities/Button";

import { Link } from "react-router-dom";

const LoginPage = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<div className="page-container">
			<Header title="Sign in" />

			<LogoLg />

			<form className="flex flex-col gap-5 my-10 lg:gap-8">
				<Input placeholder="Email" label="email" required />
				<Input
					placeholder="Password"
					label="password"
					required
					type={isShowPassword ? "text" : "password"}
					icon={isShowPassword ? eyeOpen : eyeClose}
					iconOnClick={() => setIsShowPassword(!isShowPassword)}
				/>

				<Button
					primary
					className="mt-4 md:w-1/2 md:mx-auto lg:text-2xl lg:h-[65px]"
				>
					Sign in
				</Button>

				<p className="p-4 pt-0 text-center text-gray2 md:text-xl lg:text-2xl">
					Don't have account?{" "}
					<Link to="/register" className="text-primary-100">
						Sign up
					</Link>
				</p>
			</form>

			<NavBar />
		</div>
	);
};

export default LoginPage;
