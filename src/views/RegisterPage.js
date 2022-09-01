import React, { useState } from "react";
import Header from "../components/header/Header";

import NavBar from "../components/navbar/NavBar";
import Input from "../utilities/Input";
import LogoLg from "../utilities/LogoLg";
import eyeOpen from "../assets/svg/eye-open.svg";
import eyeClose from "../assets/svg/eye-close.svg";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import authenticationApi from "../api/authenticationApi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			confirm: "",
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Please fill in this field!"),
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
			confirm: Yup.string()
				.required("Please fill in this field!")
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*].{8,}$/,
					"Password must have at least 8 characters, has at least 1 uppercase, 1 lowercase, 1 digit, 1 special character!"
				),
		}),
		onSubmit: (values) => {
			console.log(values);

			authenticationApi.register(values, navigate);
		},
	});

	return (
		<div className="page-container">
			<Header title="Register" />
			<LogoLg />

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-5 my-10 lg:gap-8"
			>
				<Input
					label="username"
					placeholder="Username"
					required
					value={formik.values.username}
					onChange={formik.handleChange}
					err={formik.errors.username}
				/>

				<Input
					label="email"
					placeholder="Email"
					required
					value={formik.values.email}
					onChange={formik.handleChange}
					err={formik.errors.email}
				/>

				<Input
					iconOnClick={() => setIsShowPassword(!isShowPassword)}
					type={isShowPassword ? "text" : "password"}
					label="password"
					placeholder="Password"
					required
					icon={isShowPassword ? eyeOpen : eyeClose}
					value={formik.values.password}
					onChange={formik.handleChange}
					err={formik.errors.password}
				/>

				<Input
					iconOnClick={() =>
						setIsShowConfirmPassword(!isShowConfirmPassword)
					}
					type={isShowConfirmPassword ? "text" : "password"}
					label="confirm"
					placeholder="Confirm Password"
					required
					icon={isShowConfirmPassword ? eyeOpen : eyeClose}
					value={formik.values.confirm}
					onChange={formik.handleChange}
					err={formik.errors.confirm}
				/>

				<Button
					type="submit"
					primary
					className="mt-4 md:w-1/2 md:mx-auto lg:text-2xl lg:h-[65px]"
				>
					Sign up
				</Button>

				<p className="p-4 pt-0 text-center text-gray2 md:text-xl lg:text-2xl">
					Already has an account?{" "}
					<Link to="/login" className="text-primary-100">
						Sign in
					</Link>
				</p>
			</form>

			<NavBar />
		</div>
	);
};

export default RegisterPage;
