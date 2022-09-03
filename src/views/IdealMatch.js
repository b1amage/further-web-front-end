import React, { useState } from "react";
import authenticationApi from "../api/authenticationApi";
import { IdealMatchForm } from "../components/idea_match/IdealMatchForm";
import { IdealMatchHeader } from "../components/idea_match/IdealMatchHeader";
import { SucessNotification } from "../components/idea_match/SucessNotification";

export const IdealMatch = () => {
	const [display, setDisplay] = useState(false);
	const [selectedType, setSelectedType] = useState("");
	const [error, setError] = useState("");
	const onChangeType = (e) => {
		setSelectedType(e.target.value);
	};


	const handleIdealSubmit = (e) => {
		e.preventDefault();
		// console.log(selectedType)
		if (selectedType) {
			console.log(selectedType);
			localStorage.setItem("ideal", JSON.stringify(selectedType));

			// create profile
			authenticationApi.createProfile();

			setDisplay((state) => !state);
		} else {
			setError("* Please select 1 type");
		}
	};
	return (
		<>
			<div className="flex flex-col justify-center w-full h-screen">
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
