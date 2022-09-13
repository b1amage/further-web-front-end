import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectedInterestForm } from "../components/select_interest/SelectedInterestForm";
import { SelectedInterestHeader } from "../components/select_interest/SelectedInterestHeader";
import { interestsList } from "../content/interests";

export const SelectInterest = () => {
	const hobbiesList = JSON.parse(localStorage.getItem("hobbies")) || [];

	const hobbies =
		hobbiesList.length < 1
			? []
			: hobbiesList.map((item) => {
				return {
					value: item,
					title: interestsList.filter(
						(obj) => obj.value === item
					)[0].title,
				};
			});

	const newInterestsList = interestsList
		.map((item) => {
			if (!hobbies.filter((i) => i.value === item.value).length < 1) {
				return null;
			}

			return item;
		})
		.filter((item) => item !== null);

	const [interests, setInterests] = useState(newInterestsList);

	interests.sort((a, b) => a.value.localeCompare(b.value));

	const [selectedInterests, setSelectedInterests] = useState(hobbies);

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

		console.log("selectedInterest", selectedInterests);
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
		<div className="inline-flex flex-col w-full overflow-hidden justify-center items-center">
			<div className="page-container">
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
		</div>
	);
};
