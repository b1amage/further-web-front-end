import React, { useEffect } from "react";
import AboutCard from "../components/about/AboutCard";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/NavBar";
import about from "../content/about";
import { useNavigate } from "react-router-dom";
import authenticationApi from "../api/authenticationApi";

const AboutPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (authenticationApi.isAdmin()) {
			navigate("/dashboard");
		}
	}, [navigate]);
	return (
		<div className="page-container">
			<Header title="About us" />

			<div className="grid grid-cols-1 gap-5 my-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 place-items-center">
				{about.length > 0 &&
					about.map((item, index) => (
						<AboutCard
							key={index}
							name={item.name}
							img={item.img}
							role={item.role}
							fb={item.fb}
						/>
					))}
			</div>

			<NavBar page="about" />
		</div>
	);
};

export default AboutPage;
