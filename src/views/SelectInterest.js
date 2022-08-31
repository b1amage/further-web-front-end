import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/forgot_password/Button";
import Header from "../components/header/Header";
import { InterestList } from "../components/select_interest/InterestList";
import { SelectedList } from "../components/select_interest/SelectedList";

export const SelectInterest = () => {
	const [interests, setInterests] = useState([
		"🎮 Gaming",
		"💃🏻 Dancing",
		"🗣 Language",
		"🎵 Music",
		"🎬 Movie",
		"📸 Photography",
		"👗 Fashion",
		"📚 Book",
		"✍🏻 Writing",
		"⚽️ Football",
		"💪 Gym & Fitness",
		"🍔 Food & Drink",
	]);

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

	return (
		<div className="inline-flex flex-col h-screen pt-6 overflow-hidden">
			<div className="h-full px-6">
				<Header title={"Select Your Interest"} />
				<div className="h-full">
					<p className="my-3">
						Select your interests to match with users who have
						similar things in common.
					</p>
					<InterestList array={interests} onChange={onChangeSelect} />
				</div>
			</div>
			<div className="inline-flex flex-wrap gap-4 py-5 mx-6 my-4 overflow-y-scroll border-t h-1/5 border-t-gray">
				<SelectedList
					array={selectedInterests}
					onChange={onChangeRemoveSelect}
				/>
			</div>
			<span className="mx-6 my-2 text-required">{error}</span>
			<div className="pt-6 pb-[40px] px-6 h-fit inline-flex items-center border-t border-t-gray rounded-t-[24px]">
				<Button
					name={"Next"}
					className={`!mt-4`}
					handleClick={() =>
						selectedInterests.length >= 3
							? navigate("/select_interest/ideal_match")
							: setError("* Please select at least 3 hobbies")
					}
				/>
			</div>
		</div>
	);
};
