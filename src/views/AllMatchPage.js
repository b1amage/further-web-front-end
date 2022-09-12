import React, { useEffect, useState } from "react";
import userApi from "../api/userApi";
import Header from "../components/header/Header";
import NoMore from "../components/main/NoMore";
import MatchCard from "../components/match/MatchCard";
import NavBar from "../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";
import Loading from "../utilities/Loading";
import SectionTitle from "../utilities/SectionTitle";

const AllMatchPage = () => {
	const [people, setPeople] = useState([]);
	const [matchPeople, setMatchPeople] = useState([]);
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

	useEffect(() => {
		const getPeopleMatch = async () => {
			// setLoading(true);
			const response = await userApi.getPeopleMatched(navigate);
			console.log("match people:", response);

			setMatchPeople(
				response.data.results.map((item) => item.participants[0])
			);

			console.log(
				"process:",
				response.data.results.map((item) => item.participants[0])
			);

			// setLoading(false);
		};

		if (authenticationApi.isLogin()) {
			getPeopleMatch();
		} else {
			setMatchPeople(null);
		}
	}, [navigate]);

	return (
		<div className="page-container">
			<Header title={`All match (${people?.length || 0})`} />
			<div>
				<SectionTitle className="my-8">Who Like you</SectionTitle>
				{!authenticationApi.isLogin() ? (
					<NoMore />
				) : loading ? (
					<Loading />
				) : people ? (
					<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
						{people?.length > 0 &&
							people.map((item, index) => (
								<MatchCard
									isMatch={false}
									primary
									key={index}
									user={item}
								/>
							))}
					</div>
				) : (
					<NoMore isInMatch />
				)}
			</div>

			<div>
				<SectionTitle className="my-8">Who Matched you</SectionTitle>
				{!authenticationApi.isLogin() ? (
					<NoMore />
				) : loading ? (
					<Loading />
				) : matchPeople ? (
					<div className="grid grid-cols-1 gap-5 my-10 md:gap-y-8 lg:gap-y-10 md:grid-cols-3 xl:grid-cols-4 place-items-center">
						{matchPeople?.length > 0 &&
							matchPeople.map((item, index) => (
								<MatchCard
									isMatch={true}
									primary
									key={index}
									user={item}
								/>
							))}
					</div>
				) : (
					<NoMore isInMatch />
				)}
			</div>

			<NavBar page="match" />
		</div>
	);
};

export default AllMatchPage;
