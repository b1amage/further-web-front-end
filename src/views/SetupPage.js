import React from "react";
import Header from "../components/header/Header";
import Avatar from "../components/setup/Avatar";
import Input from "../utilities/Input";

import phone from "../assets/svg/phone.svg";
import Select from "../utilities/Select";
import genders from "../content/genders";
import majors from "../content/majors";
import Button from "../utilities/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import locations from "../content/locations";
import schools from "../content/schools";
import useViewport from "../hooks/useViewport";
import { useNavigate } from "react-router-dom";

const SetupPage = () => {
	const { width } = useViewport();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			phone: "",
			gender: "",
			major: "",
			location: "",
			school: "",
		},
		validationSchema: Yup.object({
			phone: Yup.string()
				.required("Please fill in this field!")
				.matches(
					/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
					"Please enter a valid phone number"
				),
			gender: Yup.string().required(
				"Please select an option in this field!"
			),
			major: Yup.string().required(
				"Please select an option in this field!"
			),
			location: Yup.string().required(
				"Please select an option in this field!"
			),
			school: Yup.string().required(
				"Please select an option in this field!"
			),
		}),
		onSubmit: (values) => {
			console.log(values);
			localStorage.setItem("info", JSON.stringify(values));
			navigate("/setup/img");
		},
	});

	return (
		<div className="page-container">
			<Header title="Fill Your Profile" />

			<Avatar />

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-5 my-10 lg:gap-8"
			>
				<Input
					placeholder="+84913981324"
					required
					label="phone"
					icon={phone}
					value={formik.values.phone}
					onChange={formik.handleChange}
					err={formik.errors.phone}
				/>
				<div className="flex flex-col lg:flex-row lg:gap-5">
					<Select
						fluid={width < 1284}
						label="gender"
						options={genders}
						value={formik.values.gender}
						onChange={formik.handleChange}
						err={formik.errors.gender}
					/>
					<Select
						fluid={width < 1284}
						label="major"
						options={majors}
						value={formik.values.major}
						onChange={formik.handleChange}
						err={formik.errors.major}
					/>
				</div>
				<div className="flex flex-col lg:flex-row lg:gap-5">
					<Select
						fluid={width < 1284}
						label="location"
						options={locations}
						value={formik.values.location}
						onChange={formik.handleChange}
						err={formik.errors.location}
					/>
					<Select
						fluid={width < 1284}
						label="school"
						options={schools}
						value={formik.values.school}
						onChange={formik.handleChange}
						err={formik.errors.school}
					/>
				</div>

				<Button primary type="submit" className="mt-8">
					Save changes
				</Button>
			</form>
		</div>
	);
};

export default SetupPage;
