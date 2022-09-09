import React, { useState } from "react";
import Header from "../components/header/Header";
import ImgFrame from "../components/setup/ImgFrame";
import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";
import error from "../assets/svg/error.svg";

const SetupImagePage = () => {
	const [showErr, setShowErr] = useState(false);
	const navigate = useNavigate();
	localStorage.setItem("images", JSON.stringify([]));

	return (
		<div className="page-container">
			<Header title="Add Your Best Photos" />
			<p className="my-4 md:text-xl lg:text-2xl">
				Add your best photos to get a higher amount of daily matches.
			</p>
			{showErr && (
				<div className="flex items-center gap-4 p-4 text-red-600 bg-red-100 rounded-full">
					<div>
						<img src={error} alt="" />
					</div>
					<h3>Please upload at least one image</h3>
				</div>
			)}
			<div className="grid grid-cols-2 gap-4 my-8 lg:gap-10 lg:grid-cols-3 place-items-center">
				{Array(6)
					.fill()
					.map((_, index) => (
						<ImgFrame key={index} id={index} />
					))}
			</div>

			{/* <Link to="/setup/interest"> */}
			<Button
				onClick={() => {
					if (JSON.parse(localStorage.getItem("images")).length < 1) {
						setShowErr(true);
						return;
					}
					navigate("/setup/interest");
				}}
				primary
				className="my-10"
			>
				Next
			</Button>
			{/* </Link> */}
		</div>
	);
};

export default SetupImagePage;
