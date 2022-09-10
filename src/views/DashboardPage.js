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
import { useFormik } from "formik";
import * as Yup from "yup";
import adminApi from "../api/adminApi";
import { useNavigate } from "react-router-dom";
import Loading from "../utilities/Loading";

const DashboardPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [isForAdd, setIsForAdd] = useState();
	const [users, setUsers] = useState([]);
	const [nextCursor, setNextCursor] = useState();
	const [loading, setLoading] = useState();
	const [loadMore, setLoadMore] = useState();

	const navigate = useNavigate();

	useEffect(() => {
		const getAll = async () => {
			setLoading(true);

			const response = await adminApi.getAllUsers(false, navigate);
			setUsers(response.data.results);
			setNextCursor(response.data.next_cursor);

			setLoading(false);
		};

		getAll();
	}, [navigate]);

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

	const setData = (data) => {
		setUsers(data);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	const setNC = (nc) => {
		setNextCursor(nc);
	};

	const onEdit = () => {
		setIsForAdd(false);
		setShowModal(true);
	};

	const onDelete = (id) => {
		const del = async () => {
			const newUsers = users.filter((item) => item._id !== id);
			setUsers(newUsers);

			const response = await adminApi.deleteUser(navigate, id);
			console.log(response);
		};

		del();
	};

	const onAdd = () => {
		setIsForAdd(true);
		setShowModal(true);
	};

	const handleShowMore = () => {
		const getMore = async () => {
			setLoadMore(true);

			const response = await adminApi.getAllUsers(nextCursor, navigate);
			console.log(response);
			setUsers([...users, ...response.data.results]);
			setNextCursor(response.data.next_cursor);

			setLoadMore(false);
		};

		getMore();
	};
	return (
		<div
			className={`relative page-container ${
				showModal ? "overflow-hidden" : ""
			}`}
		>
			<Header title="CMS Dashboard" />

			{loading ? (
				<Loading />
			) : (
				<>
					<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
						{users?.length > 0 &&
							users.map((item, index) => (
								<DashboardCard
									user={item}
									key={index}
									onDelete={onDelete}
									onEdit={onEdit}
								/>
							))}
					</div>

					{loadMore && (
						<div className="w-[60px] h-[60px] bg-transparent border-4 border-b-transparent border-l-primary-100 border-t-primary-100 border-r-primary-80 rounded-full animate-spin mx-auto my-5"></div>
					)}

					{nextCursor && (
						<Button onClick={handleShowMore} primary>
							Show more
						</Button>
					)}
				</>
			)}

			{showModal && (
				<Modal
					closeModal={closeModal}
					setData={setData}
					isForAdd={isForAdd}
					data={users}
				/>
			)}

			<EditBoard setNC={setNC} onAdd={onAdd} setData={setData} />
		</div>
	);
};

