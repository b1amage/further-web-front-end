import React, { useState } from "react";
import authenticationApi from "../api/authenticationApi";
import userApi from "../api/userApi";
import { IdealMatchForm } from "../components/idea_match/IdealMatchForm";
import { IdealMatchHeader } from "../components/idea_match/IdealMatchHeader";
import { SucessNotification } from "../components/idea_match/SucessNotification";
import { useNavigate } from "react-router-dom";

export const IdealMatch = () => {
	const [display, setDisplay] = useState(false);
	const [selectedType, setSelectedType] = useState("");
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const onChangeType = (e) => {
		setSelectedType(e.target.value);
	};

	const handleIdealSubmit = (e) => {
		e.preventDefault();
		// console.log(selectedType)
		if (selectedType) {
			console.log(selectedType);
			localStorage.setItem("ideal", JSON.stringify(selectedType));

			// create profile or update profile
			if (!authenticationApi.isLogin()) {
				authenticationApi.createProfile();
			} else {
				const userId = JSON.parse(localStorage.getItem("user")).userId;

				const updateInfo = JSON.parse(
					localStorage.getItem("updateInfo")
				);
				const hobbies = JSON.parse(localStorage.getItem("hobbies"));
				const images = JSON.parse(localStorage.getItem("images"));

				const values = {
					username: updateInfo.name,
					images,
					age: updateInfo.age * 1,
					gender: updateInfo.gender,
					location: updateInfo.location,
					hobbies,
					school: updateInfo.school,
					biography: updateInfo.about,
					interested: {
						interestedGender: updateInfo.interestGender,
						interestedMinAge: updateInfo.from * 1,
						interestedMaxAge: updateInfo.to * 1,
						interestedLocations: [updateInfo.interestLocation],
					},
				};

				console.log(values);

				userApi.updateProfile(userId, values, navigate);
			}

			setDisplay((state) => !state);
		} else {
			setError("* Please select 1 type");
		}
	};
	return (
		<>
			<div className="flex flex-col justify-center w-full h-auto page-container">
				<IdealMatchHeader />
				<IdealMatchForm
					onChange={onChangeType}
					onSubmit={handleIdealSubmit}
					error={error}
				/>
				<SucessNotification display={display} />
			</div>
		</>
	);
};
