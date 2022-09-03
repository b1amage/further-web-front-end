import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedInterestForm } from "../components/select_interest/SelectedInterestForm";
import { SelectedInterestHeader } from "../components/select_interest/SelectedInterestHeader";
import { interestsList } from "../content/interests";

export const SelectInterest = () => {
	const [interests, setInterests] = useState([...interestsList]);

	interests.sort((a, b) => a.localeCompare(b));

	const [selectedInterests, setSelectedInterests] = useState([]);

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const onChangeSelect = (e) => {
		const { value } = e.target;

		if (selectedInterests.length === 0) {
			setSelectedInterests((prev) => [...prev, value]);
			setInterests(interests.filter((item) => item !== value));
		} else {
			if (selectedInterests.includes(value)) {
				let filterInterest = selectedInterests.filter(
					(item) => item !== value
				);
				setSelectedInterests(filterInterest);
			} else {
				setSelectedInterests((prev) => [...prev, value]);
				setInterests(interests.filter((item) => item !== value));
			}
		}
	};

	const onChangeRemoveSelect = (e) => {
		const { value } = e.target;
		setSelectedInterests(
			selectedInterests.filter((item) => item !== value)
		);
		setInterests((prev) => [...prev, value]);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(selectedInterests)
		if (selectedInterests.length >= 3) {
			console.log(selectedInterests);
			localStorage.setItem("hobbies", JSON.stringify(selectedInterests));
			navigate("/setup/ideal_match");
		} else {
			setError("* Please select at least 3 hobbies");
		}
	};

	return (
		<div className="inline-flex flex-col w-full h-auto pt-6 overflow-hidden md:items-center">
			<SelectedInterestHeader onChange={onChangeSelect} />
			<SelectedInterestForm
				onSubmit={handleSubmit}
				array={interests}
				selectedList={selectedInterests}
				onChangeRemoveSelect={onChangeRemoveSelect}
				onChangeSelect={onChangeSelect}
				error={error}
			/>
		</div>
	);
};
