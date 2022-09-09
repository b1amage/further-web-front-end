import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedInterestForm } from "../components/select_interest/SelectedInterestForm";
import { SelectedInterestHeader } from "../components/select_interest/SelectedInterestHeader";
import { interestsList } from "../content/interests";

export const SelectInterest = () => {
	const [interests, setInterests] = useState([...interestsList]);

	interests.sort((a, b) => a.value.localeCompare(b.value));

	const [selectedInterests, setSelectedInterests] = useState([]);

	const [selectedValue, setSelectedValue] = useState([]);

	const [error, setError] = useState("");

	const navigate = useNavigate();

	const onChangeSelect = (e) => {
		const { name, value } = e.target;
		const selectedItem = {
			title: name,
			value: value,
		};

		if (selectedInterests.length === 0) {
			setSelectedInterests((prev) => [...prev, selectedItem]);
			setInterests(interests.filter((item) => item.value !== value));
			setSelectedValue((prev) => [...prev, value]);
		} else {
			if (selectedInterests.includes(selectedItem)) {
				setSelectedInterests(
					selectedInterests.filter(
						(item) => item.value !== selectedItem.value
					)
				);
				setSelectedValue(
					selectedValue.filter((val) => val !== selectedItem.value)
				);
			} else {
				setSelectedInterests((prev) => [...prev, selectedItem]);
				setInterests(interests.filter((item) => item.value !== value));
				setSelectedValue((prev) => [...prev, selectedItem.value]);
			}
		}
	};

	const onChangeRemoveSelect = (e) => {
		const { name, value } = e.target;
		const selectedItem = {
			title: name,
			value: value,
		};
		setSelectedInterests(
			selectedInterests.filter((item) => item.value !== value)
		);
		setInterests((prev) => [...prev, selectedItem]);
		setSelectedValue(selectedValue.filter((val) => val !== value));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(selectedInterests)
		if (selectedInterests.length >= 3) {
			console.log(selectedInterests);
			const data = selectedInterests.map((item) => item.value);
			localStorage.setItem("hobbies", JSON.stringify(data));

			console.log(data);

			navigate("/setup/ideal-match");
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