const Modal = ({ isForAdd, setData, closeModal, data }) => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			username: "",
			gender: genders[0],
			age: ages[0] * 1,
			locations: locations[0],
			school: schools[0],
			hobbies: interestsList[0].title,
			biography: "",
			from: ages[0],
			to: ages[6],
			interestedGender: genders[0],
			interestedLocation: locations[0],
		},
		validationSchema: Yup.object({
			username: Yup.string().required("Please fill in this field!"),
			gender: Yup.string().required(
				"Please select an option for this field!"
			),
			age: Yup.string().required(
				"Please select an option for this field!"
			),
			locations: Yup.string().required(
				"Please select an option for this field!"
			),
			school: Yup.string().required(
				"Please select an option for this field!"
			),
			hobbies: Yup.string().required(
				"Please select an option for this field!"
			),

			from:
				!isForAdd &&
				Yup.string().required(
					"Please select an option for this field!"
				),
			to:
				!isForAdd &&
				Yup.string().required(
					"Please select an option for this field!"
				),
			interestedGender:
				!isForAdd &&
				Yup.string().required(
					"Please select an option for this field!"
				),
			interestedLocation:
				!isForAdd &&
				Yup.string().required(
					"Please select an option for this field!"
				),
		}),
		onSubmit: (values) => {
			console.log(values);
			if (isForAdd) {
				const addData = {
					username: values.username,
					age: values.age * 1,
					gender: values.gender,
					location: values.locations,
					hobbies: [
						values.hobbies.split(" ")[1],
						"Coding",
						"Cooking",
					],
					school: values.school,
				};

				const newData = [addData, ...data];
				setData(newData);

				const create = async () => {
					const response = await adminApi.createUser(
						addData,
						navigate
					);

					console.log(response);
				};

				create();
			} else {
				const update = async () => {
					const updateData = {
						username: values.username,
						images: [
							"https://res.cloudinary.com/dma21c4n9/image/upload/v1659256280/file-upload/Female_i3astd.png",
						],
						age: values.age * 1,
						gender: values.gender,
						location: values.locations,
						hobbies: [
							values.hobbies.split(" ")[1],
							"Coding",
							"Watching TV",
						],
						school: values.school,
						biography: values.biography,
						interested: {
							interestedGender: values.interestedGender,
							interestedMinAge: values.from * 1,
							interestedMaxAge: values.to * 1,
							interestedLocations: [values.interestedLocation],
						},
					};

					const newData = data.map((item) => {
						if (item._id === localStorage.getItem("updateId")) {
							return updateData;
						}
						return item;
					});

					setData(newData);

					const response = await adminApi.updateUser(
						localStorage.getItem("updateId"),
						updateData,
						navigate
					);

					console.log(response);
				};

				update();
			}

			closeModal();
		},
	});

	return ReactDOM.createPortal(
		<div className="absolute inset-0 bg-black bg-opacity-50 z-[120]">
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col w-full gap-5 p-10 mx-auto my-10 overflow-y-scroll bg-white md:w-4/5 dark:bg-dark-3 rounded-3xl lg:gap-4"
			>
				<SectionTitle className="text-center">
					{isForAdd ? "Create user" : "Edit user"}
				</SectionTitle>
				<Input
					placeholder="baonguyen33"
					label="username"
					required
					value={formik.values.username}
					onChange={formik.handleChange}
					err={formik.errors.username}
				/>

				<div className="flex items-center gap-5">
					<Select
						required={true}
						label="gender"
						options={genders}
						value={formik.values.gender}
						onChange={formik.handleChange}
						err={formik.errors.gender}
					/>
					<Select
						required={true}
						label="age"
						options={ages}
						value={formik.values.age}
						onChange={formik.handleChange}
						err={formik.errors.age}
					/>
				</div>

				<div className="flex items-center gap-5">
					<Select
						required={true}
						label="location"
						options={locations}
						value={formik.values.location}
						onChange={formik.handleChange}
						err={formik.errors.location}
					/>
					<Select
						required={true}
						label="school"
						options={schools}
						value={formik.values.school}
						onChange={formik.handleChange}
						err={formik.errors.school}
					/>
				</div>

				<Select
					fluid
					required={true}
					label="hobbies"
					options={interestsList.map((item) => item.title)}
					value={formik.values.hobbies}
					onChange={formik.handleChange}
					err={formik.errors.hobbies}
				/>

				{!isForAdd && (
					<>
						<TextArea
							label="biography"
							placeholder="Something about the user"
							value={formik.values.biography}
							onChange={formik.handleChange}
							err={formik.errors.biography}
						/>

						<SectionTitle>Interest information</SectionTitle>

						<div className="flex items-center gap-5">
							<Select
								required={true}
								label="from"
								options={ages}
								value={formik.values.from}
								onChange={formik.handleChange}
								err={formik.errors.from}
							/>
							<Select
								required={true}
								label="to"
								options={ages}
								value={formik.values.to}
								onChange={formik.handleChange}
								err={formik.errors.to}
							/>
						</div>

						<div className="flex items-center gap-5">
							<Select
								required={true}
								label="Gender"
								id="interestedGender"
								options={genders}
								value={formik.values.interestedGender}
								onChange={formik.handleChange}
								err={formik.errors.interestedGender}
							/>
							<Select
								required={true}
								label="Location"
								id="interestedLocations"
								options={locations}
								value={formik.values.interestedLocations}
								onChange={formik.handleChange}
								err={formik.errors.interestedLocations}
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

const EditBoard = ({ onAdd, setData, setNC }) => {
	const [filter, setFilter] = useState("");
	const filterDebounce = useDebounce(filter, 500);
	const handleChange = (e) => {
		setFilter(e.target.value);
	};
	const navigate = useNavigate();

	useEffect(() => {
		if (filterDebounce) {
			// call api
			const getByName = async () => {
				console.log("debounce", filterDebounce);
				const response = await adminApi.getUserByName(
					navigate,
					filterDebounce
				);
				console.log(response);
				setData(response.data.results);
				setNC(response.data.next_cursor);
			};

			getByName();
		} else {
		}
	}, [filterDebounce, navigate, setData, setNC]);

	return ReactDOM.createPortal(
		<div className="sticky bottom-0 w-full border-2 dark:border-dark-3 border-gray bg-white dark:bg-dark-4 h-[200px] z-[100] lg:p-16 rounded-t-[36px] p-5 flex md:flex-row md:justify-between flex-col gap-5 justify-center items-center">
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
