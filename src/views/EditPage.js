import React from "react";
import Header from "../components/header/Header";
import Input from "../utilities/Input";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import pin from "../assets/svg/pin.svg";
import Button from "../utilities/Button";
import TextArea from "../utilities/TextArea";
import Select from "../utilities/Select";
import ages from "../content/ages";
import genders from "../content/genders";
import majors from "../content/majors";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
	const navigate = useNavigate();

	return (
		<div className="page-container">
			<Header title="Edit profile" />

			<form
				onSubmit={(e) => {
					e.preventDefault();
					navigate("/profile");
				}}
				className="flex flex-col gap-5 my-10 lg:gap-8"
			>
				<Input
					placeholder="Kyle Nguyen"
					required={true}
					label="full name"
				/>

				<Input
					placeholder="kyle.nguyen@gmail.com"
					required={true}
					label="email"
					icon={mail}
				/>

				<Input
					placeholder="+84 913 981 345"
					required={true}
					label="phone"
					icon={phone}
				/>

				<div className="flex items-center gap-5">
					<Select required={true} label="gender" options={genders} />
					<Select required={true} label="age" options={ages} />
				</div>

				<TextArea
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
					required={true}
					label="about"
				/>

				<Select required={true} label="major" options={majors} fluid />

				<Input
					placeholder="Sai Gon"
					required={true}
					label="address"
					icon={pin}
				/>

				<Button primary type="submit" className="mt-8">
					Save changes
				</Button>
			</form>
		</div>
	);
};

export default EditPage;
