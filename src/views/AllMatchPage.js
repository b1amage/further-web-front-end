import React, { useEffect, useState } from "react";
import userApi from "../api/userApi";
import Header from "../components/header/Header";
import NoMore from "../components/main/NoMore";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";

const AllMatchPage = () => {
	const [people, setPeople] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const getPeople = async () => {
			const response = await userApi.getPeopleLiked(navigate);

			setPeople(response.data.results);
		};

		if (authenticationApi.isLogin()) {
			getPeople();
		} else {
			setPeople(null);
		}
	}, [navigate]);

	return (
		<div className="page-container">
			<Header title={`All match (${people?.length || 0})`} />

			{people ? (
				<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
					{people?.length > 0 &&
						people.map((item, index) => (
							<MatchCard primary key={index} user={item} />
						))}
				</div>
			) : (
				<NoMore isInMatch />
			)}

			<NavBar />
		</div>
	);
};

export default AllMatchPage;
