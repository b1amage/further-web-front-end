import React, { useState } from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import Input from "../utilities/Input";
import LogoLg from "../utilities/LogoLg";

import eyeClose from "../assets/svg/eye-close.svg";
import eyeOpen from "../assets/svg/eye-open.svg";
import Button from "../utilities/Button";

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import authenticationApi from "../api/authenticationApi";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
					"Please enter a valid email address!"
				),

			password: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/,
					"Password must have at least 8 characters, has at least 1 uppercase, 1 lowercase, 1 digit, 1 special character!"
				),
		}),
		onSubmit: (values) => {
			console.log(values);
			authenticationApi.login(values, navigate);
		},
	});

	return (
		<div className="page-container">
			<Header title="Sign in" />

			<LogoLg />

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-5 my-10 lg:gap-8"
			>
				<Input
					placeholder="Email"
					label="email"
					required
					value={formik.values.email}
					onChange={formik.handleChange}
					err={formik.errors.email}
				/>
				<Input
					placeholder="Password"
					label="password"
					required
					type={isShowPassword ? "text" : "password"}
					icon={isShowPassword ? eyeOpen : eyeClose}
					iconOnClick={() => setIsShowPassword(!isShowPassword)}
					value={formik.values.password}
					onChange={formik.handleChange}
					err={formik.errors.password}
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