import React, { useEffect } from "react";
import userApi from "../api/userApi";
import Header from "../components/header/Header";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";

const AllMatchPage = () => {
	useEffect(() => {
		const getPeople = async () => {
			const response = await userApi.getPeopleLiked();

			console.log(response);
		};

		getPeople();
	}, []);

	return (
		<div className="page-container">
			<Header title="All match (269)" />

			<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
				{Array(8)
					.fill()
					.map((_, index) => (
						<MatchCard primary key={index} />
					))}
			</div>

			<NavBar />
		</div>
	);
};

export default AllMatchPage;
