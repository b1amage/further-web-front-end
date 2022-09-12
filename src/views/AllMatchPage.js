import React, { useEffect, useState } from "react";
import userApi from "../api/userApi";
import Header from "../components/header/Header";
import NoMore from "../components/main/NoMore";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";
import Loading from "../utilities/Loading";

const AllMatchPage = () => {
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (authenticationApi.isAdmin()) {
			navigate("/dashboard");
		}
	}, [navigate]);

	useEffect(() => {
		const getPeople = async () => {
			setLoading(true);
			const response = await userApi.getPeopleLiked(navigate);

			setPeople(response.data.results);
			setLoading(false);
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

			{!authenticationApi.isLogin() ? (
				<NoMore />
			) : loading ? (
				<Loading />
			) : people ? (
				<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
					{people?.length > 0 &&
						people.map((item, index) => (
							<MatchCard primary key={index} user={item} />
						))}
				</div>
			) : (
				<NoMore isInMatch />
			)}

			<NavBar page="match" />
		</div>
	);
};

export default AllMatchPage;
