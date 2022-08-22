import React from "react";
import Header from "../components/header/Header";
import Input from "../utilities/Input";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import pin from "../assets/svg/pin.svg";
import Button from "../utilities/Button";
import TextArea from "../utilities/TextArea";
import Select from "../utilities/Select";

const age = Array.from({ length: 100 }, (_, i) => i + 1);
const genders = ["Male", "Female", "Others"];
const EditPage = () => {
	return (
		<div className="page-container">
			<Header title="Edit profile" />

			<form className="flex flex-col gap-5 my-10">
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
					<Select required={true} label="age" options={age} />
				</div>

				<TextArea
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
					required={true}
					label="about"
				/>

				<Input
					placeholder="Sai Gon"
					required={true}
					label="address"
					icon={pin}
				/>

				<Button primary type="submit">
					Save changes
				</Button>
			</form>
		</div>
	);
};

export default EditPage;
