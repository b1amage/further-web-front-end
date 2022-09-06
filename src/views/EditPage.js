import React from "react";
import Header from "../components/header/Header";
import Input from "../utilities/Input";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import Button from "../utilities/Button";
import TextArea from "../utilities/TextArea";
import Select from "../utilities/Select";
import ages from "../content/ages";
import genders from "../content/genders";
import majors from "../content/majors";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import locations from "../content/locations";

const EditPage = () => {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			gender: "",
			age: 18,
			from: 18,
			to: 24,
			about: "",
			major: "",
			location: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Please fill in this field!"),
			email: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
					"Please enter a valid email address!"
				),
			phone: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
					"Please enter a valid phone number"
				),
			gender: Yup.string().required("Please select an option!"),
			age: Yup.string().required("Please select an option!"),
			from: Yup.string().required("Please select an option!"),
			to: Yup.string().required("Please select an option!"),
			major: Yup.string().required("Please select an option!"),
			location: Yup.string().required("Please select an option!"),
		}),
		onSubmit: (values) => {
			console.log(values);
			navigate("/profile");
		},
	});

	return (
		<div className="page-container">
			<Header title="Edit profile" />

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-5 my-10 lg:gap-8"
			>
				<Input
					placeholder="Kyle Nguyen"
					required={true}
					label="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					err={formik.errors.name}
				/>

				<Input
					placeholder="kyle.nguyen@gmail.com"
					required={true}
					label="email"
					icon={mail}
					value={formik.values.email}
					onChange={formik.handleChange}
					err={formik.errors.email}
				/>

				<Input
					placeholder="+84 913 981 345"
					required={true}
					label="phone"
					icon={phone}
					value={formik.values.phone}
					onChange={formik.handleChange}
					err={formik.errors.phone}
				/>

				<div className="flex items-center gap-5">
					<Select
						required={true}
						label="gender"
						options={genders}
						value={formik.values.gender}
						onChange={formik.handleChange}
						err={formik.errors.gender}
					/>
					<Select
						required={true}
						label="age"
						options={ages}
						value={formik.values.age}
						onChange={formik.handleChange}
						err={formik.errors.age}
					/>
				</div>

				<div className="flex items-center gap-5">
					<Select
						required={true}
						label="from"
						options={ages}
						value={formik.values.from}
						onChange={formik.handleChange}
						err={formik.errors.from}
					/>
					<Select
						required={true}
						label="to"
						options={ages}
						value={formik.values.to}
						onChange={formik.handleChange}
						err={formik.errors.to}
					/>
				</div>

				<TextArea
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
					label="about"
					value={formik.values.about}
					onChange={formik.handleChange}
					err={formik.errors.about}
				/>

				<Select
					required={true}
					label="major"
					options={majors}
					fluid
					value={formik.values.major}
					onChange={formik.handleChange}
					err={formik.errors.major}
				/>

				<Select
					required={true}
					label="location"
					options={locations}
					fluid
					value={formik.values.location}
					onChange={formik.handleChange}
					err={formik.errors.location}
				/>

				<Button primary type="submit" className="mt-8">
					Save changes
				</Button>
			</form>
		</div>
	);
};

export default EditPage;
