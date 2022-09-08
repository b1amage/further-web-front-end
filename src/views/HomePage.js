import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import Frame from "../components/main/Frame";
import Grid from "../components/main/Grid";
import userApi from "../api/userApi";
import { useNavigate } from "react-router-dom";
import NoMore from "../components/main/NoMore";

const HomePage = () => {
	const [profile, setProfile] = useState();

	const navigate = useNavigate();

	const getNewProfile = async () => {
		const response = await userApi.getInterestProfile();

		console.log(response);
		return response.data.results[0];
	};

	useEffect(() => {
		const getProfiles = async () => {
			const response = await userApi.getInterestProfile();

			console.log("on use effect", response);
			setProfile(response.data.results[0]);
		};

		getProfiles();
	}, []);

	const handleAccept = async () => {
		console.log("love");
		await userApi.swipe(profile._id, true, navigate);

		// TODO: check if matched
		const peopleLiked = await userApi.getPeopleLiked(navigate);

		const peopleLikedId = peopleLiked.data.results.map((item) => item._id);
		if (peopleLikedId.includes(profile._id)) {
			navigate(
				`/success/${profile._id}/${
					JSON.parse(localStorage.getItem("user")).userId
				}`
			);
		}

		// call new api
		const newUser = await getNewProfile();
		setProfile(newUser);
		console.log("profile", profile);
	};
	const handleRefuse = async () => {
		console.log("che");
		await userApi.swipe(profile._id, false, navigate);
		const newUser = await getNewProfile();
		setProfile(newUser);
		console.log("profile", profile);
	};

	return (
		<div className="page-container">
			<Header />
			<NavBar />

			{profile ? (
				<>
					<div className="md:hidden">
						<Frame
							handleRefuse={handleRefuse}
							handleAccept={handleAccept}
							profile={profile}
						/>
					</div>
					<div className="hidden md:block">
						<Grid
							handleRefuse={handleRefuse}
							handleAccept={handleAccept}
							profile={profile}
						/>
					</div>
				</>
			) : (
				<NoMore />
			)}
		</div>
	);
};

export default HomePage;
