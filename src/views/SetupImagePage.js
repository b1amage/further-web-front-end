import React from "react";
import Header from "../components/header/Header";
import ImgFrame from "../components/setup/ImgFrame";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

const SetupImagePage = () => {
	return (
		<div className="page-container">
			<Header title="Add Your Best Photos" />

			<p className="my-4 md:text-xl lg:text-2xl">
				Add your best photos to get a higher amount of daily matches.
			</p>

			<div className="grid grid-cols-2 gap-4 my-8 lg:gap-10 lg:grid-cols-3 place-items-center">
				{Array(6)
					.fill()
					.map((_, index) => (
						<ImgFrame key={index} id={index} />
					))}
			</div>
			<Link to="/setup/interest">
				<Button primary className="my-10">
					Next
				</Button>
			</Link>
		</div>
	);
};

export default SetupImagePage;
