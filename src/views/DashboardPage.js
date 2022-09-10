import React, { useState, useEffect } from "react";
import DashboardCard from "../components/dashboard/DashboardCard";
import Header from "../components/header/Header";
import ReactDOM from "react-dom";
import search from "../assets/svg/search.svg";
import Input from "../utilities/Input";
import Button from "../utilities/Button";
import SectionTitle from "../utilities/SectionTitle";

import useDebounce from "../hooks/useDebounce";
import Select from "../utilities/Select";
import genders from "../content/genders";
import ages from "../content/ages";
import schools from "../content/schools";
import locations from "../content/locations";
import { interestsList } from "../content/interests";
import TextArea from "../utilities/TextArea";

const DashboardPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [isForAdd, setIsForAdd] = useState();

	useEffect(() => {
		if (showModal) {
			if (isForAdd) {
				document.body.style.overflow = "hidden";
			}

			window.scrollTo(0, 0);
		} else {
			if (isForAdd) {
				document.body.style.overflow = "unset";
			}
		}
	}, [showModal, isForAdd]);

	const onEdit = () => {
		setIsForAdd(false);
		setShowModal(true);
	};

	const onDelete = () => {
		setShowModal(true);
	};

	const onAdd = () => {
		setIsForAdd(true);
		setShowModal(true);
	};

	return (
		<div
			className={`relative page-container ${
				showModal ? "overflow-hidden" : ""
			}`}
		>
			<Header title="CMS Dashboard" />

			<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
				{Array(8)
					.fill()
					.map((item, index) => (
						<DashboardCard
							key={index}
							onDelete={onDelete}
							onEdit={onEdit}
						/>
					))}
			</div>

			{showModal && <Modal isForAdd={isForAdd} />}

			<EditBoard onAdd={onAdd} />
		</div>
	);
};

const Modal = ({ isForAdd }) => {
	return ReactDOM.createPortal(
		<div className="absolute inset-0 bg-black bg-opacity-50 z-[120]">
			<form className="flex flex-col w-full gap-5 p-10 mx-auto my-10 overflow-y-scroll bg-white md:w-4/5 dark:bg-dark-3 rounded-3xl lg:gap-4">
				<SectionTitle className="text-center">
					{isForAdd ? "Create user" : "Edit user"}
				</SectionTitle>
				<Input placeholder="baonguyen33" label="username" required />

				<div className="flex items-center gap-5">
					<Select required={true} label="gender" options={genders} />
					<Select required={true} label="age" options={ages} />
				</div>

				<div className="flex items-center gap-5">
					<Select
						required={true}
						label="location"
						options={locations}
					/>
					<Select required={true} label="school" options={schools} />
				</div>

				<Select
					fluid
					required={true}
					label="hobbies"
					options={interestsList.map((item) => item.title)}
				/>

				{!isForAdd && (
					<>
						<TextArea
							required={true}
							label="biography"
							placeholder="Something about the user"
						/>

						<SectionTitle>Interest information</SectionTitle>

						<div className="flex items-center gap-5">
							<Select
								required={true}
								label="from"
								options={ages}
							/>
							<Select required={true} label="to" options={ages} />
						</div>

						<div className="flex items-center gap-5">
							<Select
								required={true}
								label="Gender"
								id="interestedGender"
								options={genders}
							/>
							<Select
								required={true}
								label="Location"
								id="interestedLocations"
								options={locations}
							/>
						</div>
					</>
				)}

				<Button primary type="submit">
					{isForAdd ? "Create" : "Edit"}
				</Button>
			</form>
		</div>,
		document.querySelector("body")
	);
};

const EditBoard = ({ onAdd }) => {
	const [filter, setFilter] = useState("");
	const filterDebounce = useDebounce(filter, 500);
	const handleChange = (e) => {
		setFilter(e.target.value);
	};

	React.useEffect(() => {
		if (filterDebounce) {
			// call api
		} else {
		}
	}, [filterDebounce]);

	return ReactDOM.createPortal(
		<div className="sticky bottom-0 w-full bg-opacity-75 bg-white dark:bg-dark-4 h-[200px] z-[100] lg:p-16 rounded-t-[36px] p-5 flex md:flex-row md:justify-between flex-col gap-5 justify-center items-center">
			<div className="w-[300px] lg:w-[400px] h-auto relative">
				<Input
					onChange={handleChange}
					icon={search}
					placeholder="Search user"
				/>
			</div>
			<Button
				onClick={onAdd}
				primary
				className="h-[60px] w-[60px] flex justify-center items-center text-3xl"
			>
				+
			</Button>

			<SectionTitle className="text-primary-100 md:w-[300px] lg:w-[400px] text-center">
				Total: 45 users
			</SectionTitle>
		</div>,
		document.querySelector("body")
	);
};

export default DashboardPage;
