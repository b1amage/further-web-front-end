import React from "react";
import Header from "../components/header/Header";
import Avatar from "../components/setup/Avatar";
import Input from "../utilities/Input";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import Select from "../utilities/Select";
import genders from "../content/genders";
import majors from "../content/majors";
import Button from "../utilities/Button";

const SetupPage = () => {
	return (
		<div className="page-container">
			<Header title="Fill Your Profile" />

			<Avatar />

			<form className="flex flex-col gap-5 my-10 lg:gap-8">
				<Input placeholder="Kyle Nguyen" required label="Name" />
				<Input
					placeholder="kyle.nguyen@gmail.com"
					required
					label="email"
					icon={mail}
				/>
				<Input
					placeholder="+84913981324"
					required
					label="phone"
					icon={phone}
				/>

				<Select fluid label="gender" options={genders} />
				<Select fluid label="major" options={majors} />

				<Button primary type="submit" className="mt-8">
					Save changes
				</Button>
			</form>
		</div>
	);
};

export default SetupPage;
